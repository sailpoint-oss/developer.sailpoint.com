# ApplicationCrawlerSettings

# ApplicationCrawlerSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsEnabled** | **Boolean** | Indicates whether the feature or configuration is enabled. | [optional] [default to $false]
**ClusterId** | **String** | The identifier of the cluster associated with this configuration, if applicable. | [optional] 
**CalculateResourceSize** | **CrawlResourcesSizesOptions** |  | [optional] 
**CrawlSnapshotsFolder** | **Boolean** | Indicates whether to crawl the snapshots folder. | [optional] [default to $false]
**CrawlMailboxes** | **Boolean** | Indicates whether to crawl mailboxes. | [optional] [default to $false]
**CrawlPublicFolders** | **Boolean** | Indicates whether to crawl public folders. | [optional] [default to $false]
**ExcludedPathsByRegex** | **String** | Regular expression pattern for paths to exclude from crawling. | [optional] 
**CrawlTopLevelShares** | **[]String** | List of top-level shares to crawl. | [optional] 
**ExcludedResources** | **[]String** | List of resource identifiers to exclude from crawling. | [optional] 
**IncludeResources** | **[]String** | List of resource identifiers to include in crawling. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApplicationCrawlerSettings = Initialize-ApplicationCrawlerSettings  -IsEnabled true `
 -ClusterId cluster-001 `
 -CalculateResourceSize null `
 -CrawlSnapshotsFolder true `
 -CrawlMailboxes false `
 -CrawlPublicFolders true `
 -ExcludedPathsByRegex ^/archive/.* `
 -CrawlTopLevelShares ["share1","share2"] `
 -ExcludedResources ["resourceA","resourceB"] `
 -IncludeResources ["resourceX","resourceY"]
```

- Convert the resource to JSON
```powershell
$ApplicationCrawlerSettings | ConvertTo-JSON
```


[[Back to top]](#) 

