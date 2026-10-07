# Approval2ApprovalCriteriaRejection

# Approval2ApprovalCriteriaRejection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CalculationType** |  **Enum** [  "COUNT",    "PERCENT" ] | This defines what the field ""value"" will be used as, either a count or percentage of the total approvers that need to reject | [optional] 
**Value** | **Int64** | The value that needs to be met for the rejection criteria | [optional] 

## Examples

- Prepare the resource
```powershell
$Approval2ApprovalCriteriaRejection = Initialize-Approval2ApprovalCriteriaRejection  -CalculationType COUNT `
 -Value 30
```

- Convert the resource to JSON
```powershell
$Approval2ApprovalCriteriaRejection | ConvertTo-JSON
```


[[Back to top]](#) 

