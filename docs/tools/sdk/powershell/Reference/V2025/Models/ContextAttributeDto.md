---
id: v2025-context-attribute-dto
title: ContextAttributeDto
pagination_label: ContextAttributeDto
sidebar_label: ContextAttributeDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ContextAttributeDto', 'V2025ContextAttributeDto'] 
slug: /tools/sdk/powershell/v2025/models/context-attribute-dto
tags: ['SDK', 'Software Development Kit', 'ContextAttributeDto', 'V2025ContextAttributeDto']
---


# ContextAttributeDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attribute** | **String** | The name of the attribute | [optional] 
**Value** | [**ContextAttributeDtoValue**](context-attribute-dto-value) |  | [optional] 
**Derived** | **Boolean** | True if the attribute was derived. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$ContextAttributeDto = Initialize-V2025ContextAttributeDto  -Attribute location `
 -Value null `
 -Derived false
```

- Convert the resource to JSON
```powershell
$ContextAttributeDto | ConvertTo-JSON
```


[[Back to top]](#) 

