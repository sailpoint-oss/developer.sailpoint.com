---
id: v2025-role-mining-session-dto
title: RoleMiningSessionDto
pagination_label: RoleMiningSessionDto
sidebar_label: RoleMiningSessionDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMiningSessionDto', 'V2025RoleMiningSessionDto'] 
slug: /tools/sdk/powershell/v2025/models/role-mining-session-dto
tags: ['SDK', 'Software Development Kit', 'RoleMiningSessionDto', 'V2025RoleMiningSessionDto']
---


# RoleMiningSessionDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Scope** | [**RoleMiningSessionScope**](role-mining-session-scope) |  | [optional] 
**PruneThreshold** | **Int32** | The prune threshold to be used or null to calculate prescribedPruneThreshold | [optional] 
**PrescribedPruneThreshold** | **Int32** | The calculated prescribedPruneThreshold | [optional] 
**MinNumIdentitiesInPotentialRole** | **Int32** | Minimum number of identities in a potential role | [optional] 
**PotentialRoleCount** | **Int32** | Number of potential roles | [optional] 
**PotentialRolesReadyCount** | **Int32** | Number of potential roles ready | [optional] 
**Type** | [**RoleMiningRoleType**](role-mining-role-type) |  | [optional] 
**EmailRecipientId** | **String** | The id of the user who will receive an email about the role mining session | [optional] 
**IdentityCount** | **Int32** | Number of identities in the population which meet the search criteria or identity list provided | [optional] 
**Saved** | **Boolean** | The session's saved status | [optional] [default to $false]
**Name** | **String** | The session's saved name | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningSessionDto = Initialize-V2025RoleMiningSessionDto  -Scope null `
 -PruneThreshold 50 `
 -PrescribedPruneThreshold 10 `
 -MinNumIdentitiesInPotentialRole 20 `
 -PotentialRoleCount 0 `
 -PotentialRolesReadyCount 0 `
 -Type null `
 -EmailRecipientId 2c918090761a5aac0176215c46a62d58 `
 -IdentityCount 0 `
 -Saved true `
 -Name Saved RM Session - 07/10
```

- Convert the resource to JSON
```powershell
$RoleMiningSessionDto | ConvertTo-JSON
```


[[Back to top]](#) 

