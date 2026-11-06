# RoleMembershipSelector

# RoleMembershipSelector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **RoleMembershipSelectorType** |  | [optional] 
**Criteria** | [**RoleCriteriaLevel1**](role-criteria-level1) |  | [optional] 
**Identities** | [**[]RoleMembershipIdentity**](role-membership-identity) | Defines role membership as being exclusive to the specified Identities, when type is IDENTITY_LIST. | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMembershipSelector = Initialize-RoleMembershipSelector  -Type null `
 -Criteria null `
 -Identities null
```

- Convert the resource to JSON
```powershell
$RoleMembershipSelector | ConvertTo-JSON
```


[[Back to top]](#) 

