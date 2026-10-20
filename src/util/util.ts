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
  // The forum is gaining a new `sailpoint-human-fabric` tag rather than renaming
  // `identity-security-cloud`, so every topic tagged before the rebrand keeps the
  // old tag. Product-tag queries must therefore match EITHER tag, or all
  // historical blog/CoLab/video content disappears from the site.
  // Once the forum back-fills the new tag onto old topics, delete
  // SHF_LEGACY_PRODUCT_TAG and the expansion in discourseFilterQuery().
  export const SHF_PRODUCT_TAG = 'sailpoint-human-fabric';
  export const SHF_LEGACY_PRODUCT_TAG = 'identity-security-cloud';
  
  export function isProductTag(tag: string): boolean {
    return tag === SHF_PRODUCT_TAG || tag === SHF_LEGACY_PRODUCT_TAG;
  }
  
  // Expands the SHF product tag to both the new and legacy slug, leaving any
  // other tag untouched.
  export function expandProductTags(tags: string[]): string[] {
    const out: string[] = [];
    for (const tag of tags) {
      if (isProductTag(tag)) {
        if (!out.includes(SHF_PRODUCT_TAG)) {
          out.push(SHF_PRODUCT_TAG, SHF_LEGACY_PRODUCT_TAG);
        }
      } else if (!out.includes(tag)) {
        out.push(tag);
      }
    }
    return out;
  }
  
  // Collapses either product slug to the new one, so UI state and checkbox
  // identity are single-valued even while both tags exist on the forum.
  // discourseFilterQuery() expands it back to both at query time.
  export function canonicalProductTag(tag: string): string {
    return isProductTag(tag) ? SHF_PRODUCT_TAG : tag;
  }
  
  // Builds the `q` value for Discourse's /filter.json. Within one clause a comma
  // means OR; separate clauses are ANDed. So the product tags collapse into a
  // single OR clause while each other tag gets its own, giving
  // (new OR legacy) AND videoType — verified against the live forum.
  export function discourseFilterQuery(
    categorySlug: string,
    tags: string[],
  ): string {
    const clauses = [`category:${categorySlug}`];
    if (tags.some(isProductTag)) {
      clauses.push(`tag:${SHF_PRODUCT_TAG},${SHF_LEGACY_PRODUCT_TAG}`);
    }
    for (const tag of tags.filter((t) => !isProductTag(t))) {
      clauses.push(`tag:${tag}`);
    }
    return clauses.join(' ');
  }
