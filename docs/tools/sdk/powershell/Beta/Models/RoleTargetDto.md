---
id: role-target-dto
title: RoleTargetDto
pagination_label: RoleTargetDto
sidebar_label: RoleTargetDto
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'RoleTargetDto'] 
slug: /tools/sdk/powershell/beta/models/role-target-dto
tags: ['SDK', 'Software Development Kit', 'RoleTargetDto']
---


# RoleTargetDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Source** |  Pointer to [**BaseReferenceDto**](base-reference-dto) |  | [optional] 
**AccountInfo** |  Pointer to [**AccountInfoDto**](account-info-dto) |  | [optional] 
**RoleName** |  Pointer to **String** | Specific role name for this target if using multiple accounts | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleTargetDto = Initialize-PSSailpointBetaRoleTargetDto  -Source null `
 -AccountInfo null `
 -RoleName Marketing
```

- Convert the resource to JSON
```powershell
$RoleTargetDto | ConvertTo-JSON
```


[[Back to top]](#) 

