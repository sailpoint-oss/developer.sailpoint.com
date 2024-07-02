---
id: context-attribute-dto
title: ContextAttributeDto
pagination_label: ContextAttributeDto
sidebar_label: ContextAttributeDto
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ContextAttributeDto'] 
slug: /tools/sdk/powershell/beta/models/context-attribute-dto
tags: ['SDK', 'Software Development Kit', 'ContextAttributeDto']
---


# ContextAttributeDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attribute** |  Pointer to **String** | The name of the attribute | [optional] 
**Value** |  Pointer to [**ContextAttributeDtoValue**](context-attribute-dto-value) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ContextAttributeDto = Initialize-BetaContextAttributeDto  -Attribute location `
 -Value null
```

- Convert the resource to JSON
```powershell
$ContextAttributeDto | ConvertTo-JSON
```


[[Back to top]](#) 

