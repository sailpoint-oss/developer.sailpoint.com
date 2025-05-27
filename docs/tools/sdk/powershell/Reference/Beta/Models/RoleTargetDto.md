---
id: beta-role-target-dto
title: RoleTargetDto
pagination_label: RoleTargetDto
sidebar_label: RoleTargetDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleTargetDto', 'BetaRoleTargetDto'] 
slug: /tools/sdk/powershell/beta/models/role-target-dto
tags: ['SDK', 'Software Development Kit', 'RoleTargetDto', 'BetaRoleTargetDto']
---


# RoleTargetDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Source** | [**BaseReferenceDto1**](base-reference-dto1) |  | [optional] 
**AccountInfo** | [**AccountInfoDto**](account-info-dto) |  | [optional] 
**RoleName** | **String** | Specific role name for this target if using multiple accounts | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleTargetDto = Initialize-BetaRoleTargetDto  -Source null `
 -AccountInfo null `
 -RoleName Marketing
```

- Convert the resource to JSON
```powershell
$RoleTargetDto | ConvertTo-JSON
```


[[Back to top]](#) 

