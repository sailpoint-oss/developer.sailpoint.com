# NonEmployeeApprovalSummary

# NonEmployeeApprovalSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Approved** | **Int32** | The number of approved non-employee approval requests. | [optional] 
**Pending** | **Int32** | The number of pending non-employee approval requests. | [optional] 
**Rejected** | **Int32** | The number of rejected non-employee approval requests. | [optional] 

## Examples

- Prepare the resource
```powershell
$NonEmployeeApprovalSummary = Initialize-NonEmployeeApprovalSummary  -Approved 2 `
 -Pending 2 `
 -Rejected 2
```

- Convert the resource to JSON
```powershell
$NonEmployeeApprovalSummary | ConvertTo-JSON
```


[[Back to top]](#) 

