# Reminderescalationtarget

# Reminderescalationtarget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TargetType** |  **Enum** [  "MANAGER_OF",    "IDENTITY",    "GOVERNANCE_GROUP",    "ENTITLEMENT_OWNER",    "SOURCE_OWNER" ] | Kind of recipient this target resolves to. | [required]
**IdentityId** | **String** | Identity the target applies to. Empty for a dynamic `MANAGER_OF` target. | [optional] [default to ""]

## Examples

- Prepare the resource
```powershell
$Reminderescalationtarget = Initialize-Reminderescalationtarget  -TargetType MANAGER_OF `
 -IdentityId id-admin-99
```

- Convert the resource to JSON
```powershell
$Reminderescalationtarget | ConvertTo-JSON
```


[[Back to top]](#) 

