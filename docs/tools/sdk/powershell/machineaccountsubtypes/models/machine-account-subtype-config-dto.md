# MachineAccountSubtypeConfigDto

# MachineAccountSubtypeConfigDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SubtypeId** | **String** | Unique identifier representing the specific subtype of the machine account, used to distinguish between different machine account categories. | [optional] 
**MachineAccountCreate** | [**MachineAccountSubtypeConfigDtoMachineAccountCreate**](machine-account-subtype-config-dto-machine-account-create) |  | [optional] 
**MachineAccountDelete** | [**MachineAccountSubtypeConfigDtoMachineAccountDelete**](machine-account-subtype-config-dto-machine-account-delete) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineAccountSubtypeConfigDto = Initialize-MachineAccountSubtypeConfigDto  -SubtypeId 1419fc28-a8ed-4a07-9f5c-0cb5dfad6311 `
 -MachineAccountCreate null `
 -MachineAccountDelete null
```

- Convert the resource to JSON
```powershell
$MachineAccountSubtypeConfigDto | ConvertTo-JSON
```


[[Back to top]](#) 

