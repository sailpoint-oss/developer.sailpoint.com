---
id: date-format
title: DateFormat
pagination_label: DateFormat
sidebar_label: DateFormat
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'DateFormat'] 
slug: /tools/sdk/powershell/v3/models/date-format
tags: ['SDK', 'Software Development Kit', 'DateFormat']
---


# DateFormat

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InputFormat** |  Pointer to [**DateFormatInputFormat**](date-format-input-format) |  | [optional] 
**OutputFormat** |  Pointer to [**DateFormatOutputFormat**](date-format-output-format) |  | [optional] 
**RequiresPeriodicRefresh** |  Pointer to **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]
**VarInput** |  Pointer to [map[string] **Any**] | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] 

## Examples

- Prepare the resource
```powershell
$DateFormat = Initialize-PSSailpointDateFormat  -InputFormat null `
 -OutputFormat null `
 -RequiresPeriodicRefresh false `
 -VarInput {type&#x3D;accountAttribute, attributes&#x3D;{attributeName&#x3D;first_name, sourceName&#x3D;Source}}
```

- Convert the resource to JSON
```powershell
$DateFormat | ConvertTo-JSON
```


[[Back to top]](#) 

