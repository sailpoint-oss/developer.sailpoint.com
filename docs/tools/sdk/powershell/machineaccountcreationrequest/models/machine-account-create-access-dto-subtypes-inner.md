# MachineAccountCreateAccessDtoSubtypesInner

# MachineAccountCreateAccessDtoSubtypesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SubtypeId** | **String** | Subtype ID. | [optional] 
**EntitlementId** | **String** | Entitlement ID. | [optional] 
**SubtypeDisplayName** | **String** | Subtype display name. | [optional] 
**SubtypeTechnicalName** | **String** | Subtype technical name. | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineAccountCreateAccessDtoSubtypesInner = Initialize-MachineAccountCreateAccessDtoSubtypesInner  -SubtypeId d7ae9ea3-507f-4d00-9d4f-b4464b344b88 `
 -EntitlementId a03caa629a624cee90f94048252034cf `
 -SubtypeDisplayName Subtype Display Name `
 -SubtypeTechnicalName Subtype Technical Name
```

- Convert the resource to JSON
```powershell
$MachineAccountCreateAccessDtoSubtypesInner | ConvertTo-JSON
```


[[Back to top]](#) 

