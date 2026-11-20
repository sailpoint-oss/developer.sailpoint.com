# ApplicationCrawlerSettings

# ApplicationCrawlerSettings

Import this model from the entry point of its package:

```typescript
import { ApplicationCrawlerSettings } from '@sailpoint/angular-sdk/data_access_security';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isEnabled** | **(optional)** `boolean` | Indicates whether the feature or configuration is enabled. | [default to false]
**clusterId** | **(optional)** `string` | The identifier of the cluster associated with this configuration, if applicable. | [default to undefined]
**calculateResourceSize** | **(optional)** `CrawlResourcesSizesOptions` |  | [default to undefined]
**crawlSnapshotsFolder** | **(optional)** `boolean` | Indicates whether to crawl the snapshots folder. | [default to false]
**crawlMailboxes** | **(optional)** `boolean` | Indicates whether to crawl mailboxes. | [default to false]
**crawlPublicFolders** | **(optional)** `boolean` | Indicates whether to crawl public folders. | [default to false]
**excludedPathsByRegex** | **(optional)** `string` | Regular expression pattern for paths to exclude from crawling. | [default to undefined]
**crawlTopLevelShares** | **(optional)** `Array<string>` | List of top-level shares to crawl. | [default to undefined]
**excludedResources** | **(optional)** `Array<string>` | List of resource identifiers to exclude from crawling. | [default to undefined]
**includeResources** | **(optional)** `Array<string>` | List of resource identifiers to include in crawling. | [default to undefined]

