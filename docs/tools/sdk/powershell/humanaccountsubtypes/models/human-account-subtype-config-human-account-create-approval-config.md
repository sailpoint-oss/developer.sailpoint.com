# HumanAccountSubtypeConfigHumanAccountCreateApprovalConfig

# HumanAccountSubtypeConfigHumanAccountCreateApprovalConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Approvers** | **String** | Comma-separated approver types, for example `manager, sourceOwner`. Approval requests are assigned in the order the approvers are listed. | [optional] 
**Comments** |  **Enum** [  "ALL",    "APPROVAL",    "REJECTION",    "OFF" ] | Comment configuration for the approval request. | [optional] 

## Examples

- Prepare the resource
```powershell
$HumanAccountSubtypeConfigHumanAccountCreateApprovalConfig = Initialize-HumanAccountSubtypeConfigHumanAccountCreateApprovalConfig  -Approvers manager, sourceOwner `
 -Comments ALL
```

- Convert the resource to JSON
```powershell
$HumanAccountSubtypeConfigHumanAccountCreateApprovalConfig | ConvertTo-JSON
```


[[Back to top]](#) 

