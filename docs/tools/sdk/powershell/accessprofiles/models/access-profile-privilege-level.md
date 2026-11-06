# AccessProfilePrivilegeLevel

# AccessProfilePrivilegeLevel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Effective** |  **Enum** [  "NONE",    "LOW",    "MEDIUM",    "HIGH",    "UNDETERMINED" ] | Effective privilege level of the access profile, derived from the highest privilege level of the entitlements it contains. `UNDETERMINED` indicates the level could not be calculated. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessProfilePrivilegeLevel = Initialize-AccessProfilePrivilegeLevel  -Effective MEDIUM
```

- Convert the resource to JSON
```powershell
$AccessProfilePrivilegeLevel | ConvertTo-JSON
```


[[Back to top]](#) 

