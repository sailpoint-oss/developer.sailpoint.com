# IdentityV2PrivilegeLevel

# IdentityV2PrivilegeLevel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Effective** |  **Enum** [  "HIGH",    "MEDIUM",    "LOW",    "NONE" ] | The effective privilege level of the identity. Returned values are uppercase. Filter and sort comparisons are case-insensitive. An identity with no privilege level is NONE. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityV2PrivilegeLevel = Initialize-IdentityV2PrivilegeLevel  -Effective HIGH
```

- Convert the resource to JSON
```powershell
$IdentityV2PrivilegeLevel | ConvertTo-JSON
```


[[Back to top]](#) 

