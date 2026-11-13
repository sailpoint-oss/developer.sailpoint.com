/** Date and number formats, in the viewer's locale and time zone. */

const short = new Intl.DateTimeFormat(undefined, {
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
});

const medium = new Intl.DateTimeFormat(undefined, {
  dateStyle: 'medium',
  timeStyle: 'medium',
});

const numberFormat = new Intl.NumberFormat();

function toDate(value: string | number): Date {
  return typeof value === 'number'
    ? new Date(value)
    : new Date(Date.parse(value));
}

/** For example "Nov 13, 14:02:09". */
export function formatShort(value: string | number): string {
  return short.format(toDate(value));
}

/** For example "Nov 13, 14:02:09.123". */
export function formatTime(value: string | number): string {
  const date = toDate(value);
  return `${short.format(date)}.${String(date.getMilliseconds()).padStart(
    3,
    '0',
  )}`;
}

/** For example "Nov 13, 2026, 2:02:09 PM". */
export function formatMedium(value: string | number): string {
  return medium.format(toDate(value));
}

export function formatNumber(value: number): string {
  return numberFormat.format(value);
}
