---
id: role-mining-potential-role
title: RoleMiningPotentialRole
pagination_label: RoleMiningPotentialRole
sidebar_label: RoleMiningPotentialRole
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMiningPotentialRole'] 
slug: /tools/sdk/powershell/v2024/models/role-mining-potential-role
tags: ['SDK', 'Software Development Kit', 'RoleMiningPotentialRole']
---


# RoleMiningPotentialRole

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedBy** |  Pointer to [**RoleMiningSessionResponseCreatedBy**](role-mining-session-response-created-by) |  | [optional] 
**Density** |  Pointer to **Int32** | The density of a potential role. | [optional] 
**Description** |  Pointer to **String** | The description of a potential role. | [optional] 
**EntitlementCount** |  Pointer to **Int32** | The number of entitlements in a potential role. | [optional] 
**ExcludedEntitlements** |  Pointer to **[]String** | The list of entitlement ids to be excluded. | [optional] 
**Freshness** |  Pointer to **Int32** | The freshness of a potential role. | [optional] 
**IdentityCount** |  Pointer to **Int32** | The number of identities in a potential role. | [optional] 
**IdentityDistribution** |  Pointer to [**[]RoleMiningIdentityDistribution**](role-mining-identity-distribution) | Identity attribute distribution. | [optional] 
**IdentityIds** |  Pointer to **[]String** | The list of ids in a potential role. | [optional] 
**Name** |  Pointer to **String** | Name of the potential role. | [optional] 
**ProvisionState** |  Pointer to [**RoleMiningPotentialRoleProvisionState**](role-mining-potential-role-provision-state) |  | [optional] 
**Quality** |  Pointer to **Int32** | The quality of a potential role. | [optional] 
**RoleId** |  Pointer to **String** | The roleId of a potential role. | [optional] 
**Saved** |  Pointer to **Boolean** | The potential role's saved status. | [optional] 
**Session** |  Pointer to [**RoleMiningSessionParametersDto**](role-mining-session-parameters-dto) |  | [optional] 
**Type** |  Pointer to [**RoleMiningRoleType**](role-mining-role-type) |  | [optional] 
**Id** |  Pointer to **String** | Id of the potential role | [optional] 
**CreatedDate** |  Pointer to **System.DateTime** | The date-time when this potential role was created. | [optional] 
**ModifiedDate** |  Pointer to **System.DateTime** | The date-time when this potential role was modified. | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningPotentialRole = Initialize-PSSailpoint.V2024RoleMiningPotentialRole  -CreatedBy null `
 -Density 75 `
 -Description Potential Role for Accounting dept `
 -EntitlementCount 25 `
 -ExcludedEntitlements [07a0b4e2, 13b4e2a0] `
 -Freshness 75 `
 -IdentityCount 25 `
 -IdentityDistribution null `
 -IdentityIds [07a0b4e2, 13b4e2a0] `
 -Name Saved Potential Role - 07/10 `
 -ProvisionState null `
 -Quality 100 `
 -RoleId 07a0b4e2-7a76-44fa-bd0b-c64654b66519 `
 -Saved true `
 -Session null `
 -Type null `
 -Id e0cc5d7d-bf7f-4f81-b2af-8885b09d9923 `
 -CreatedDate null `
 -ModifiedDate null
```

- Convert the resource to JSON
```powershell
$RoleMiningPotentialRole | ConvertTo-JSON
```


[[Back to top]](#) 

