import React, {useEffect, useMemo, useRef, useState} from 'react';
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
import styles from './styles.module.css';

const BAND_HEIGHT = 30;
const NUMERIC_PLOT_HEIGHT = 180;
const MARGIN_TOP = 12;
const MARGIN_RIGHT = 20;
const MARGIN_BOTTOM = 40;
const LABEL_CHARS = 26;
/** Space between the longest value label and the plot. */
const LABEL_GAP = 18;

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
  plotted: PlottedPoint[];
}

function computeLayout(series: Series, width: number, font: string): Layout {
  const numeric = series.kind === 'numeric';
  const plotted = numeric
    ? series.points.filter((p) => p.present)
    : series.points;

  // Y axis: bands for text, round ticks for numbers.
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

  // X axis: arrival time.
  const times = plotted.map((point) => point.t);
  const [t0, t1] = times.length
    ? padTimeDomain(Math.min(...times), Math.max(...times))
    : padTimeDomain(Date.now(), Date.now());
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

  let path = '';
  marks.forEach((mark, i) => {
    if (i === 0) {
      path = `M${mark.x},${mark.y}`;
    } else if (numeric) {
      path += ` L${mark.x},${mark.y}`;
    } else {
      // Step: hold the previous value until this delivery, then jump.
      path += ` H${mark.x} V${mark.y}`;
    }
  });

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
    plotted: marks,
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
 * as a line on a linear axis.
 */
export default function ValueChart({series, label, onPick}: Props) {
  const host = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(640);
  const [font, setFont] = useState('sans-serif');
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

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
    () => computeLayout(series, width, font),
    [series, width, font],
  );
  const hovered = hoverIndex === null ? null : l.plotted[hoverIndex] ?? null;
  const flipped = hovered !== null && hovered.x > l.width - 220;

  const last = series.points[series.points.length - 1];
  const summary = last
    ? `${label}: ${series.points.length} deliveries, ${series.changes} changes, latest value ${last.text}.`
    : `${label}: no deliveries yet.`;

  const pick = () => {
    if (hovered) onPick(hovered.point.requestId);
  };

  const onPointerMove = (event: React.PointerEvent<SVGSVGElement>) => {
    if (!l.plotted.length) return;
    const box = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - box.left) / box.width) * l.width;
    setHoverIndex(nearestIndex(l.plotted, x));
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    const count = l.plotted.length;
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
    <div
      ref={host}
      className={styles.chart}
      tabIndex={0}
      role="img"
      aria-label={`${summary} Use the arrow keys to step through deliveries and Enter to open one.`}
      onKeyDown={onKeyDown}
      onBlur={() => setHoverIndex(null)}>
      <svg
        width={l.width}
        height={l.height}
        viewBox={`0 0 ${l.width} ${l.height}`}
        onPointerMove={onPointerMove}
        onPointerLeave={() => setHoverIndex(null)}
        onClick={pick}>
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

        <path className={styles.chartLine} d={l.path} />

        {l.plotted.map((mark, i) => (
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
  );
}
