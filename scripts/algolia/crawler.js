new Crawler({
  appId: "",
  apiKey: "",
  indexPrefix: "crawler_",
  rateLimit: 8,
  maxDepth: 10,
  maxUrls: 55000,
  startUrls: ["https://developer.sailpoint.com/"],
  renderJavaScript: false,
  sitemaps: ["https://developer.sailpoint.com/sitemap.xml"],
  ignoreCanonicalTo: true,
  schedule: "every 1 day at 5:00 am",
  discoveryPatterns: ["https://developer.sailpoint.com/**"],
  exclusionPatterns: [
    "https://developer.sailpoint.com/discuss/**",
    "https://developer.sailpoint.com/*/tags/**",
    "https://developer.sailpoint.com/idn",
    "https://developer.sailpoint.com/idn/**",
    "https://developer.sailpoint.com/apis/legacy",
    "https://developer.sailpoint.com/apis/legacy/**",
    "https://developer.sailpoint.com/docs/api/v2026",
    "https://developer.sailpoint.com/docs/api/v2026/**",
    "https://developer.sailpoint.com/docs/api/v2025",
    "https://developer.sailpoint.com/docs/api/v2025/**",
    "https://developer.sailpoint.com/docs/api/v2024",
    "https://developer.sailpoint.com/docs/api/v2024/**",
    "https://developer.sailpoint.com/docs/api/v3",
    "https://developer.sailpoint.com/docs/api/v3/**",
    "https://developer.sailpoint.com/docs/api/beta",
    "https://developer.sailpoint.com/docs/api/beta/**",
    "https://developer.sailpoint.com/docs/tools/*/reference/v2024",
    "https://developer.sailpoint.com/docs/tools/*/reference/v2024/**",
    "https://developer.sailpoint.com/docs/tools/*/reference/v2025",
    "https://developer.sailpoint.com/docs/tools/*/reference/v2025/**",
    "https://developer.sailpoint.com/docs/tools/*/reference/v2026",
    "https://developer.sailpoint.com/docs/tools/*/reference/v2026/**",
    "https://developer.sailpoint.com/docs/tools/*/reference/v3",
    "https://developer.sailpoint.com/docs/tools/*/reference/v3/**",
    "https://developer.sailpoint.com/docs/tools/*/reference/beta",
    "https://developer.sailpoint.com/docs/tools/*/reference/beta/**",
    "https://developer.sailpoint.com/docs/tools/sdk/*/v2024",
    "https://developer.sailpoint.com/docs/tools/sdk/*/v2024/**",
    "https://developer.sailpoint.com/docs/tools/sdk/*/v2025",
    "https://developer.sailpoint.com/docs/tools/sdk/*/v2025/**",
    "https://developer.sailpoint.com/docs/tools/sdk/*/v2026",
    "https://developer.sailpoint.com/docs/tools/sdk/*/v2026/**",
    "https://developer.sailpoint.com/docs/tools/sdk/*/v3",
    "https://developer.sailpoint.com/docs/tools/sdk/*/v3/**",
    "https://developer.sailpoint.com/docs/tools/sdk/*/beta",
    "https://developer.sailpoint.com/docs/tools/sdk/*/beta/**",
  ],
  actions: [
    {
      name: "Docs",
      indexName: "Developer_Documentation",
      pathsToMatch: [
        "https://developer.sailpoint.com/**",
        "!https://developer.sailpoint.com/idn/**",
      ],
      recordExtractor: ({ url, $, helpers }) => {
        // Search results are grouped by hierarchy.lvl0, so every page is
        // assigned exactly one category based on its path. Rules are checked
        // in order and the first match wins, so more specific paths must come
        // before broader ones (for example, /docs/api/nerm before /docs/api).
        const CATEGORY_RULES = [
          ["Transforms", [/^\/docs\/extensibility\/transforms(\/|$)/]],
          ["SaaS Connectivity", [/^\/docs\/connectivity(\/|$)/]],
          ["Event Triggers", [/^\/docs\/extensibility\/event-triggers(\/|$)/]],
          ["Rules", [/^\/docs\/extensibility\/rules(\/|$)/]],
          [
            "Guides",
            [
              /^\/docs\/guides(\/|$)/,
              /^\/docs\/extensibility(\/|$)/,
            ],
          ],
          [
            "IIQ",
            [
              /^\/docs\/iiq(\/|$)/,
              /^\/docs\/api\/iiq(\/|$)/,
              /^\/docs\/plugin-developer-guide(\/|$)/,
            ],
          ],
          ["Reporting", [/^\/docs\/reporting(\/|$)/]],
          ["CLI", [/^\/docs\/tools\/cli(\/|$)/]],
          [
            "Colab",
            [/^\/docs\/tools\/colab(-documentation)?(\/|$)/, /^\/colab(\/|$)/],
          ],
          // SDK landing pages and how-to guides, e.g. /docs/tools/sdk/go/paginate.
          ["SDKs", [/^\/docs\/tools\/sdk(\/[^/]+){0,2}\/?$/]],
          ["UI Development Kit", [/^\/docs\/tools\/ui-development-kit(\/|$)/]],
          ["UI Plugins", [/^\/docs\/ui-plugins(\/|$)/]],
          [
            "Community",
            [
              /^\/docs\/[^/]*code-of-conduct\/?$/,
              /^\/docs\/(community-policies|ambassador-agreement|ai-policy)\/?$/,
              /^\/(ambassadors|blog|videos|hack-day|decode|about-developer-relations|submit-final-project)(\/|$)/,
            ],
          ],
          ["Nerm APIs", [/^\/docs\/api\/nerm(\/|$)/]],
          ["SHF APIs", [/^\/docs\/api(\/|$)/]],
          // Generated SDK reference (methods and models), e.g.
          // /docs/tools/sdk/go/accessprofiles/methods/access-profiles.
          ["SHF SDK Docs", [/^\/docs\/tools\/sdk\/[^/]+\/[^/]+\/.+/]],
          ["Tools", [/^\/docs\/tools(\/|$)/, /^\/tools(\/|$)/]],
        ];

        const path = url.pathname;
        const match = CATEGORY_RULES.find(([, patterns]) =>
          patterns.some((pattern) => pattern.test(path)),
        );
        const category = match ? match[0] : "Other";

        return helpers
          .docsearch({
            recordProps: {
              lvl0: {
                selectors: "",
                defaultValue: category,
              },
              lvl1: ["header h1", "article h1", "main h1", "head > title"],
              lvl2: "article h2",
              lvl3: "article h3",
              lvl4: "article h4",
              lvl5: "article h5",
              lvl6: "article h6",
              content: "article p, article li, article td:last-child",
            },
            aggregateContent: true,
            recordVersion: "v3",
          })
          .filter(
            (record) =>
              record.content !== null &&
              record.content !== undefined &&
              record.content.length > 20,
          );
      },
    },
  ],
  safetyChecks: { beforeIndexPublishing: { maxLostRecordsPercentage: 100 } },
  initialIndexSettings: {
    Developer_Documentation: {
      attributesForFaceting: [
        "type",
        "lang",
        "language",
        "version",
        "docusaurus_tag",
      ],
      attributesToRetrieve: [
        "hierarchy",
        "content",
        "anchor",
        "url",
        "url_without_anchor",
        "type",
      ],
      attributesToHighlight: ["hierarchy", "content"],
      attributesToSnippet: ["content:10"],
      camelCaseAttributes: ["hierarchy", "content"],
      searchableAttributes: [
        "unordered(hierarchy.lvl0)",
        "unordered(hierarchy.lvl1)",
        "unordered(hierarchy.lvl2)",
        "unordered(hierarchy.lvl3)",
        "unordered(hierarchy.lvl4)",
        "unordered(hierarchy.lvl5)",
        "unordered(hierarchy.lvl6)",
        "content",
      ],
      distinct: true,
      attributeForDistinct: "url",
      customRanking: [
        "desc(weight.pageRank)",
        "desc(weight.level)",
        "asc(weight.position)",
      ],
      ranking: [
        "words",
        "filters",
        "typo",
        "attribute",
        "proximity",
        "exact",
        "custom",
      ],
      highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
      highlightPostTag: "</span>",
      minWordSizefor1Typo: 3,
      minWordSizefor2Typos: 7,
      allowTyposOnNumericTokens: false,
      minProximity: 1,
      ignorePlurals: true,
      advancedSyntax: true,
      attributeCriteriaComputedByMinProximity: true,
      removeWordsIfNoResults: "allOptional",
    },
  },
});