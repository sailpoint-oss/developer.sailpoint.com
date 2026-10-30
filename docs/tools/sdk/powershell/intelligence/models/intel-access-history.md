# IntelAccessHistory

# IntelAccessHistory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessItems** | [**IntelAccessHistoryAccessItemsSlice**](intel-access-history-access-items-slice) | First page of access-item history events for the identity. | [required]
**Certifications** | [**IntelAccessHistoryCertificationsSlice**](intel-access-history-certifications-slice) | First page of certification history events for the identity. | [required]

## Examples

- Prepare the resource
```powershell
$IntelAccessHistory = Initialize-IntelAccessHistory  -AccessItems null `
 -Certifications null
```

- Convert the resource to JSON
```powershell
$IntelAccessHistory | ConvertTo-JSON
```


[[Back to top]](#) 

