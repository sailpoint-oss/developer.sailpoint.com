---
id: v2024-role-mining-potential-role-summary
title: RoleMiningPotentialRoleSummary
pagination_label: RoleMiningPotentialRoleSummary
sidebar_label: RoleMiningPotentialRoleSummary
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMiningPotentialRoleSummary', 'V2024RoleMiningPotentialRoleSummary'] 
slug: /tools/sdk/powershell/v2024/models/role-mining-potential-role-summary
tags: ['SDK', 'Software Development Kit', 'RoleMiningPotentialRoleSummary', 'V2024RoleMiningPotentialRoleSummary']
---


# RoleMiningPotentialRoleSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Id of the potential role | [optional] 
**Name** | **String** | Name of the potential role | [optional] 
**PotentialRoleRef** | [**RoleMiningPotentialRoleRef**](role-mining-potential-role-ref) |  | [optional] 
**IdentityCount** | **Int32** | The number of identities in a potential role. | [optional] 
**EntitlementCount** | **Int32** | The number of entitlements in a potential role. | [optional] 
**IdentityGroupStatus** | **String** | The status for this identity group which can be ""REQUESTED"" or ""OBTAINED"" | [optional] 
**ProvisionState** | [**RoleMiningPotentialRoleProvisionState**](role-mining-potential-role-provision-state) |  | [optional] 
**RoleId** | **String** | ID of the provisioned role in IIQ or IDN.  Null if this potential role has not been provisioned. | [optional] 
**Density** | **Int32** | The density metric (0-100) of this potential role. Higher density values indicate higher similarity amongst the identities. | [optional] 
**Freshness** | **Int32** | The freshness metric (0-100) of this potential role. Higher freshness values indicate this potential role is more distinctive compared to existing roles. | [optional] 
**Quality** | **Int32** | The quality metric (0-100) of this potential role. Higher quality values indicate this potential role has high density and freshness. | [optional] 
**Type** | [**RoleMiningRoleType**](role-mining-role-type) |  | [optional] 
**CreatedBy** | [**RoleMiningPotentialRoleSummaryCreatedBy**](role-mining-potential-role-summary-created-by) |  | [optional] 
**CreatedDate** | **System.DateTime** | The date-time when this potential role was created. | [optional] 
**Saved** | **Boolean** | The potential role's saved status | [optional] [default to $false]
**Description** | **String** | Description of the potential role | [optional] 
**Session** | [**RoleMiningSessionParametersDto**](role-mining-session-parameters-dto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningPotentialRoleSummary = Initialize-PSSailpoint.V2024RoleMiningPotentialRoleSummary  -Id e0cc5d7d-bf7f-4f81-b2af-8885b09d9923 `
 -Name Potential Role - e0cc5d `
 -PotentialRoleRef null `
 -IdentityCount 25 `
 -EntitlementCount 15 `
 -IdentityGroupStatus OBTAINED `
 -ProvisionState null `
 -RoleId 2a4be6fbcf3c4e66b95a0c15ffd591 `
 -Density 90 `
 -Freshness 70 `
 -Quality 80 `
 -Type null `
 -CreatedBy null `
 -CreatedDate null `
 -Saved true `
 -Description null `
 -Session null
```

- Convert the resource to JSON
```powershell
$RoleMiningPotentialRoleSummary | ConvertTo-JSON
```


[[Back to top]](#) 

