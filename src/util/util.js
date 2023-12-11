export function addDarkToFileName(filename) {
  const parts = filename.split('.');
  return parts[0] + '-dark.' + parts[1];
}
export function videoThumbnailBaseURL() {
  return 'https://play.vidyard.com/';
}
export function videoBaseURL() {
  return '/videos/';
}
export function discourseBaseURL() {
  return 'https://developer.sailpoint.com/discuss/';
}
export function developerWebsiteDomain() {
  return 'developer.sailpoint.com';
}
export function discourseMarketplaceCatagoryId() {
  if (discourseBaseURL().includes('soon')) {
    return 57;
  } else {
    return 59;
  }
}

export function discourseProductTag() {
  if (discourseBaseURL().includes('soon')) {
    return 11;
  } else {
    return 20;
  }
}
