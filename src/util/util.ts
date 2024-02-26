import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function addDarkToFileName(filename) {
  const parts = filename.split('.');
  return parts[0] + '-dark.' + parts[1];
}

export function  discourseBaseURL() {return 'https://developer.sailpoint.com/discuss/'}
export function  developerWebsiteDomain() {return 'developer.sailpoint.com'} 
export function discourseMarketplaceCatagoryId() {
  if (discourseBaseURL().includes('soon')) {
    return 57
  } else {
    return 59
  }
}

export function discourseProductTag() {
  if (discourseBaseURL().includes('soon')) {
    return 11
  } else {
    return 20
  }
}

export function CMSBaseURL() { return process.env.CMS_APP_API_ENDPOINT}