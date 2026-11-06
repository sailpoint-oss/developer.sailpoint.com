# IntelAccessHistoryCertificationsSlice

# IntelAccessHistoryCertificationsSlice

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | **[]IntelCertificationHistoryEvent** | First page of certification history events for the identity. | [required]
**TotalCount** | **Int32** | Total number of events in this category; omitted when `items` is empty. | [optional] 
**Next** | **String** | Absolute URL to the next certifications page; present when totalCount exceeds the items returned on this page. | [optional] 

## Examples

- Prepare the resource
```powershell
$IntelAccessHistoryCertificationsSlice = Initialize-IntelAccessHistoryCertificationsSlice  -Items null `
 -TotalCount 6 `
 -Next https://tenant.example.api.cloud.sailpoint.com/intelligence/identities/v1/ef38f94347e94562b5bb8424a56397d8/access-history/certifications?limit=10&offset=10&count=true
```

- Convert the resource to JSON
```powershell
$IntelAccessHistoryCertificationsSlice | ConvertTo-JSON
```


[[Back to top]](#) 

