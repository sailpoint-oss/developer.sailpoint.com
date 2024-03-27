---
id: role-mining-session-draft-role-dto
title: RoleMiningSessionDraftRoleDto
pagination_label: RoleMiningSessionDraftRoleDto
sidebar_label: RoleMiningSessionDraftRoleDto
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'RoleMiningSessionDraftRoleDto'] 
slug: /tools/sdk/powershell/beta/models/role-mining-session-draft-role-dto
tags: ['SDK', 'Software Development Kit', 'RoleMiningSessionDraftRoleDto']
---


# RoleMiningSessionDraftRoleDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** |  Pointer to **String** | Draft role description | [optional] 
**IdentityIds** |  Pointer to **[]String** | The list of identities for this role mining session. | [optional] 
**EntitlementIds** |  Pointer to **[]String** | The list of entitlement ids for this role mining session. | [optional] 
**ExcludedEntitlements** |  Pointer to **[]String** | The list of excluded entitlement ids. | [optional] 
**Modified** |  Pointer to **System.DateTime** | Last modified date | [optional] 
**Name** |  Pointer to **String** | Name of the draft role | [optional] 
**Type** |  Pointer to [**RoleMiningRoleType**](role-mining-role-type) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningSessionDraftRoleDto = Initialize-PSSailpointBetaRoleMiningSessionDraftRoleDto  -Description Person who develops software `
 -IdentityIds [2c918090761a5aac0176215c46a62d58, 2c918090761a5aac01722015c46a62d42] `
 -EntitlementIds [2c91808a7624751a01762f19d665220d, 2c91808a7624751a01762f19d67c220e] `
 -ExcludedEntitlements [07a0b4e2, 13b4e2a0] `
 -Modified 2020-09-16T18:49:32.150Z `
 -Name Saved RM Session - 07/10 `
 -Type null
```

- Convert the resource to JSON
```powershell
$RoleMiningSessionDraftRoleDto | ConvertTo-JSON
```


[[Back to top]](#) 

