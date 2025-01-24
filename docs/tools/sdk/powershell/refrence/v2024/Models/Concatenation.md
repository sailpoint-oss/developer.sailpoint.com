---
id: concatenation
title: Concatenation
pagination_label: Concatenation
sidebar_label: Concatenation
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Concatenation'] 
slug: /tools/sdk/powershell/v2024/models/concatenation
tags: ['SDK', 'Software Development Kit', 'Concatenation']
---


# Concatenation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Values** |  [**[]SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | An array of items to join together | [required]
**RequiresPeriodicRefresh** |  Pointer to **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]
**VarInput** |  Pointer to [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] 

## Examples

- Prepare the resource
```powershell
$Concatenation = Initialize-PSSailpoint.V2024Concatenation  -Values [John,  , Smith] `
 -RequiresPeriodicRefresh false `
 -VarInput {type&#x3D;accountAttribute, attributes&#x3D;{attributeName&#x3D;first_name, sourceName&#x3D;Source}}
```

- Convert the resource to JSON
```powershell
$Concatenation | ConvertTo-JSON
```


[[Back to top]](#) 

