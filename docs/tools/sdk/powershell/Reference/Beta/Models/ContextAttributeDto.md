---
id: beta-context-attribute-dto
title: ContextAttributeDto
pagination_label: ContextAttributeDto
sidebar_label: ContextAttributeDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ContextAttributeDto', 'BetaContextAttributeDto'] 
slug: /tools/sdk/powershell/beta/models/context-attribute-dto
tags: ['SDK', 'Software Development Kit', 'ContextAttributeDto', 'BetaContextAttributeDto']
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
$ContextAttributeDto = Initialize-BetaContextAttributeDto  -Attribute location `
 -Value null `
 -Derived false
```

- Convert the resource to JSON
```powershell
$ContextAttributeDto | ConvertTo-JSON
```


[[Back to top]](#) 

