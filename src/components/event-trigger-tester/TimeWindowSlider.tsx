import React, {useRef} from 'react';
import styles from './styles.module.css';

/** The visible part of the time axis, as fractions of the full range. */
export type TimeWindow = [number, number];

export const FULL_WINDOW: TimeWindow = [0, 1];

const HEIGHT = 44;
const TOP = 4;
const BOTTOM = HEIGHT - 4;
/** Pixels of pointer travel before a press on the track counts as a drag. */
const DRAG_THRESHOLD = 3;

type Part = 'start' | 'end' | 'move' | 'track';

const clamp = (value: number, low: number, high: number) =>
  Math.min(high, Math.max(low, value));

/** A window of the given width, centred on `center` and kept inside [0, 1]. */
export function windowAround(center: number, span: number): TimeWindow {
  const width = clamp(span, 0, 1);
  const start = clamp(center - width / 2, 0, 1 - width);
  return [start, start + width];
}

/** Halves (factor 0.5) or doubles (factor 2) the window around its centre. */
export function zoomWindow(
  [a, b]: TimeWindow,
  factor: number,
  minSpan: number,
): TimeWindow {
  return windowAround((a + b) / 2, Math.max(minSpan, (b - a) * factor));
}

export interface OverviewDot {
  /** Position on the full time range, 0 to 1. */
  x: number;
  /** Row position, 0 (top) to 1 (bottom). */
  y: number;
  missing: boolean;
}

interface Props {
  width: number;
  /** Pixel bounds of the track, aligned with the plot above it. */
  trackLeft: number;
  trackRight: number;
  dots: OverviewDot[];
  window: TimeWindow;
  /** The narrowest window allowed, as a fraction of the full range. */
  minSpan: number;
  /** Turns a fraction of the full range into readable time text. */
  timeText: (fraction: number) => string;
  onChange: (next: TimeWindow) => void;
}

/**
 * An overview of every delivery with a draggable window over it.
 *
 * Drag a handle to move the start or the end time, drag the window to slide
 * it, or drag on the track to select a new window. A click on the track
 * centres the window there.
 */
