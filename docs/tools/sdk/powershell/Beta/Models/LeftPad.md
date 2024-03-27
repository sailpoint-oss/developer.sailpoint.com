---
id: left-pad
title: LeftPad
pagination_label: LeftPad
sidebar_label: LeftPad
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'LeftPad'] 
slug: /tools/sdk/powershell/beta/models/left-pad
tags: ['SDK', 'Software Development Kit', 'LeftPad']
---


# LeftPad

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Length** |  **String** | An integer value for the desired length of the final output string | 
**Padding** |  Pointer to **String** | A string value representing the character that the incoming data should be padded with to get to the desired length   If not provided, the transform will default to a single space (&quot;&quot; &quot;&quot;) character for padding  | [optional] 
**RequiresPeriodicRefresh** |  Pointer to **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]
**VarInput** |  Pointer to [map[string] **Any**] | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] 

## Examples

- Prepare the resource
```powershell
$LeftPad = Initialize-PSSailpointBetaLeftPad  -Length 4 `
 -Padding 0 `
 -RequiresPeriodicRefresh false `
 -VarInput {type&#x3D;accountAttribute, attributes&#x3D;{attributeName&#x3D;first_name, sourceName&#x3D;Source}}
```

- Convert the resource to JSON
```powershell
$LeftPad | ConvertTo-JSON
```


[[Back to top]](#) 

