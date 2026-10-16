# BulkApproveRequestDTO

# BulkApproveRequestDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalIds** | **[]String** | Array of Approval IDs to be bulk approved | [optional] 
**Comment** | **String** | Optional comment to include with the bulk approval request | [optional] 
**AdditionalAttributes** | **map[string]AnyType** | Additional attributes to include with the bulk approval request | [optional] 

## Examples

- Prepare the resource
```powershell
$BulkApproveRequestDTO = Initialize-BulkApproveRequestDTO  -ApprovalIds ["38453251-6be2-5f8f-df93-5ce19e295837","38453251-6be2-5f8f-df93-5ce19e295838"] `
 -Comment Bulk approved by admin for monthly review `
 -AdditionalAttributes {"source":"automation","urgency":"high"}
```

- Convert the resource to JSON
```powershell
$BulkApproveRequestDTO | ConvertTo-JSON
```


[[Back to top]](#) 

