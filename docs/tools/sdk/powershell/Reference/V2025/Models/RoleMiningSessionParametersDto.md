---
id: v2025-role-mining-session-parameters-dto
title: RoleMiningSessionParametersDto
pagination_label: RoleMiningSessionParametersDto
sidebar_label: RoleMiningSessionParametersDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMiningSessionParametersDto', 'V2025RoleMiningSessionParametersDto'] 
slug: /tools/sdk/powershell/v2025/models/role-mining-session-parameters-dto
tags: ['SDK', 'Software Development Kit', 'RoleMiningSessionParametersDto', 'V2025RoleMiningSessionParametersDto']
---


# RoleMiningSessionParametersDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The ID of the role mining session | [optional] 
**Name** | **String** | The session's saved name | [optional] 
**MinNumIdentitiesInPotentialRole** | **Int32** | Minimum number of identities in a potential role | [optional] 
**PruneThreshold** | **Int32** | The prune threshold to be used or null to calculate prescribedPruneThreshold | [optional] 
**Saved** | **Boolean** | The session's saved status | [optional] [default to $true]
**Scope** | [**RoleMiningSessionScope**](role-mining-session-scope) |  | [optional] 
**Type** | [**RoleMiningRoleType**](role-mining-role-type) |  | [optional] 
**State** | [**RoleMiningSessionState**](role-mining-session-state) |  | [optional] 
**ScopingMethod** | [**RoleMiningSessionScopingMethod**](role-mining-session-scoping-method) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningSessionParametersDto = Initialize-PSSailpoint.V2025RoleMiningSessionParametersDto  -Id 9f36f5e5-1e81-4eca-b087-548959d91c71 `
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

