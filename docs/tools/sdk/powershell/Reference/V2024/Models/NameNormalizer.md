---
id: v2024-name-normalizer
title: NameNormalizer
pagination_label: NameNormalizer
sidebar_label: NameNormalizer
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NameNormalizer', 'V2024NameNormalizer'] 
slug: /tools/sdk/powershell/v2024/models/name-normalizer
tags: ['SDK', 'Software Development Kit', 'NameNormalizer', 'V2024NameNormalizer']
---


# NameNormalizer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequiresPeriodicRefresh** | **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]
**VarInput** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] 

## Examples

- Prepare the resource
```powershell
$NameNormalizer = Initialize-PSSailpoint.V2024NameNormalizer  -RequiresPeriodicRefresh false `
 -VarInput {type&#x3D;accountAttribute, attributes&#x3D;{attributeName&#x3D;first_name, sourceName&#x3D;Source}}
```

- Convert the resource to JSON
```powershell
$NameNormalizer | ConvertTo-JSON
```


[[Back to top]](#) 

