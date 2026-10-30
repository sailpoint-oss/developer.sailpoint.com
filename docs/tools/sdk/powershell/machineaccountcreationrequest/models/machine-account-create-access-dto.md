# MachineAccountCreateAccessDto

# MachineAccountCreateAccessDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceId** | **String** | Source ID. | [optional] 
**SourceName** | **String** | Source name. | [optional] 
**Subtypes** | [**[]MachineAccountCreateAccessDtoSubtypesInner**](machine-account-create-access-dto-subtypes-inner) | List of subtypes for which the user has an entitlement to request machine accounts. | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineAccountCreateAccessDto = Initialize-MachineAccountCreateAccessDto  -SourceId 1419fc28a8ed4a079f5c0cb5dfad6311 `
 -SourceName Source name `
 -Subtypes null
```

- Convert the resource to JSON
```powershell
$MachineAccountCreateAccessDto | ConvertTo-JSON
```


[[Back to top]](#) 

