import {clsx, type ClassValue} from 'clsx';
import {twMerge} from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function addDarkToFileName(filename) {
  const parts = filename.split('.');
  return parts[0] + '-dark.' + parts[1];
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

export function CMSBaseURL() {
  return process.env.CMS_APP_API_ENDPOINT;
}

export function shuffleArray(array) {
  var m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
