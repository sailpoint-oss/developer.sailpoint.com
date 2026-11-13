# MachineAccountSubtypeConfigDtoMachineAccountDelete

# MachineAccountSubtypeConfigDtoMachineAccountDelete

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalRequired** | **Boolean** | Indicates whether approval is required for an account deletion request. | [optional] [default to $false]
**ApprovalConfig** | [**MachineSubtypeApprovalConfig**](machine-subtype-approval-config) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineAccountSubtypeConfigDtoMachineAccountDelete = Initialize-MachineAccountSubtypeConfigDtoMachineAccountDelete  -ApprovalRequired true `
 -ApprovalConfig null
```

- Convert the resource to JSON
```powershell
$MachineAccountSubtypeConfigDtoMachineAccountDelete | ConvertTo-JSON
```


[[Back to top]](#) 

