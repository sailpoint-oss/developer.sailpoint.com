---
id: v2025-config-object
title: ConfigObject
pagination_label: ConfigObject
sidebar_label: ConfigObject
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ConfigObject', 'V2025ConfigObject'] 
slug: /tools/sdk/powershell/v2025/models/config-object
tags: ['SDK', 'Software Development Kit', 'ConfigObject', 'V2025ConfigObject']
---


# ConfigObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | **Int32** | Current version of configuration object. | [optional] 
**Self** | [**SelfImportExportDto**](self-import-export-dto) |  | [optional] 
**Object** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Object details. Format dependant on the object type. | [optional] 

## Examples

- Prepare the resource
```powershell
$ConfigObject = Initialize-PSSailpoint.V2025ConfigObject  -Version 1 `
 -Self null `
 -Object null
```

- Convert the resource to JSON
```powershell
$ConfigObject | ConvertTo-JSON
```


[[Back to top]](#) 

