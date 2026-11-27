import React, {useEffect, useId, useMemo, useRef, useState} from 'react';
import type {Series, SeriesPoint} from './series';
import {
  formatAxisNumber,
  measureLabel,
  niceTicks,
  padTimeDomain,
  timeTicks,
  truncate,
} from './chartScale';
import type {TimeTick} from './chartScale';
import {formatTime} from './format';
import TimeWindowSlider, {FULL_WINDOW, zoomWindow} from './TimeWindowSlider';
import type {OverviewDot, TimeWindow} from './TimeWindowSlider';
import styles from './styles.module.css';

const BAND_HEIGHT = 30;
const NUMERIC_PLOT_HEIGHT = 180;
const MARGIN_TOP = 12;
const MARGIN_RIGHT = 20;
const MARGIN_BOTTOM = 40;
const LABEL_CHARS = 26;
/** Space between the longest value label and the plot. */
const LABEL_GAP = 18;
/** The narrowest window: 10 ms, so deliveries in one burst can be told apart. */
const MIN_WINDOW_MS = 10;

interface PlottedPoint {
  x: number;
  y: number;
  point: SeriesPoint;
}

interface Layout {
  width: number;
  height: number;
  plotLeft: number;
  plotRight: number;
  plotTop: number;
  plotBottom: number;
  yLabels: {y: number; text: string; full: string}[];
  xTicks: (TimeTick & {x: number})[];
  path: string;
  /** Marks inside the time window, in time order. */
  visible: PlottedPoint[];
  /** Every mark, for the overview under the chart. */
  overview: OverviewDot[];
  /** The full time range, padded, in ms. */
  domain: [number, number];
}

function computeLayout(
  series: Series,
  width: number,
  font: string,
  [wa, wb]: TimeWindow,
): Layout {
  const numeric = series.kind === 'numeric';
  const plotted = numeric
    ? series.points.filter((p) => p.present)
    : series.points;

  // Y axis: bands for text, round ticks for numbers. The axis always covers
  // every point, so it stays still while the time window moves.
  let yLabels: Layout['yLabels'];
  let plotHeight: number;
  let yOf: (point: SeriesPoint) => number;
  if (numeric) {
    const values = plotted.map((point) => point.value as number);
    const ticks = niceTicks(Math.min(...values), Math.max(...values));
    const low = ticks[0] ?? 0;
    const high = ticks[ticks.length - 1] ?? 1;
    plotHeight = NUMERIC_PLOT_HEIGHT;
    const scale = (value: number) =>
      MARGIN_TOP + plotHeight - ((value - low) / (high - low)) * plotHeight;
    yOf = (point) => scale(point.value as number);
    yLabels = ticks.map((tick) => {
      const text = formatAxisNumber(tick, high);
      return {y: scale(tick), text, full: text};
    });
  } else {
    const index = new Map(series.categories.map((text, i) => [text, i]));
    plotHeight = Math.max(2, series.categories.length) * BAND_HEIGHT;
    const bandY = (i: number) => MARGIN_TOP + BAND_HEIGHT * (i + 0.5);
    yOf = (point) => bandY(index.get(point.text) ?? 0);
    yLabels = series.categories.map((text, i) => ({
      y: bandY(i),
      text: truncate(text, LABEL_CHARS),
      full: text,
    }));
  }

  const longest = Math.max(
    0,
    ...yLabels.map((label) => measureLabel(label.text, font)),
  );
  const plotLeft = Math.min(220, Math.max(44, Math.ceil(longest) + LABEL_GAP));
  const plotRight = width - MARGIN_RIGHT;
  const plotTop = MARGIN_TOP;
  const plotBottom = MARGIN_TOP + plotHeight;

  // X axis: arrival time, limited to the chosen window of the full range.
  const times = plotted.map((point) => point.t);
  const domain = times.length
    ? padTimeDomain(Math.min(...times), Math.max(...times))
    : padTimeDomain(Date.now(), Date.now());
  const span = domain[1] - domain[0];
  const t0 = domain[0] + wa * span;
  const t1 = domain[0] + wb * span;
  const xOf = (t: number) =>
    plotLeft + ((t - t0) / (t1 - t0)) * (plotRight - plotLeft);
  const maxTicks = Math.max(2, Math.floor((plotRight - plotLeft) / 90));
  // A tick label is about 80px wide and centred, so one closer than 40px to
  // either edge would be cut off.
  const xTicks = timeTicks(t0, t1, maxTicks)
    .map((tick) => ({...tick, x: xOf(tick.t)}))
    .filter((tick) => tick.x >= 40 && tick.x <= width - 40);

  const marks = plotted.map((point) => ({
    x: xOf(point.t),
    y: yOf(point),
    point,
  }));

  // The line runs through every mark and is clipped to the plot. A step line
  // is horizontal off-screen, so its x can be clamped without changing the
  // picture. That keeps coordinates small when the window is narrow.
  const clampX = (x: number) =>
    numeric ? x : Math.min(plotRight + 20, Math.max(plotLeft - 20, x));
  let path = '';
  marks.forEach((mark, i) => {
    const x = clampX(mark.x);
    if (i === 0) {
      path = `M${x},${mark.y}`;
    } else if (numeric) {
      path += ` L${x},${mark.y}`;
    } else {
      // Step: hold the previous value until this delivery, then jump.
      path += ` H${x} V${mark.y}`;
    }
  });

  const rowRange = Math.max(1, plotHeight);
  return {
    width,
    height: plotBottom + MARGIN_BOTTOM,
    plotLeft,
    plotRight,
    plotTop,
    plotBottom,
    yLabels,
    xTicks,
    path,
    visible: marks.filter(
      (mark) => mark.x >= plotLeft - 0.5 && mark.x <= plotRight + 0.5,
    ),
    overview: marks.map((mark) => ({
      x: (mark.point.t - domain[0]) / span,
      y: (mark.y - MARGIN_TOP) / rowRange,
      missing: !mark.point.present,
    })),
    domain,
  };
}

