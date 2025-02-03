---
id: beta-children
title: Children
pagination_label: Children
sidebar_label: Children
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Children', 'BetaChildren'] 
slug: /tools/sdk/powershell/beta/models/children
tags: ['SDK', 'Software Development Kit', 'Children', 'BetaChildren']
---


# Children

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operator** | **String** |  | [optional] 
**Attribute** | **String** |  | [optional] 
**Value** | [**Value**](value) |  | [optional] 
**Children** | **String** |  | [optional] 

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

