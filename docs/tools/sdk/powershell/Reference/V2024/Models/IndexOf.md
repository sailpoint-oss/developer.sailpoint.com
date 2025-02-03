---
id: v2024-index-of
title: IndexOf
pagination_label: IndexOf
sidebar_label: IndexOf
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IndexOf', 'V2024IndexOf'] 
slug: /tools/sdk/powershell/v2024/models/index-of
tags: ['SDK', 'Software Development Kit', 'IndexOf', 'V2024IndexOf']
---


# IndexOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Substring** | **String** | A substring to search for, searches the entire calling string, and returns the index of the first occurrence of the specified substring. | [required]
**RequiresPeriodicRefresh** | **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]
**VarInput** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] 

## Examples

- Prepare the resource
```powershell
$IndexOf = Initialize-PSSailpoint.V2024IndexOf  -Substring admin_ `
 -RequiresPeriodicRefresh false `
 -VarInput {type&#x3D;accountAttribute, attributes&#x3D;{attributeName&#x3D;first_name, sourceName&#x3D;Source}}
```

- Convert the resource to JSON
```powershell
$IndexOf | ConvertTo-JSON
```


[[Back to top]](#) 

