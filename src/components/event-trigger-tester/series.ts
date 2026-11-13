import type {CapturedRequest} from './types';
import {displayValue, getAtPath} from './jsonPath';
import type {PathSegment} from './jsonPath';

export type ParsedBody = {ok: true; value: unknown} | {ok: false};

const parsedBodies = new WeakMap<CapturedRequest, ParsedBody>();

/** The request body parsed as JSON, computed once per request. */
export function parseBody(request: CapturedRequest): ParsedBody {
  let parsed = parsedBodies.get(request);
  if (!parsed) {
    try {
      parsed = request.body
        ? {ok: true, value: JSON.parse(request.body) as unknown}
        : {ok: false};
    } catch {
      parsed = {ok: false};
    }
    parsedBodies.set(request, parsed);
  }
  return parsed;
}

/** One delivery's value for a watched field. */
export interface SeriesPoint {
  t: number;
  requestId: string;
  /** False when the body is JSON but has no value at this path. */
  present: boolean;
  value: unknown;
  /** The value as one line of text. */
  text: string;
  /** True when the text differs from the previous point's. */
  changed: boolean;
}

export type SeriesKind = 'numeric' | 'categorical';

export interface Series {
  points: SeriesPoint[];
  kind: SeriesKind;
  /** Distinct texts in first-seen order, for categorical charts. */
  categories: string[];
  changes: number;
}

export const MISSING_LABEL = '(not in payload)';

/**
 * Extracts a field from every request, oldest first.
 *
 * Requests whose body is not JSON are skipped: they cannot carry the field.
 * Requests whose JSON lacks the field are skipped too unless `includeMissing`
 * is set. One bin often receives several trigger types, and an event of
 * another type is not evidence that the value changed.
 */
export function buildSeries(
  requests: readonly CapturedRequest[],
  segments: readonly PathSegment[],
  options: {includeMissing: boolean},
): Series {
  const points: SeriesPoint[] = [];
  let previous: string | undefined;
  let changes = 0;
  for (const request of requests) {
    const parsed = parseBody(request);
    if (!parsed.ok) continue;
    const lookup = getAtPath(parsed.value, segments);
    if (!lookup.found && !options.includeMissing) continue;
    const text = lookup.found ? displayValue(lookup.value) : MISSING_LABEL;
    const changed = previous !== undefined && previous !== text;
    if (changed) changes += 1;
    previous = text;
    points.push({
      t: Date.parse(request.receivedAt),
      requestId: request.id,
      present: lookup.found,
      value: lookup.found ? lookup.value : undefined,
      text,
      changed,
    });
  }

  const present = points.filter((point) => point.present);
  const kind: SeriesKind =
    present.length > 0 &&
    present.every(
      (point) =>
        typeof point.value === 'number' && Number.isFinite(point.value),
    )
      ? 'numeric'
      : 'categorical';

  const categories: string[] = [];
  const seen = new Set<string>();
  for (const point of points) {
    if (point.present && !seen.has(point.text)) {
      seen.add(point.text);
      categories.push(point.text);
    }
  }
  // The missing band always sits last, below the real values.
  if (points.some((point) => !point.present)) {
    categories.push(MISSING_LABEL);
  }

  return {points, kind, categories, changes};
}
