# Approval2ApprovalCriteria

# Approval2ApprovalCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | Type of approval criteria, such as SERIAL or PARALLEL | [optional] 
**Approval** | [**Approval2ApprovalCriteriaApproval**](approval2-approval-criteria-approval) |  | [optional] 
**Rejection** | [**Approval2ApprovalCriteriaRejection**](approval2-approval-criteria-rejection) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Approval2ApprovalCriteria = Initialize-Approval2ApprovalCriteria  -Type SERIAL `
 -Approval null `
 -Rejection null
```

- Convert the resource to JSON
```powershell
$Approval2ApprovalCriteria | ConvertTo-JSON
```


[[Back to top]](#) 

