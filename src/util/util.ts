export function addDarkToFileName(filename: string): string {
    const parts = filename.split('.');
    return parts[0] + '-dark.' + parts[1];
  }
  
  export function videoThumbnailBaseURL(): string {
    return 'https://play.vidyard.com/';
  }
  
  export function videoBaseURL(): string {
    return '/videos/';
  }
  
  export function discourseBaseURL(): string {
    return 'https://developer.sailpoint.com/discuss/';
  }
  
  export function developerWebsiteDomain(): string {
    return 'developer.sailpoint.com';
  }
  
  export function discourseMarketplaceCategoryId(): number {
    if (discourseBaseURL().includes('soon')) {
      return 57;
    } else {
      return 59;
    }
  }
  
  export function discourseProductTag(): number {
    if (discourseBaseURL().includes('soon')) {
      return 11;
    } else {
      return 45;
    }
  }
  
  export function CMSBaseURL(): string | undefined {
    return process.env.CMS_APP_API_ENDPOINT;
  }