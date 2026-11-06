# BulkCancelRequestDTO

# BulkCancelRequestDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalIds** | **[]String** | Array of Approval IDs to be bulk cancelled | [optional] 
**Comment** | **String** | Optional comment to include with the bulk cancellation request | [optional] 

## Examples

- Prepare the resource
```powershell
$BulkCancelRequestDTO = Initialize-BulkCancelRequestDTO  -ApprovalIds ["38453251-6be2-5f8f-df93-5ce19e295837","38453251-6be2-5f8f-df93-5ce19e295838"] `
 -Comment Bulk cancellation by admin
```

- Convert the resource to JSON
```powershell
$BulkCancelRequestDTO | ConvertTo-JSON
```


[[Back to top]](#) 

