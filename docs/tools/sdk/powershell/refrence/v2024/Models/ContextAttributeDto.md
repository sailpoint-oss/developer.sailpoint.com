---
id: context-attribute-dto
title: ContextAttributeDto
pagination_label: ContextAttributeDto
sidebar_label: ContextAttributeDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ContextAttributeDto'] 
slug: /tools/sdk/powershell/v2024/models/context-attribute-dto
tags: ['SDK', 'Software Development Kit', 'ContextAttributeDto']
---


# ContextAttributeDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attribute** |  Pointer to **String** | The name of the attribute | [optional] 
**Value** |  Pointer to [**ContextAttributeDtoValue**](context-attribute-dto-value) |  | [optional] 
**Derived** |  Pointer to **Boolean** | True if the attribute was derived. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$ContextAttributeDto = Initialize-PSSailpoint.V2024ContextAttributeDto  -Attribute location `
 -Value null `
 -Derived false
```

- Convert the resource to JSON
```powershell
$ContextAttributeDto | ConvertTo-JSON
```


[[Back to top]](#) 

