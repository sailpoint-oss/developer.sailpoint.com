---
id: v2025-base64-decode
title: Base64Decode
pagination_label: Base64Decode
sidebar_label: Base64Decode
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Base64Decode', 'V2025Base64Decode'] 
slug: /tools/sdk/powershell/v2025/models/base64-decode
tags: ['SDK', 'Software Development Kit', 'Base64Decode', 'V2025Base64Decode']
---


# Base64Decode

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequiresPeriodicRefresh** | **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]
**VarInput** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] 

## Examples

- Prepare the resource
```powershell
$Base64Decode = Initialize-V2025Base64Decode  -RequiresPeriodicRefresh false `
 -VarInput {type=accountAttribute, attributes={attributeName=first_name, sourceName=Source}}
```

- Convert the resource to JSON
```powershell
$Base64Decode | ConvertTo-JSON
```


[[Back to top]](#) 

