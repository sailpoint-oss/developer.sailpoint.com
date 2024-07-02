---
id: base64-decode
title: Base64Decode
pagination_label: Base64Decode
sidebar_label: Base64Decode
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'Base64Decode'] 
slug: /tools/sdk/powershell/v3/models/base64-decode
tags: ['SDK', 'Software Development Kit', 'Base64Decode']
---


# Base64Decode

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequiresPeriodicRefresh** |  Pointer to **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]
**VarInput** |  Pointer to [map[string] **Any**] | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] 

## Examples

- Prepare the resource
```powershell
$Base64Decode = Initialize-Base64Decode  -RequiresPeriodicRefresh false `
 -VarInput {type=accountAttribute, attributes={attributeName=first_name, sourceName=Source}}
```

- Convert the resource to JSON
```powershell
$Base64Decode | ConvertTo-JSON
```


[[Back to top]](#) 

