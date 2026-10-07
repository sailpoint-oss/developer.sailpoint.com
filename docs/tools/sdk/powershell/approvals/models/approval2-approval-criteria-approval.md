# Approval2ApprovalCriteriaApproval

# Approval2ApprovalCriteriaApproval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CalculationType** |  **Enum** [  "COUNT",    "PERCENT" ] | This defines what the field ""value"" will be used as, either a count or percentage of the total approvers that need to approve | [optional] 
**Value** | **Int64** | The value that needs to be met for the approval criteria | [optional] 

## Examples

- Prepare the resource
```powershell
$Approval2ApprovalCriteriaApproval = Initialize-Approval2ApprovalCriteriaApproval  -CalculationType COUNT `
 -Value 70
```

- Convert the resource to JSON
```powershell
$Approval2ApprovalCriteriaApproval | ConvertTo-JSON
```


[[Back to top]](#) 

