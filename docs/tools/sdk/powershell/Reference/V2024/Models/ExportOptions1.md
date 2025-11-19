---
id: v2024-export-options1
title: ExportOptions1
pagination_label: ExportOptions1
sidebar_label: ExportOptions1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ExportOptions1', 'V2024ExportOptions1'] 
slug: /tools/sdk/powershell/v2024/models/export-options1
tags: ['SDK', 'Software Development Kit', 'ExportOptions1', 'V2024ExportOptions1']
---


# ExportOptions1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExcludeTypes** | **[]String** | Object type names to be excluded from an sp-config export command. | [optional] 
**IncludeTypes** | **[]String** | Object type names to be included in an sp-config export command. IncludeTypes takes precedence over excludeTypes. | [optional] 
**ObjectOptions** | [**map[string]ObjectExportImportOptions**](object-export-import-options) | Additional options targeting specific objects related to each item in the includeTypes field | [optional] 

## Examples

- Prepare the resource
```powershell
$ExportOptions1 = Initialize-V2024ExportOptions1  -ExcludeTypes null `
 -IncludeTypes null `
 -ObjectOptions {TRIGGER_SUBSCRIPTION={includedIds=[be9e116d-08e1-49fc-ab7f-fa585e96c9e4], includedNames=[Test 2]}}
```

- Convert the resource to JSON
```powershell
$ExportOptions1 | ConvertTo-JSON
```


[[Back to top]](#) 

