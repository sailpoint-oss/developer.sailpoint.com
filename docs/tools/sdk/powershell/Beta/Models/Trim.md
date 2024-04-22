---
id: trim
title: Trim
pagination_label: Trim
sidebar_label: Trim
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'Trim'] 
slug: /tools/sdk/powershell/beta/models/trim
tags: ['SDK', 'Software Development Kit', 'Trim']
---


# Trim

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequiresPeriodicRefresh** |  Pointer to **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]
**VarInput** |  Pointer to [map[string] **Any**] | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] 

## Examples

- Prepare the resource
```powershell
$Trim = Initialize-BetaTrim  -RequiresPeriodicRefresh false `
 -VarInput {type=accountAttribute, attributes={attributeName=first_name, sourceName=Source}}
```

- Convert the resource to JSON
```powershell
$Trim | ConvertTo-JSON
```


[[Back to top]](#) 

