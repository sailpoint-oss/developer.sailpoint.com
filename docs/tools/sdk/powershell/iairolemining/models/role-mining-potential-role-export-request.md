# RoleMiningPotentialRoleExportRequest

# RoleMiningPotentialRoleExportRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MinEntitlementPopularity** | **Int32** | The minimum popularity among identities in the role which an entitlement must have to be included in the report | [optional] 
**IncludeCommonAccess** | **Boolean** | If false, do not include entitlements that are highly popular among the entire orginization | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningPotentialRoleExportRequest = Initialize-RoleMiningPotentialRoleExportRequest  -MinEntitlementPopularity 0 `
 -IncludeCommonAccess true
```

- Convert the resource to JSON
```powershell
$RoleMiningPotentialRoleExportRequest | ConvertTo-JSON
```


[[Back to top]](#) 

