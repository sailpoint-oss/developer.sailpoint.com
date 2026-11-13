/** Scale and tick helpers for the value chart. Pure functions. */

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const TIME_STEPS = [
  SECOND,
  5 * SECOND,
  15 * SECOND,
  30 * SECOND,
  MINUTE,
  5 * MINUTE,
  15 * MINUTE,
  30 * MINUTE,
  HOUR,
  3 * HOUR,
  6 * HOUR,
  12 * HOUR,
  DAY,
];

export interface TimeTick {
  t: number;
  time: string;
  /** Set on the first tick and wherever the calendar day changes. */
  date: string | null;
}

/**
 * Pads a time domain so the first and last marks sit inside the plot. A lone
 * point or a burst shorter than 2 seconds is widened to 2 seconds, centred.
 */
export function padTimeDomain(min: number, max: number): [number, number] {
  const span = max - min;
  const minimumSpan = 2 * SECOND;
  const pad = Math.max(span * 0.04, (minimumSpan - span) / 2);
  return [min - pad, max + pad];
}

/** Ticks on round local-time boundaries, at most `maxTicks` of them. */
export function timeTicks(
  min: number,
  max: number,
  maxTicks: number,
): TimeTick[] {
  const span = max - min;
  const step =
    TIME_STEPS.find((candidate) => span / candidate <= maxTicks) ??
    Math.ceil(span / maxTicks / DAY) * DAY;
  // Align to local time, so an hourly tick lands on :00 in the viewer's zone.
  const offset = -new Date(min).getTimezoneOffset() * MINUTE;
  const first = Math.ceil((min + offset) / step) * step - offset;

  const timeFormat = new Intl.DateTimeFormat(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    ...(step < MINUTE ? {second: '2-digit'} : {}),
  });
  const dateFormat = new Intl.DateTimeFormat(undefined, {
    month: 'short',
    day: 'numeric',
  });

  const ticks: TimeTick[] = [];
  let previousDay = '';
  for (let t = first; t <= max; t += step) {
    const day = new Date(t).toDateString();
    ticks.push({
      t,
      time: step >= DAY ? dateFormat.format(t) : timeFormat.format(t),
      date: step < DAY && day !== previousDay ? dateFormat.format(t) : null,
    });
    previousDay = day;
  }
  return ticks;
}

/** Round tick values covering [min, max], about `count` of them. */
export function niceTicks(min: number, max: number, count = 5): number[] {
  if (min === max) {
    const delta = Math.abs(min) * 0.1 || 1;
    min -= delta;
    max += delta;
  }
  const rough = (max - min) / count;
  const magnitude = 10 ** Math.floor(Math.log10(rough));
  const residual = rough / magnitude;
  const step =
    (residual >= 5 ? 10 : residual >= 2 ? 5 : residual >= 1 ? 2 : 1) *
    magnitude;
  const start = Math.floor(min / step) * step;
  const end = Math.ceil(max / step) * step;
  const ticks: number[] = [];
  for (let value = start; value <= end + step / 2; value += step) {
    // Rounding removes float noise such as 0.30000000000000004.
    ticks.push(Number(value.toPrecision(12)));
  }
  return ticks;
}

const fullNumber = new Intl.NumberFormat(undefined, {maximumFractionDigits: 6});
const compactNumber = new Intl.NumberFormat(undefined, {
  notation: 'compact',
  maximumFractionDigits: 1,
});

/** Full under 10,000; compact on an axis that reaches it. */
export function formatAxisNumber(value: number, axisMax: number): string {
  return Math.abs(axisMax) >= 10_000
    ? compactNumber.format(value)
    : fullNumber.format(value);
}

let measureContext: CanvasRenderingContext2D | null | undefined;

/** Rendered width of `text` in the chart's 12px label font. */
export function measureLabel(text: string, fontFamily: string): number {
  if (measureContext === undefined) {
    measureContext =
      typeof document === 'undefined'
        ? null
        : document.createElement('canvas').getContext('2d');
  }
  if (!measureContext) {
    return text.length * 7.5;
  }
  measureContext.font = `12px ${fontFamily}`;
  return measureContext.measureText(text).width;
}

/** Cuts long text to `max` characters with an ellipsis. */
export function truncate(text: string, max: number): string {
  return text.length > max ? `${text.slice(0, max - 1)}…` : text;
}
