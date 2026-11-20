# AccessRequestApproversListResponse

# AccessRequestApproversListResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Approver id. | [optional] 
**Email** | **String** | Email of the approver. | [optional] 
**Name** | **String** | Name of the approver. | [optional] 
**ApprovalId** | **String** | Id of the approval item. | [optional] 
**Type** | **String** | Type of the object returned. In this case, the value for this field will always Identity. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequestApproversListResponse = Initialize-AccessRequestApproversListResponse  -Id id12345 `
 -Email jdoe@sailpoint.com `
 -Name John Doe `
 -ApprovalId ap12345 `
 -Type Identity
```

- Convert the resource to JSON
```powershell
$AccessRequestApproversListResponse | ConvertTo-JSON
```


[[Back to top]](#) 

