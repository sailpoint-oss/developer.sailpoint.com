# ApprovalDetails

# ApprovalDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Approver** | [**ApproverDto**](approver-dto) |  | [optional] 
**ApproverComments** | **String** | Comments added by approver while rejecting or approving the account deletion request. | [optional] 
**DecisionDate** | **System.DateTime** | Decision date of approval rejected or approved. | [optional] [readonly] 
**SerialOrder** | **Int64** | SerialOrder of approval details. | [optional] 
**Status** | **AccountRequestPhaseState** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalDetails = Initialize-ApprovalDetails  -Approver null `
 -ApproverComments Approving account deletion request due to long term inactivity of account. `
 -DecisionDate 2026-01-21T11:43:22.432Z `
 -SerialOrder 12345 `
 -Status null
```

- Convert the resource to JSON
```powershell
$ApprovalDetails | ConvertTo-JSON
```


[[Back to top]](#) 

