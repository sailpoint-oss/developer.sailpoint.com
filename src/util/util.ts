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
  // The forum adds a new tag at each rebrand rather than renaming the old one:
  // `identity-security-cloud`, then `sailpoint-human-fabric`, now
  // `sailpoint-identity-security`. Every topic tagged before a rebrand keeps
  // its old tag, so product-tag queries must match ANY of the tags, or
  // historical blog/CoLab/video content disappears from the site.
  // Once the forum back-fills the new tag onto old topics, delete
  // LEGACY_PRODUCT_TAGS and the expansion in discourseFilterQuery().
  export const PRODUCT_TAG = 'sailpoint-identity-security';
  export const LEGACY_PRODUCT_TAGS = [
    'sailpoint-human-fabric',
    'identity-security-cloud',
  ];
  const ALL_PRODUCT_TAGS = [PRODUCT_TAG, ...LEGACY_PRODUCT_TAGS];
  
  export function isProductTag(tag: string): boolean {
    return ALL_PRODUCT_TAGS.includes(tag);
  }
  
  // Expands the product tag to the new and every legacy slug, leaving any
  // other tag untouched.
  export function expandProductTags(tags: string[]): string[] {
    const out: string[] = [];
    for (const tag of tags) {
      if (isProductTag(tag)) {
        if (!out.includes(PRODUCT_TAG)) {
          out.push(...ALL_PRODUCT_TAGS);
        }
      } else if (!out.includes(tag)) {
        out.push(tag);
      }
    }
    return out;
  }
  
  // Collapses any product slug to the new one, so UI state and checkbox
  // identity are single-valued even while several tags exist on the forum.
  // discourseFilterQuery() expands it back to all of them at query time.
  export function canonicalProductTag(tag: string): string {
    return isProductTag(tag) ? PRODUCT_TAG : tag;
  }
  
  // Builds the `q` value for Discourse's /filter.json. Within one clause a comma
  // means OR; separate clauses are ANDed. So the product tags collapse into a
  // single OR clause while each other tag gets its own, giving
  // (new OR any legacy) AND videoType — verified against the live forum.
  export function discourseFilterQuery(
    categorySlug: string,
    tags: string[],
  ): string {
    const clauses = [`category:${categorySlug}`];
    if (tags.some(isProductTag)) {
      clauses.push(`tag:${ALL_PRODUCT_TAGS.join(',')}`);
    }
    for (const tag of tags.filter((t) => !isProductTag(t))) {
      clauses.push(`tag:${tag}`);
    }
    return clauses.join(' ');
  }
