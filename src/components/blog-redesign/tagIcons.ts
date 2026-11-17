/**
 * The cover icon for each forum tag. The icons are in
 * static/img/blog-redesign/tags (white versions of the SailPoint icon set).
 *
 * The order sets the priority: a post with several tags gets the icon of the
 * first tag in this list. Specific tags come first, so that a post tagged
 * "workflows, apis, certifications" shows the certifications icon. The broad
 * tags (workflows, apis) come last.
 */
const TAG_ICONS: [tag: string, icon: string][] = [
  ['access-requests', 'access-management'],
  ['certifications', 'certifications'],
  ['work-items', 'checklist'],
  ['entitlements', 'keys'],
  ['roles', 'roles'],
  ['forms', 'tablet-checklist'],
  ['transforms', 'process'],
  ['aggregation', 'sources'],
  ['virtual-appliance', 'virtual-appliances'],
  ['identityiq', 'identity-cube'],
  ['mcp', 'mcp-server'],
  ['ai', 'ai-agent'],
  ['search', 'search'],
  ['connectors', 'connectivity'],
  ['saas-connectivity', 'connectivity'],
  ['workflows', 'flow-chart'],
  ['apis', 'integration'],
];

/** The icon for posts with no tag in the list above. */
const DEFAULT_ICON = 'coding';

/** The path (from the site root) of the cover icon for a post's tags. */
export function tagIconPath(tags: string[]): string {
  const match = TAG_ICONS.find(([tag]) => tags.includes(tag));
  return `/img/blog-redesign/tags/${match ? match[1] : DEFAULT_ICON}.svg`;
}
