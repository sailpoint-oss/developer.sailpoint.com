---
id: beta-decompose-diacritical-marks
title: DecomposeDiacriticalMarks
pagination_label: DecomposeDiacriticalMarks
sidebar_label: DecomposeDiacriticalMarks
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DecomposeDiacriticalMarks', 'BetaDecomposeDiacriticalMarks'] 
slug: /tools/sdk/powershell/beta/models/decompose-diacritical-marks
tags: ['SDK', 'Software Development Kit', 'DecomposeDiacriticalMarks', 'BetaDecomposeDiacriticalMarks']
---


# DecomposeDiacriticalMarks

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequiresPeriodicRefresh** |  Pointer to **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]
**VarInput** |  Pointer to [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] 

## Examples

- Prepare the resource
```powershell
$DecomposeDiacriticalMarks = Initialize-PSSailpoint.BetaDecomposeDiacriticalMarks  -RequiresPeriodicRefresh false `
 -VarInput {type&#x3D;accountAttribute, attributes&#x3D;{attributeName&#x3D;first_name, sourceName&#x3D;Source}}
```

- Convert the resource to JSON
```powershell
$DecomposeDiacriticalMarks | ConvertTo-JSON
```


[[Back to top]](#) 

