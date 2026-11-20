/**
 * Paths into a JSON document, such as `changes[0].newValue` or
 * `identity["display name"]`.
 *
 * The watch stores the path as text, so it must round-trip: every path that
 * `formatPath` writes, `parsePath` reads back to the same segments.
 */

export type PathSegment = string | number;

const IDENTIFIER = /^[A-Za-z_$][A-Za-z0-9_$-]*$/;

export function formatPath(segments: readonly PathSegment[]): string {
  let text = '';
  for (const segment of segments) {
    if (typeof segment === 'number') {
      text += `[${segment}]`;
    } else if (IDENTIFIER.test(segment)) {
      text += text ? `.${segment}` : segment;
    } else {
      text += `[${JSON.stringify(segment)}]`;
    }
  }
  return text;
}

/**
 * Reads a path. Accepts an optional leading `$` or `$.`, the form JSONPath
 * users type out of habit. Throws with a readable message on bad input.
 */
export function parsePath(input: string): PathSegment[] {
  let text = input.trim();
  if (text.startsWith('$')) {
    text = text.slice(1);
    if (text.startsWith('.')) {
      text = text.slice(1);
    }
  }
  if (!text) {
    throw new Error('The path is empty.');
  }

  const segments: PathSegment[] = [];
  let i = 0;
  let expectSeparator = false;
  while (i < text.length) {
    const char = text[i];
    if (char === '.') {
      if (!expectSeparator) {
        throw new Error(`Unexpected "." at position ${i + 1}.`);
      }
      i += 1;
      expectSeparator = false;
      const match = /^[A-Za-z_$][A-Za-z0-9_$-]*/.exec(text.slice(i));
      if (!match) {
        throw new Error(`Expected a field name at position ${i + 1}.`);
      }
      segments.push(match[0]);
      i += match[0].length;
      expectSeparator = true;
    } else if (char === '[') {
      const rest = text.slice(i);
      const index = /^\[(\d+)\]/.exec(rest);
      const quoted = /^\[("(?:[^"\\]|\\.)*")\]/.exec(rest);
      if (index?.[1]) {
        segments.push(Number(index[1]));
        i += index[0].length;
      } else if (quoted?.[1]) {
        segments.push(JSON.parse(quoted[1]) as string);
        i += quoted[0].length;
      } else {
        throw new Error(`Expected [0] or ["name"] at position ${i + 1}.`);
      }
      expectSeparator = true;
    } else if (!expectSeparator) {
      const match = /^[A-Za-z_$][A-Za-z0-9_$-]*/.exec(text.slice(i));
      if (!match) {
        throw new Error(`Expected a field name at position ${i + 1}.`);
      }
      segments.push(match[0]);
      i += match[0].length;
      expectSeparator = true;
    } else {
      throw new Error(`Unexpected "${char}" at position ${i + 1}.`);
    }
  }
  return segments;
}

export type Lookup = {found: true; value: unknown} | {found: false};

/** The value at a path, or `found: false` when any step is missing. */
export function getAtPath(
  root: unknown,
  segments: readonly PathSegment[],
): Lookup {
  let current: unknown = root;
  for (const segment of segments) {
    if (typeof segment === 'number') {
      if (!Array.isArray(current) || segment >= current.length) {
        return {found: false};
      }
      current = current[segment];
    } else {
      if (
        typeof current !== 'object' ||
        current === null ||
        Array.isArray(current) ||
        !Object.prototype.hasOwnProperty.call(current, segment)
      ) {
        return {found: false};
      }
      current = (current as Record<string, unknown>)[segment];
    }
  }
  return {found: true, value: current};
}

/** A value as one line of text, for chart labels and tables. */
export function displayValue(value: unknown): string {
  if (typeof value === 'string') {
    return value;
  }
  if (value === undefined) {
    return '(missing)';
  }
  return JSON.stringify(value);
}
