# RoleMiningPotentialRoleEditEntitlements

# RoleMiningPotentialRoleEditEntitlements

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** | **[]String** | The list of entitlement ids to be edited | [optional] 
**Exclude** | **Boolean** | If true, add ids to be exclusion list. If false, remove ids from the exclusion list. | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningPotentialRoleEditEntitlements = Initialize-RoleMiningPotentialRoleEditEntitlements  -Ids null `
 -Exclude null
```

- Convert the resource to JSON
```powershell
$RoleMiningPotentialRoleEditEntitlements | ConvertTo-JSON
```


[[Back to top]](#) 

