export function addDarkToFileName(filename) {
  const parts = filename.split('.');
  return parts[0] + '-dark.' + parts[1];
}

export function  discourseBaseURL() {return 'https://developer.sailpoint.com/discuss/'}
export function  developerWebsiteDomain() {return 'developer.sailpoint.com'} 