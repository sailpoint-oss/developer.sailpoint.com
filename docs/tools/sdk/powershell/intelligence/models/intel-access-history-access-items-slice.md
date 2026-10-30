# IntelAccessHistoryAccessItemsSlice

# IntelAccessHistoryAccessItemsSlice

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | **[]IntelAccessItemHistoryEvent** | First page of access-item history events for the identity. | [required]
**TotalCount** | **Int32** | Total number of events in this category; omitted when `items` is empty. | [optional] 
**Next** | **String** | Absolute URL to the next access-items page; present when totalCount exceeds the items returned on this page. | [optional] 

## Examples

- Prepare the resource
```powershell
$IntelAccessHistoryAccessItemsSlice = Initialize-IntelAccessHistoryAccessItemsSlice  -Items null `
 -TotalCount 128 `
 -Next https://tenant.example.api.cloud.sailpoint.com/intelligence/identities/v1/ef38f94347e94562b5bb8424a56397d8/access-history/access-items?limit=10&offset=10&count=true
```

- Convert the resource to JSON
```powershell
$IntelAccessHistoryAccessItemsSlice | ConvertTo-JSON
```


[[Back to top]](#) 

