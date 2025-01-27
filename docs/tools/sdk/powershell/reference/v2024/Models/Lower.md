---
id: v2024-lower
title: Lower
pagination_label: Lower
sidebar_label: Lower
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Lower'] 
slug: /tools/sdk/powershell/v2024/models/lower
tags: ['SDK', 'Software Development Kit', 'Lower']
---


# Lower

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequiresPeriodicRefresh** |  Pointer to **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]
**VarInput** |  Pointer to [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] 

## Examples

- Prepare the resource
```powershell
$Lower = Initialize-PSSailpoint.V2024Lower  -RequiresPeriodicRefresh false `
 -VarInput {type&#x3D;accountAttribute, attributes&#x3D;{attributeName&#x3D;first_name, sourceName&#x3D;Source}}
```

- Convert the resource to JSON
```powershell
$Lower | ConvertTo-JSON
```


[[Back to top]](#) 

