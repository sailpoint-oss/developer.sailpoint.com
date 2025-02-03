---
id: v2024-role-mining-potential-role
title: RoleMiningPotentialRole
pagination_label: RoleMiningPotentialRole
sidebar_label: RoleMiningPotentialRole
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMiningPotentialRole', 'V2024RoleMiningPotentialRole'] 
slug: /tools/sdk/powershell/v2024/models/role-mining-potential-role
tags: ['SDK', 'Software Development Kit', 'RoleMiningPotentialRole', 'V2024RoleMiningPotentialRole']
---


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
**Name** | **String** | Name of the potential role. | [optional] 
**ProvisionState** | [**RoleMiningPotentialRoleProvisionState**](role-mining-potential-role-provision-state) |  | [optional] 
**Quality** | **Int32** | The quality of a potential role. | [optional] 
**RoleId** | **String** | The roleId of a potential role. | [optional] 
**Saved** | **Boolean** | The potential role's saved status. | [optional] 
**Session** | [**RoleMiningSessionParametersDto**](role-mining-session-parameters-dto) |  | [optional] 
**Type** | [**RoleMiningRoleType**](role-mining-role-type) |  | [optional] 
**Id** | **String** | Id of the potential role | [optional] 
**CreatedDate** | **System.DateTime** | The date-time when this potential role was created. | [optional] 
**ModifiedDate** | **System.DateTime** | The date-time when this potential role was modified. | [optional] 

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

