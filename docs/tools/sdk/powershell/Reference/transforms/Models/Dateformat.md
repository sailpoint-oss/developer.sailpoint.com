---
id: dateformat
title: Dateformat
pagination_label: Dateformat
sidebar_label: Dateformat
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Dateformat', 'Dateformat'] 
slug: /tools/sdk/powershell/transforms/models/dateformat
tags: ['SDK', 'Software Development Kit', 'Dateformat', 'Dateformat']
---


# Dateformat

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InputFormat** | [**DateformatInputFormat**](dateformat-input-format) |  | [optional] 
**OutputFormat** | [**DateformatOutputFormat**](dateformat-output-format) |  | [optional] 
**RequiresPeriodicRefresh** | **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]
**VarInput** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] 

## Examples

- Prepare the resource
```powershell
$Dateformat = Initialize-Dateformat  -InputFormat null `
 -OutputFormat null `
 -RequiresPeriodicRefresh false `
 -VarInput {"type":"accountAttribute","attributes":{"attributeName":"first_name","sourceName":"Source"}}
```

- Convert the resource to JSON
```powershell
$Dateformat | ConvertTo-JSON
```


[[Back to top]](#) 

