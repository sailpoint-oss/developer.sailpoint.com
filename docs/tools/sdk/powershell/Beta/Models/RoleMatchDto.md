---
id: role-match-dto
title: RoleMatchDto
pagination_label: RoleMatchDto
sidebar_label: RoleMatchDto
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'RoleMatchDto'] 
slug: /tools/sdk/powershell/beta/models/role-match-dto
tags: ['SDK', 'Software Development Kit', 'RoleMatchDto']
---


# RoleMatchDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoleName** |  Pointer to **String** | The name of the role | [optional] 
**MatchedAttributes** |  Pointer to [**[]ContextAttributeDto**](context-attribute-dto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMatchDto = Initialize-BetaRoleMatchDto  -RoleName Engineer `
 -MatchedAttributes null
```

- Convert the resource to JSON
```powershell
$RoleMatchDto | ConvertTo-JSON
```


[[Back to top]](#) 

