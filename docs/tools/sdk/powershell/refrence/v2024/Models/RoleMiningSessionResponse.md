---
id: role-mining-session-response
title: RoleMiningSessionResponse
pagination_label: RoleMiningSessionResponse
sidebar_label: RoleMiningSessionResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMiningSessionResponse'] 
slug: /tools/sdk/powershell/v2024/models/role-mining-session-response
tags: ['SDK', 'Software Development Kit', 'RoleMiningSessionResponse']
---


# RoleMiningSessionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Scope** |  Pointer to [**RoleMiningSessionScope**](role-mining-session-scope) |  | [optional] 
**MinNumIdentitiesInPotentialRole** |  Pointer to **Int32** | Minimum number of identities in a potential role | [optional] 
**ScopingMethod** |  Pointer to **String** | The scoping method of the role mining session | [optional] 
**PrescribedPruneThreshold** |  Pointer to **Int32** | The computed (or prescribed) prune threshold for this session | [optional] 
**PruneThreshold** |  Pointer to **Int32** | The prune threshold to be used for this role mining session | [optional] 
**PotentialRoleCount** |  Pointer to **Int32** | The number of potential roles | [optional] 
**PotentialRolesReadyCount** |  Pointer to **Int32** | The number of potential roles which have completed processing | [optional] 
**Status** |  Pointer to [**RoleMiningSessionStatus**](role-mining-session-status) |  | [optional] 
**EmailRecipientId** |  Pointer to **String** | The id of the user who will receive an email about the role mining session | [optional] 
**CreatedBy** |  Pointer to [**RoleMiningSessionResponseCreatedBy**](role-mining-session-response-created-by) |  | [optional] 
**IdentityCount** |  Pointer to **Int32** | The number of identities | [optional] 
**Saved** |  Pointer to **Boolean** | The session's saved status | [optional] [default to $false]
**Name** |  Pointer to **String** | The session's saved name | [optional] 
**DataFilePath** |  Pointer to **String** | The data file path of the role mining session | [optional] 
**Id** |  Pointer to **String** | Session Id for this role mining session | [optional] 
**CreatedDate** |  Pointer to **System.DateTime** | The date-time when this role mining session was created. | [optional] 
**ModifiedDate** |  Pointer to **System.DateTime** | The date-time when this role mining session was completed. | [optional] 
**Type** |  Pointer to [**RoleMiningRoleType**](role-mining-role-type) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningSessionResponse = Initialize-PSSailpoint.V2024RoleMiningSessionResponse  -Scope null `
 -MinNumIdentitiesInPotentialRole 20 `
 -ScopingMethod AUTO_RM `
 -PrescribedPruneThreshold 83 `
 -PruneThreshold 70 `
 -PotentialRoleCount 8 `
 -PotentialRolesReadyCount 4 `
 -Status null `
 -EmailRecipientId null `
 -CreatedBy null `
 -IdentityCount 39 `
 -Saved true `
 -Name Saved RM Session - 07/10 `
 -DataFilePath null `
 -Id 8c190e67-87aa-4ed9-a90b-d9d5344523fb `
 -CreatedDate null `
 -ModifiedDate null `
 -Type null
```

- Convert the resource to JSON
```powershell
$RoleMiningSessionResponse | ConvertTo-JSON
```


[[Back to top]](#) 

