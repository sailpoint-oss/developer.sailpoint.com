---
id: v2024-role-match-dto
title: RoleMatchDto
pagination_label: RoleMatchDto
sidebar_label: RoleMatchDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMatchDto', 'V2024RoleMatchDto'] 
slug: /tools/sdk/powershell/v2024/models/role-match-dto
tags: ['SDK', 'Software Development Kit', 'RoleMatchDto', 'V2024RoleMatchDto']
---


# RoleMatchDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoleRef** | [**BaseReferenceDto1**](base-reference-dto1) |  | [optional] 
**MatchedAttributes** | [**[]ContextAttributeDto**](context-attribute-dto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMatchDto = Initialize-PSSailpoint.V2024RoleMatchDto  -RoleRef null `
 -MatchedAttributes null
```

- Convert the resource to JSON
```powershell
$RoleMatchDto | ConvertTo-JSON
```


[[Back to top]](#) 

