---
id: v2024-role-target-dto
title: RoleTargetDto
pagination_label: RoleTargetDto
sidebar_label: RoleTargetDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleTargetDto', 'V2024RoleTargetDto'] 
slug: /tools/sdk/powershell/v2024/models/role-target-dto
tags: ['SDK', 'Software Development Kit', 'RoleTargetDto', 'V2024RoleTargetDto']
---


# RoleTargetDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Source** |  Pointer to [**BaseReferenceDto1**](base-reference-dto1) |  | [optional] 
**AccountInfo** |  Pointer to [**AccountInfoDto**](account-info-dto) |  | [optional] 
**RoleName** |  Pointer to **String** | Specific role name for this target if using multiple accounts | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleTargetDto = Initialize-PSSailpoint.V2024RoleTargetDto  -Source null `
 -AccountInfo null `
 -RoleName Marketing
```

- Convert the resource to JSON
```powershell
$RoleTargetDto | ConvertTo-JSON
```


[[Back to top]](#) 

