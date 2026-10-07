# EntitlementV2PrivilegeLevel

# EntitlementV2PrivilegeLevel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Direct** |  **Enum** [  "HIGH",    "LOW",    "MEDIUM",    "NONE" ] | Direct privilege level assigned to the entitlement | [optional] 
**SetBy** | **String** | User or process that set the privilege level | [optional] 
**SetByType** |  **Enum** [  "OVERRIDE",    "CUSTOM_CRITERIA",    "CONNECTOR_CRITERIA",    "SINGLE_LEVEL_CRITERIA" ] | Method by which the privilege level was set | [optional] 
**Inherited** |  **Enum** [  "HIGH",    "LOW",    "MEDIUM",    "NONE" ] | Inherited privilege level on the entitlement, if any | [optional] 
**Effective** |  **Enum** [  "HIGH",    "LOW",    "MEDIUM",    "NONE" ] | Effective privilege level assigned to the entitlement | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementV2PrivilegeLevel = Initialize-EntitlementV2PrivilegeLevel  -Direct HIGH `
 -SetBy SAILPOINT_MIGRATION `
 -SetByType OVERRIDE `
 -Inherited null `
 -Effective HIGH
```

- Convert the resource to JSON
```powershell
$EntitlementV2PrivilegeLevel | ConvertTo-JSON
```


[[Back to top]](#) 

