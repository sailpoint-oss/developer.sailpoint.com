# IntelRareAccessSlice

# IntelRareAccessSlice

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | [**[]IntelOutlierAccessItem**](intel-outlier-access-item) | First page of rare access items for the identity. | [required]
**TotalCount** | **Int32** | Total number of rare-access items for the resolved outlier; omitted when `items` is empty. | [optional] 
**Next** | **String** | Absolute URL to the next rareAccess page; present when totalCount exceeds the items returned on this page. | [optional] 

## Examples

- Prepare the resource
```powershell
$IntelRareAccessSlice = Initialize-IntelRareAccessSlice  -Items null `
 -TotalCount 15 `
 -Next https://tenant.example.api.cloud.sailpoint.com/intelligence/identities/v1/ef38f94347e94562b5bb8424a56397d8/outliers/rare-access?limit=10&offset=10&count=true
```

- Convert the resource to JSON
```powershell
$IntelRareAccessSlice | ConvertTo-JSON
```


[[Back to top]](#) 

