# MachineAccountV2AllOfMachineIdentities

# MachineAccountV2AllOfMachineIdentities

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "MACHINE_IDENTITY" ] | The reference type. | [optional] 
**Id** | **String** | ID of the machine identity. | [optional] 
**Name** | **String** | The display name of the machine identity. | [optional] 
**Subtype** |  **Enum** [  "AI_AGENT",    "APPLICATION",    "DEVICE" ] | The subtype of the machine identity. | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineAccountV2AllOfMachineIdentities = Initialize-MachineAccountV2AllOfMachineIdentities  -Type MACHINE_IDENTITY `
 -Id 1540e5a4-6c2e-4bf1-b88e-c08cae0696e9 `
 -Name SVC_ADService `
 -Subtype APPLICATION
```

- Convert the resource to JSON
```powershell
$MachineAccountV2AllOfMachineIdentities | ConvertTo-JSON
```


[[Back to top]](#) 

