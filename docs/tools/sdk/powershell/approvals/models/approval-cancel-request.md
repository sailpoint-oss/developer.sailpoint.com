# ApprovalCancelRequest

# ApprovalCancelRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | **String** | Required comment associated with the cancel request. | [required]

## Examples

- Prepare the resource
```powershell
$ApprovalCancelRequest = Initialize-ApprovalCancelRequest  -Comment Cancelled by administrator
```

- Convert the resource to JSON
```powershell
$ApprovalCancelRequest | ConvertTo-JSON
```


[[Back to top]](#) 

