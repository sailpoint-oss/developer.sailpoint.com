# RoleMiningPotentialRole

# RoleMiningPotentialRole

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedBy** | [**RoleMiningSessionResponseCreatedBy**](role-mining-session-response-created-by) |  | [optional] 
**Density** | **Int32** | The density of a potential role. | [optional] 
**Description** | **String** | The description of a potential role. | [optional] 
**EntitlementCount** | **Int32** | The number of entitlements in a potential role. | [optional] 
**ExcludedEntitlements** | **[]String** | The list of entitlement ids to be excluded. | [optional] 
**Freshness** | **Int32** | The freshness of a potential role. | [optional] 
**IdentityCount** | **Int32** | The number of identities in a potential role. | [optional] 
**IdentityDistribution** | [**[]RoleMiningIdentityDistribution**](role-mining-identity-distribution) | Identity attribute distribution. | [optional] 
**IdentityIds** | **[]String** | The list of ids in a potential role. | [optional] 
**IdentityGroupStatus** | **String** | The status for this identity group which can be OBTAINED or COMPRESSED | [optional] 
**Name** | **String** | Name of the potential role. | [optional] 
**PotentialRoleRef** | [**RoleMiningPotentialRolePotentialRoleRef**](role-mining-potential-role-potential-role-ref) |  | [optional] 
**ProvisionState** | [**RoleMiningPotentialRoleProvisionState**](role-mining-potential-role-provision-state) |  | [optional] 
**Quality** | **Int32** | The quality of a potential role. | [optional] 
**RoleId** | **String** | The roleId of a potential role. | [optional] 
**Saved** | **Boolean** | The potential role's saved status. | [optional] [default to $false]
**Session** | [**RoleMiningSessionParametersDto**](role-mining-session-parameters-dto) |  | [optional] 
**Type** | **RoleMiningRoleType** |  | [optional] 
**Id** | **String** | Id of the potential role | [optional] 
**CreatedDate** | **System.DateTime** | The date-time when this potential role was created. | [optional] 
**ModifiedDate** | **System.DateTime** | The date-time when this potential role was modified. | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningPotentialRole = Initialize-RoleMiningPotentialRole  -CreatedBy null `
 -Density 75 `
 -Description Potential Role for Accounting dept `
 -EntitlementCount 25 `
 -ExcludedEntitlements ["07a0b4e2","13b4e2a0"] `
 -Freshness 75 `
 -IdentityCount 25 `
 -IdentityDistribution null `
 -IdentityIds ["07a0b4e2","13b4e2a0"] `
 -IdentityGroupStatus OBTAINED `
 -Name Saved Potential Role - 07/10 `
 -PotentialRoleRef null `
 -ProvisionState null `
 -Quality 100 `
 -RoleId 07a0b4e2-7a76-44fa-bd0b-c64654b66519 `
 -Saved true `
 -Session null `
 -Type null `
 -Id e0cc5d7d-bf7f-4f81-b2af-8885b09d9923 `
 -CreatedDate 2020-01-01T00:00Z `
 -ModifiedDate 2020-01-01T00:00Z
```

- Convert the resource to JSON
```powershell
$RoleMiningPotentialRole | ConvertTo-JSON
```


[[Back to top]](#) 

