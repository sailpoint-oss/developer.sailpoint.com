---
id: left-pad
title: LeftPad
pagination_label: LeftPad
sidebar_label: LeftPad
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LeftPad', 'LeftPad'] 
slug: /tools/sdk/powershell/v3/models/left-pad
tags: ['SDK', 'Software Development Kit', 'LeftPad', 'LeftPad']
---


# LeftPad

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Length** | **String** | An integer value for the desired length of the final output string | [required]
**Padding** | **String** | A string value representing the character that the incoming data should be padded with to get to the desired length   If not provided, the transform will default to a single space ("" "") character for padding  | [optional] 
**RequiresPeriodicRefresh** | **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]
**VarInput** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] 

## Examples

- Prepare the resource
```powershell
$LeftPad = Initialize-PSSailpoint.V3LeftPad  -Length 4 `
 -Padding 0 `
 -RequiresPeriodicRefresh false `
 -VarInput {type&#x3D;accountAttribute, attributes&#x3D;{attributeName&#x3D;first_name, sourceName&#x3D;Source}}
```

- Convert the resource to JSON
```powershell
$LeftPad | ConvertTo-JSON
```


[[Back to top]](#) 