/** Binary search over marks sorted by x. */
function nearestIndex(marks: PlottedPoint[], x: number): number {
  let low = 0;
  let high = marks.length - 1;
  while (low < high) {
    const mid = (low + high) >> 1;
    if ((marks[mid]?.x ?? 0) < x) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  const before = marks[low - 1];
  const at = marks[low];
  if (before && at && x - before.x < at.x - x) {
    return low - 1;
  }
  return low;
}

const sameWindow = (a: TimeWindow, b: TimeWindow) =>
  a[0] === b[0] && a[1] === b[1];

interface Props {
  series: Series;
  label: string;
  /** Called with a request id when a mark is clicked or chosen with Enter. */
  onPick: (requestId: string) => void;
}

/**
 * A watched field over time: one mark per delivery.
 *
 * Text values (the usual case for ISC events) draw as a step chart with one
 * row per distinct value, so a change reads as a vertical jump. Numbers draw
 * as a line on a linear axis. A slider under the chart sets the start and
 * end time, so a burst of deliveries can be spread out.
 */
export default function ValueChart({series, label, onPick}: Props) {
  const host = useRef<HTMLDivElement>(null);
  const clipId = `ett-clip-${useId().replace(/:/g, '')}`;
  const [width, setWidth] = useState(640);
  const [font, setFont] = useState('sans-serif');
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [timeWindow, setTimeWindow] = useState<TimeWindow>(FULL_WINDOW);

  useEffect(() => {
    const element = host.current;
    if (!element) return undefined;
    setFont(getComputedStyle(element).fontFamily || 'sans-serif');
    const observer = new ResizeObserver((entries) => {
      const measured = entries[0]?.contentRect.width;
      if (measured) setWidth(Math.max(280, Math.floor(measured)));
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const l = useMemo(
    () => computeLayout(series, width, font, timeWindow),
    [series, width, font, timeWindow],
  );

  // The hover index points into the visible marks, which change with the window.
  useEffect(() => setHoverIndex(null), [timeWindow]);

  const hovered = hoverIndex === null ? null : l.visible[hoverIndex] ?? null;
  const flipped = hovered !== null && hovered.x > l.width - 220;

  const span = l.domain[1] - l.domain[0];
  const minSpan = Math.min(1, MIN_WINDOW_MS / span);
  const timeAt = (fraction: number) => l.domain[0] + fraction * span;
  const zoomed = !sameWindow(timeWindow, FULL_WINDOW);
  const total = l.overview.length;

  const last = series.points[series.points.length - 1];
  const summary = last
    ? `${label}: ${series.points.length} deliveries, ${series.changes} changes, latest value ${last.text}.`
    : `${label}: no deliveries yet.`;

  const pick = () => {
    if (hovered) onPick(hovered.point.requestId);
  };

  const onPointerMove = (event: React.PointerEvent<SVGSVGElement>) => {
    if (!l.visible.length) return;
    const box = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - box.left) / box.width) * l.width;
    setHoverIndex(nearestIndex(l.visible, x));
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    const count = l.visible.length;
    if (!count) return;
    let next: number | null = hoverIndex;
    switch (event.key) {
      case 'ArrowRight':
        next = hoverIndex === null ? 0 : Math.min(count - 1, hoverIndex + 1);
        break;
      case 'ArrowLeft':
        next = hoverIndex === null ? count - 1 : Math.max(0, hoverIndex - 1);
        break;
      case 'Home':
        next = 0;
        break;
      case 'End':
        next = count - 1;
        break;
      case 'Enter':
        pick();
        return;
      case 'Escape':
        next = null;
        break;
      default:
        return;
    }
    event.preventDefault();
    setHoverIndex(next);
  };

  return (
    <div ref={host} className={styles.chartWrap}>
      <div
        className={styles.chart}
        tabIndex={0}
        role="img"
        aria-label={`${summary} Use the arrow keys to step through the deliveries in view and Enter to open one.`}
        onKeyDown={onKeyDown}
        onBlur={() => setHoverIndex(null)}>
        <svg
          width={l.width}
          height={l.height}
          viewBox={`0 0 ${l.width} ${l.height}`}
          onPointerMove={onPointerMove}
          onPointerLeave={() => setHoverIndex(null)}
          onClick={pick}>
          <defs>
            {/* Room for a 6px marker at the plot edge. */}
            <clipPath id={clipId}>
              <rect
                x={l.plotLeft - 7}
                y={0}
                width={l.plotRight - l.plotLeft + 14}
                height={l.plotBottom + 7}
              />
            </clipPath>
          </defs>

          {l.yLabels.map((yl) => (
            <g key={yl.full}>
              <line
                className={styles.chartGrid}
                x1={l.plotLeft}
                x2={l.plotRight}
                y1={yl.y}
                y2={yl.y}
              />
              <text
                className={`${styles.chartAxisLabel} ${styles.chartYLabel}`}
                x={l.plotLeft - 10}
                y={yl.y}>
                <title>{yl.full}</title>
                {yl.text}
              </text>
            </g>
          ))}

          <line
            className={styles.chartAxis}
            x1={l.plotLeft}
            x2={l.plotRight}
            y1={l.plotBottom + 6}
            y2={l.plotBottom + 6}
          />
          {l.xTicks.map((tick) => (
            <g key={tick.t}>
              <text
                className={`${styles.chartAxisLabel} ${styles.chartXLabel}`}
                x={tick.x}
                y={l.plotBottom + 22}>
                {tick.time}
              </text>
              {tick.date && (
                <text
                  className={`${styles.chartAxisLabel} ${styles.chartXLabel}`}
                  x={tick.x}
                  y={l.plotBottom + 36}>
                  {tick.date}
                </text>
              )}
            </g>
          ))}

          {hovered && (
            <line
              className={styles.chartCrosshair}
              x1={hovered.x}
              x2={hovered.x}
              y1={l.plotTop}
              y2={l.plotBottom}
            />
          )}

          <g clipPath={`url(#${clipId})`}>
            <path className={styles.chartLine} d={l.path} />
            {l.visible.map((mark, i) => (
              <circle
                key={mark.point.requestId}
                className={`${styles.chartMarker} ${
                  mark.point.present ? '' : styles.chartMarkerMissing
                }`}
                cx={mark.x}
                cy={mark.y}
                r={hoverIndex === i ? 6 : 4}
              />
            ))}
          </g>

          {/* Transparent hit layer, so the pointer never has to land on a 4px dot. */}
          <rect
            className={styles.chartHit}
            x={l.plotLeft - 12}
            y={l.plotTop}
            width={l.plotRight - l.plotLeft + 24}
            height={l.plotBottom - l.plotTop}
          />
        </svg>

        {hovered && (
          <div
            className={`${styles.chartTooltip} ${
              flipped ? styles.chartTooltipFlipped : ''
            }`}
            style={{left: hovered.x, top: hovered.y}}>
            <strong className={styles.chartTooltipValue}>
              {hovered.point.text}
            </strong>
            <span>{formatTime(hovered.point.t)}</span>
            {hovered.point.changed && (
              <span className={styles.chartTooltipNote}>
                Changed at this delivery
              </span>
            )}
            <span className={styles.muted}>Click to open the request</span>
          </div>
        )}
      </div>

      {total > 1 && (
        <>
          <TimeWindowSlider
            width={l.width}
            trackLeft={l.plotLeft}
            trackRight={l.plotRight}
            dots={l.overview}
            window={timeWindow}
            minSpan={minSpan}
            timeText={(fraction) => formatTime(timeAt(fraction))}
            onChange={setTimeWindow}
          />
          <div
            className={styles.sliderControls}
            style={{paddingLeft: l.plotLeft}}>
            <span className={styles.muted}>
              {formatTime(timeAt(timeWindow[0]))} to{' '}
              {formatTime(timeAt(timeWindow[1]))} · {l.visible.length} of{' '}
              {total} deliveries
            </span>
            <span className={styles.spacer} />
            <button
              type="button"
              className="button button--secondary button--sm"
              disabled={timeWindow[1] - timeWindow[0] <= minSpan}
              onClick={() =>
                setTimeWindow(zoomWindow(timeWindow, 0.5, minSpan))
              }>
              Zoom in
            </button>
            <button
              type="button"
              className="button button--secondary button--sm"
              disabled={!zoomed}
              onClick={() => setTimeWindow(zoomWindow(timeWindow, 2, minSpan))}>
              Zoom out
            </button>
            <button
              type="button"
              className="button button--secondary button--sm"
              disabled={!zoomed}
              onClick={() => setTimeWindow(FULL_WINDOW)}>
              Reset
            </button>
          </div>
        </>
      )}
    </div>
  );
}
