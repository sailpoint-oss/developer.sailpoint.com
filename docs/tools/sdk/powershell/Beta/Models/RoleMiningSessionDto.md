---
id: role-mining-session-dto
title: RoleMiningSessionDto
pagination_label: RoleMiningSessionDto
sidebar_label: RoleMiningSessionDto
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'RoleMiningSessionDto'] 
slug: /tools/sdk/powershell/beta/models/role-mining-session-dto
tags: ['SDK', 'Software Development Kit', 'RoleMiningSessionDto']
---


# RoleMiningSessionDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Scope** |  Pointer to [**RoleMiningSessionScope**](role-mining-session-scope) |  | [optional] 
**PruneThreshold** |  Pointer to **Int32** | The prune threshold to be used or null to calculate prescribedPruneThreshold | [optional] 
**PrescribedPruneThreshold** |  Pointer to **Int32** | The calculated prescribedPruneThreshold | [optional] 
**MinNumIdentitiesInPotentialRole** |  Pointer to **Int32** | Minimum number of identities in a potential role | [optional] 
**PotentialRoleCount** |  Pointer to **Int32** | Number of potential roles | [optional] 
**PotentialRolesReadyCount** |  Pointer to **Int32** | Number of potential roles ready | [optional] 
**Status** |  Pointer to [**RoleMiningSessionStatus**](role-mining-session-status) |  | [optional] 
**Type** |  Pointer to [**RoleMiningRoleType**](role-mining-role-type) |  | [optional] 
**EmailRecipientId** |  Pointer to **String** | The id of the user who will receive an email about the role mining session | [optional] 
**CreatedBy** |  Pointer to [**RoleMiningSessionDtoCreatedBy**](role-mining-session-dto-created-by) |  | [optional] 
**IdentityCount** |  Pointer to **Int32** | Number of identities in the population which meet the search criteria or identity list provided | [optional] 
**Saved** |  Pointer to **Boolean** | The session&#39;s saved status | [optional] [default to $false]
**Name** |  Pointer to **String** | The session&#39;s saved name | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningSessionDto = Initialize-PSSailpointBetaRoleMiningSessionDto  -Scope null `
 -PruneThreshold 5 `
 -PrescribedPruneThreshold 10 `
 -MinNumIdentitiesInPotentialRole 20 `
 -PotentialRoleCount 0 `
 -PotentialRolesReadyCount 0 `
 -Status null `
 -Type null `
 -EmailRecipientId 2c918090761a5aac0176215c46a62d58 `
 -CreatedBy null `
 -IdentityCount 0 `
 -Saved true `
 -Name Saved RM Session - 07/10
```

- Convert the resource to JSON
```powershell
$RoleMiningSessionDto | ConvertTo-JSON
```


[[Back to top]](#) 

