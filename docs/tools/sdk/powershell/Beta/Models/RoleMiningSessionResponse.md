---
id: role-mining-session-response
title: RoleMiningSessionResponse
pagination_label: RoleMiningSessionResponse
sidebar_label: RoleMiningSessionResponse
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'RoleMiningSessionResponse'] 
slug: /tools/sdk/powershell/beta/models/role-mining-session-response
tags: ['SDK', 'Software Development Kit', 'RoleMiningSessionResponse']
---


# RoleMiningSessionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Scope** |  Pointer to [**RoleMiningSessionScope**](role-mining-session-scope) |  | [optional] 
**MinNumIdentitiesInPotentialRole** |  Pointer to **Int32** | Minimum number of identities in a potential role | [optional] 
**PrescribedPruneThreshold** |  Pointer to **Int32** | The computed (or prescribed) prune threshold for this session | [optional] 
**PruneThreshold** |  Pointer to **Int32** | The prune threshold to be used for this role mining session | [optional] 
**PotentialRoleCount** |  Pointer to **Int32** | The number of potential roles | [optional] 
**PotentialRolesReadyCount** |  Pointer to **Int32** | The number of potential roles which have completed processing | [optional] 
**Status** |  Pointer to [**RoleMiningSessionStatus**](role-mining-session-status) |  | [optional] 
**Id** |  Pointer to **String** | Session Id for this role mining session | [optional] 
**CreatedDate** |  Pointer to **System.DateTime** | The date-time when this role mining session was created. | [optional] 
**ModifiedDate** |  Pointer to **System.DateTime** | The date-time when this role mining session was completed. | [optional] 
**Type** |  Pointer to [**RoleMiningRoleType**](role-mining-role-type) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningSessionResponse = Initialize-PSSailpointBetaRoleMiningSessionResponse  -Scope null `
 -MinNumIdentitiesInPotentialRole 20 `
 -PrescribedPruneThreshold 83 `
 -PruneThreshold 70 `
 -PotentialRoleCount 8 `
 -PotentialRolesReadyCount 4 `
 -Status null `
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