export default function TimeWindowSlider({
  width,
  trackLeft,
  trackRight,
  dots,
  window: [a, b],
  minSpan,
  timeText,
  onChange,
}: Props) {
  const drag = useRef<{
    part: Part;
    startX: number;
    anchor: number;
    initial: TimeWindow;
    moved: boolean;
  } | null>(null);

  const trackWidth = Math.max(1, trackRight - trackLeft);
  const fx = (fraction: number) => trackLeft + fraction * trackWidth;

  const toFraction = (clientX: number, svg: SVGSVGElement) => {
    const box = svg.getBoundingClientRect();
    const x = ((clientX - box.left) / box.width) * width;
    return clamp((x - trackLeft) / trackWidth, 0, 1);
  };

  const apply = (
    part: Part,
    f: number,
    state: NonNullable<typeof drag.current>,
  ) => {
    const [a0, b0] = state.initial;
    const delta = f - state.anchor;
    switch (part) {
      case 'start':
        onChange([clamp(a0 + delta, 0, b0 - minSpan), b0]);
        break;
      case 'end':
        onChange([a0, clamp(b0 + delta, a0 + minSpan, 1)]);
        break;
      case 'move': {
        const shift = clamp(delta, -a0, 1 - b0);
        onChange([a0 + shift, b0 + shift]);
        break;
      }
      case 'track': {
        let start = Math.min(state.anchor, f);
        let end = Math.max(state.anchor, f);
        if (end - start < minSpan) {
          [start, end] = windowAround((start + end) / 2, minSpan);
        }
        onChange([start, end]);
        break;
      }
    }
  };

  const onPointerDown = (event: React.PointerEvent<SVGSVGElement>) => {
    const target = (event.target as Element).closest('[data-part]');
    const part = target?.getAttribute('data-part') as Part | null;
    if (!part || event.button !== 0) return;
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = {
      part,
      startX: event.clientX,
      anchor: toFraction(event.clientX, event.currentTarget),
      initial: [a, b],
      moved: false,
    };
  };

  const onPointerMove = (event: React.PointerEvent<SVGSVGElement>) => {
    const state = drag.current;
    if (!state) return;
    if (
      !state.moved &&
      Math.abs(event.clientX - state.startX) < DRAG_THRESHOLD
    ) {
      return;
    }
    state.moved = true;
    apply(state.part, toFraction(event.clientX, event.currentTarget), state);
  };

  const onPointerUp = (event: React.PointerEvent<SVGSVGElement>) => {
    const state = drag.current;
    drag.current = null;
    if (state && state.part === 'track' && !state.moved) {
      onChange(windowAround(state.anchor, b - a));
    }
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const onHandleKey =
    (part: 'start' | 'end') => (event: React.KeyboardEvent) => {
      const step = Math.max(
        minSpan / 2,
        (b - a) * (event.shiftKey ? 0.25 : 0.05),
      );
      let next: number;
      const current = part === 'start' ? a : b;
      switch (event.key) {
        case 'ArrowLeft':
        case 'ArrowDown':
          next = current - step;
          break;
        case 'ArrowRight':
        case 'ArrowUp':
          next = current + step;
          break;
        case 'Home':
          next = 0;
          break;
        case 'End':
          next = 1;
          break;
        default:
          return;
      }
      event.preventDefault();
      onChange(
        part === 'start'
          ? [clamp(next, 0, b - minSpan), b]
          : [a, clamp(next, a + minSpan, 1)],
      );
    };

  const dotTop = TOP + 6;
  const dotRange = BOTTOM - TOP - 12;
  const x0 = fx(a);
  const x1 = fx(b);
  const handleTop = TOP + 4;
  const handleHeight = BOTTOM - TOP - 8;

  return (
    <svg
      className={styles.slider}
      width={width}
      height={HEIGHT}
      viewBox={`0 0 ${width} ${HEIGHT}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}>
      <rect
        data-part="track"
        className={styles.sliderTrack}
        x={trackLeft}
        y={TOP}
        width={trackWidth}
        height={BOTTOM - TOP}
        rx={4}
      />
      {dots.map((dot, i) => (
        <circle
          key={i}
          className={`${styles.sliderDot} ${
            dot.missing ? styles.sliderDotMissing : ''
          }`}
          cx={fx(dot.x)}
          cy={dotTop + dot.y * dotRange}
          r={2}
        />
      ))}
      <rect
        className={styles.sliderShade}
        x={trackLeft}
        y={TOP}
        width={Math.max(0, x0 - trackLeft)}
        height={BOTTOM - TOP}
      />
      <rect
        className={styles.sliderShade}
        x={x1}
        y={TOP}
        width={Math.max(0, trackRight - x1)}
        height={BOTTOM - TOP}
      />
      <rect
        data-part="move"
        className={styles.sliderWindow}
        x={x0}
        y={TOP}
        width={Math.max(1, x1 - x0)}
        height={BOTTOM - TOP}
      />

      {/* Each handle's hit area leans outward, so a narrow window keeps both reachable. */}
      <g
        data-part="start"
        className={styles.sliderHandle}
        role="slider"
        tabIndex={0}
        aria-label="Chart start time"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(a * 100)}
        aria-valuetext={timeText(a)}
        onKeyDown={onHandleKey('start')}>
        <rect
          className={styles.sliderHit}
          x={x0 - 12}
          y={TOP}
          width={14}
          height={BOTTOM - TOP}
        />
        <rect x={x0 - 3} y={handleTop} width={6} height={handleHeight} rx={2} />
        <title>{`Start: ${timeText(a)}`}</title>
      </g>
      <g
        data-part="end"
        className={styles.sliderHandle}
        role="slider"
        tabIndex={0}
        aria-label="Chart end time"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(b * 100)}
        aria-valuetext={timeText(b)}
        onKeyDown={onHandleKey('end')}>
        <rect
          className={styles.sliderHit}
          x={x1 - 2}
          y={TOP}
          width={14}
          height={BOTTOM - TOP}
        />
        <rect x={x1 - 3} y={handleTop} width={6} height={handleHeight} rx={2} />
        <title>{`End: ${timeText(b)}`}</title>
      </g>
    </svg>
  );
}
