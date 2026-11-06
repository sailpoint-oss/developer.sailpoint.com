# Accessprofilev2PrivilegeLevel

# Accessprofilev2PrivilegeLevel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Effective** |  **Enum** [  "NONE",    "LOW",    "MEDIUM",    "HIGH",    "UNDETERMINED" ] | Effective privilege level of the access profile, derived from the highest privilege level of the entitlements it contains. `UNDETERMINED` indicates the level could not be calculated. | [optional] 

## Examples

- Prepare the resource
```powershell
$Accessprofilev2PrivilegeLevel = Initialize-Accessprofilev2PrivilegeLevel  -Effective MEDIUM
```

- Convert the resource to JSON
```powershell
$Accessprofilev2PrivilegeLevel | ConvertTo-JSON
```


[[Back to top]](#) 

