---
id: decomposediacriticalmarks
title: Decomposediacriticalmarks
pagination_label: Decomposediacriticalmarks
sidebar_label: Decomposediacriticalmarks
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Decomposediacriticalmarks', 'Decomposediacriticalmarks'] 
slug: /tools/sdk/powershell/transforms/models/decomposediacriticalmarks
tags: ['SDK', 'Software Development Kit', 'Decomposediacriticalmarks', 'Decomposediacriticalmarks']
---


# Decomposediacriticalmarks

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequiresPeriodicRefresh** | **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]
**VarInput** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] 

## Examples

- Prepare the resource
```powershell
$Decomposediacriticalmarks = Initialize-Decomposediacriticalmarks  -RequiresPeriodicRefresh false `
 -VarInput {"type":"accountAttribute","attributes":{"attributeName":"first_name","sourceName":"Source"}}
```

- Convert the resource to JSON
```powershell
$Decomposediacriticalmarks | ConvertTo-JSON
```


[[Back to top]](#) 

