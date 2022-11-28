export function addDarkToFileName(filename) {
  const parts = filename.split('.');
  return parts[0] + '-dark.' + parts[1];
}
