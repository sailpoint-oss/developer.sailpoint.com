# ApprovalCancelRequest

# ApprovalCancelRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | **String** | Optional comment associated with the cancel request. | [optional] 

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

