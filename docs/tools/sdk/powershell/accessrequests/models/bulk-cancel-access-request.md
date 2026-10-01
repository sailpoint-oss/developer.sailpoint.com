# BulkCancelAccessRequest

# BulkCancelAccessRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestIds** | **[]String** | List of access requests ids to cancel the pending requests | [required]
**Comment** | **String** | Reason for cancelling the pending access request. | [required]

## Examples

- Prepare the resource
```powershell
$BulkCancelAccessRequest = Initialize-BulkCancelAccessRequest  -AccessRequestIds ["2c9180835d2e5168015d32f890ca1581","2c9180835d2e5168015d32f890ca1582"] `
 -Comment I requested this role by mistake.
```

- Convert the resource to JSON
```powershell
$BulkCancelAccessRequest | ConvertTo-JSON
```


[[Back to top]](#) 

