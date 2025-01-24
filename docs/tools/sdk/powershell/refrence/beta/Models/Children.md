---
id: children
title: Children
pagination_label: Children
sidebar_label: Children
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Children'] 
slug: /tools/sdk/powershell/beta/models/children
tags: ['SDK', 'Software Development Kit', 'Children']
---


# Children

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operator** |  Pointer to **String** |  | [optional] 
**Attribute** |  Pointer to **String** |  | [optional] 
**Value** |  Pointer to [**Value**](value) |  | [optional] 
**Children** |  Pointer to **String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Children = Initialize-PSSailpoint.BetaChildren  -Operator EQUALS `
 -Attribute country `
 -Value null `
 -Children null
```

- Convert the resource to JSON
```powershell
$Children | ConvertTo-JSON
```


[[Back to top]](#) 

