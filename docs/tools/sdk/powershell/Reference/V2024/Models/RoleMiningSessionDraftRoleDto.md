---
id: v2024-role-mining-session-draft-role-dto
title: RoleMiningSessionDraftRoleDto
pagination_label: RoleMiningSessionDraftRoleDto
sidebar_label: RoleMiningSessionDraftRoleDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMiningSessionDraftRoleDto', 'V2024RoleMiningSessionDraftRoleDto'] 
slug: /tools/sdk/powershell/v2024/models/role-mining-session-draft-role-dto
tags: ['SDK', 'Software Development Kit', 'RoleMiningSessionDraftRoleDto', 'V2024RoleMiningSessionDraftRoleDto']
---


# RoleMiningSessionDraftRoleDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Name of the draft role | [optional] 
**Description** | **String** | Draft role description | [optional] 
**IdentityIds** | **[]String** | The list of identities for this role mining session. | [optional] 
**EntitlementIds** | **[]String** | The list of entitlement ids for this role mining session. | [optional] 
**ExcludedEntitlements** | **[]String** | The list of excluded entitlement ids. | [optional] 
**Modified** | **System.DateTime** | Last modified date | [optional] 
**Type** | [**RoleMiningRoleType**](role-mining-role-type) |  | [optional] 
**Id** | **String** | Id of the potential draft role | [optional] 
**CreatedDate** | **System.DateTime** | The date-time when this potential draft role was created. | [optional] 
**ModifiedDate** | **System.DateTime** | The date-time when this potential draft role was modified. | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningSessionDraftRoleDto = Initialize-V2024RoleMiningSessionDraftRoleDto  -Name Saved RM Session - 07/10 `
 -Description Person who develops software `
 -IdentityIds [2c918090761a5aac0176215c46a62d58, 2c918090761a5aac01722015c46a62d42] `
 -EntitlementIds [2c91808a7624751a01762f19d665220d, 2c91808a7624751a01762f19d67c220e] `
 -ExcludedEntitlements [07a0b4e2, 13b4e2a0] `
 -Modified 2020-09-16T18:49:32.150Z `
 -Type null `
 -Id e0cc5d7d-bf7f-4f81-b2af-8885b09d9923 `
 -CreatedDate null `
 -ModifiedDate null
```

- Convert the resource to JSON
```powershell
$RoleMiningSessionDraftRoleDto | ConvertTo-JSON
```


[[Back to top]](#) 

