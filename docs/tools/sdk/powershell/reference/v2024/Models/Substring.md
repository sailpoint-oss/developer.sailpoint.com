---
id: v2024-substring
title: Substring
pagination_label: Substring
sidebar_label: Substring
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Substring'] 
slug: /tools/sdk/powershell/v2024/models/substring
tags: ['SDK', 'Software Development Kit', 'Substring']
---


# Substring

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarBegin** |  **Int32** | The index of the first character to include in the returned substring.   If `begin` is set to -1, the transform will begin at character 0 of the input data  | [required]
**BeginOffset** |  Pointer to **Int32** | This integer value is the number of characters to add to the begin attribute when returning a substring.   This attribute is only used if begin is not -1.  | [optional] 
**VarEnd** |  Pointer to **Int32** | The index of the first character to exclude from the returned substring.  If end is -1 or not provided at all, the substring transform will return everything up to the end of the input string.  | [optional] 
**EndOffset** |  Pointer to **Int32** | This integer value is the number of characters to add to the end attribute when returning a substring.   This attribute is only used if end is provided and is not -1.  | [optional] 
**RequiresPeriodicRefresh** |  Pointer to **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]
**VarInput** |  Pointer to [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] 

## Examples

- Prepare the resource
```powershell
$Substring = Initialize-PSSailpoint.V2024Substring  -VarBegin 1 `
 -BeginOffset 3 `
 -VarEnd 6 `
 -EndOffset 1 `
 -RequiresPeriodicRefresh false `
 -VarInput {type&#x3D;accountAttribute, attributes&#x3D;{attributeName&#x3D;first_name, sourceName&#x3D;Source}}
```

- Convert the resource to JSON
```powershell
$Substring | ConvertTo-JSON
```


[[Back to top]](#) 

