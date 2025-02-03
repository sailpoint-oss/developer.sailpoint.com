---
id: v2024-trim
title: Trim
pagination_label: Trim
sidebar_label: Trim
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Trim', 'V2024Trim'] 
slug: /tools/sdk/powershell/v2024/models/trim
tags: ['SDK', 'Software Development Kit', 'Trim', 'V2024Trim']
---


# Trim

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequiresPeriodicRefresh** |  Pointer to **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]
**VarInput** |  Pointer to [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] 

## Examples

- Prepare the resource
```powershell
$Trim = Initialize-PSSailpoint.V2024Trim  -RequiresPeriodicRefresh false `
 -VarInput {type&#x3D;accountAttribute, attributes&#x3D;{attributeName&#x3D;first_name, sourceName&#x3D;Source}}
```

- Convert the resource to JSON
```powershell
$Trim | ConvertTo-JSON
```


[[Back to top]](#) 

