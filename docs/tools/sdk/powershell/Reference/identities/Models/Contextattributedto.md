---
id: contextattributedto
title: Contextattributedto
pagination_label: Contextattributedto
sidebar_label: Contextattributedto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Contextattributedto', 'Contextattributedto'] 
slug: /tools/sdk/powershell/identities/models/contextattributedto
tags: ['SDK', 'Software Development Kit', 'Contextattributedto', 'Contextattributedto']
---


# Contextattributedto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attribute** | **String** | The name of the attribute | [optional] 
**Value** | [**ContextattributedtoValue**](contextattributedto-value) |  | [optional] 
**Derived** | **Boolean** | True if the attribute was derived. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$Contextattributedto = Initialize-Contextattributedto  -Attribute location `
 -Value null `
 -Derived false
```

- Convert the resource to JSON
```powershell
$Contextattributedto | ConvertTo-JSON
```


[[Back to top]](#) 

