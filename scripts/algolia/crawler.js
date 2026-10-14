new Crawler({
  appId: "TB01H1DFAM",
  apiKey: "c5a4e515371fda155930cd859c6154fc",
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
    "https://developer.sailpoint.com/docs/tools/*/reference/v3",
    "https://developer.sailpoint.com/docs/tools/*/reference/v3/**",
    "https://developer.sailpoint.com/docs/tools/*/reference/beta",
    "https://developer.sailpoint.com/docs/tools/*/reference/beta/**",
    "https://developer.sailpoint.com/docs/tools/sdk/*/v2024",
    "https://developer.sailpoint.com/docs/tools/sdk/*/v2024/**",
    "https://developer.sailpoint.com/docs/tools/sdk/*/v2025",
    "https://developer.sailpoint.com/docs/tools/sdk/*/v2025/**",
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
      recordExtractor: ({ $, helpers }) => {
        const lvls = $(".menu__link.menu__link--active")
          .map(function (i, el) {
            return $(this).text();
          })
          .toArray();
        console.log({ lvls: lvls });
        let records = helpers.docsearch({
          recordProps: {
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl1: ["header h1", "article h1"],
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5",
            lvl6: "article h6",
            content: "article p, article li, article td:last-child",
          },
          aggregateContent: true,
          recordVersion: "v3",
        });
        console.log({ records: records });
        records = records
          .filter(
            (record) =>
              record.content !== null &&
              record.content !== undefined &&
              record.content.length > 20,
          )
          .map((record) => {
            lvls.forEach((lvl, i) => {
              if (i === 1) {
                record.hierarchy.lvl0 = lvl;
              } else if (i === 2) {
                record.hierarchy.lvl1 = lvl;
              } else if (i === 3) {
                record.hierarchy.lvl2 = lvl;
              } else if (i === 4) {
                record.hierarchy.lvl3 = lvl;
              } else if (i === 5) {
                record.hierarchy.lvl4 = lvl;
              } else if (i === 6) {
                record.hierarchy.lvl5 = lvl;
              }
            });

            return record;
          });
        console.log({ records: records });
        return records;
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
  extraUrls: ["https://developer.sailpoint.com/docs/api/v2026/api-usage"],
});