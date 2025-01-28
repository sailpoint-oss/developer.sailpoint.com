---
id: v2024-role-mining-session-parameters-dto
title: RoleMiningSessionParametersDto
pagination_label: RoleMiningSessionParametersDto
sidebar_label: RoleMiningSessionParametersDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMiningSessionParametersDto', 'V2024RoleMiningSessionParametersDto'] 
slug: /tools/sdk/powershell/v2024/models/role-mining-session-parameters-dto
tags: ['SDK', 'Software Development Kit', 'RoleMiningSessionParametersDto', 'V2024RoleMiningSessionParametersDto']
---


# RoleMiningSessionParametersDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The ID of the role mining session | [optional] 
**Name** |  Pointer to **String** | The session's saved name | [optional] 
**MinNumIdentitiesInPotentialRole** |  Pointer to **Int32** | Minimum number of identities in a potential role | [optional] 
**PruneThreshold** |  Pointer to **Int32** | The prune threshold to be used or null to calculate prescribedPruneThreshold | [optional] 
**Saved** |  Pointer to **Boolean** | The session's saved status | [optional] [default to $true]
**Scope** |  Pointer to [**RoleMiningSessionScope**](role-mining-session-scope) |  | [optional] 
**Type** |  Pointer to [**RoleMiningRoleType**](role-mining-role-type) |  | [optional] 
**State** |  Pointer to [**RoleMiningSessionState**](role-mining-session-state) |  | [optional] 
**ScopingMethod** |  Pointer to [**RoleMiningSessionScopingMethod**](role-mining-session-scoping-method) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningSessionParametersDto = Initialize-PSSailpoint.V2024RoleMiningSessionParametersDto  -Id 9f36f5e5-1e81-4eca-b087-548959d91c71 `
 -Name Saved RM Session - 07/10 `
 -MinNumIdentitiesInPotentialRole 20 `
 -PruneThreshold 5 `
 -Saved true `
 -Scope null `
 -Type null `
 -State null `
 -ScopingMethod null
```

- Convert the resource to JSON
```powershell
$RoleMiningSessionParametersDto | ConvertTo-JSON
```


[[Back to top]](#) 

