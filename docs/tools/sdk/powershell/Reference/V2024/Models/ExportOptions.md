---
id: v2024-export-options
title: ExportOptions
pagination_label: ExportOptions
sidebar_label: ExportOptions
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ExportOptions', 'V2024ExportOptions'] 
slug: /tools/sdk/powershell/v2024/models/export-options
tags: ['SDK', 'Software Development Kit', 'ExportOptions', 'V2024ExportOptions']
---


# ExportOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExcludeTypes** | **[]String** | Object type names to be excluded from an sp-config export command. | [optional] 
**IncludeTypes** | **[]String** | Object type names to be included in an sp-config export command. IncludeTypes takes precedence over excludeTypes. | [optional] 
**ObjectOptions** | [**map[string]ObjectExportImportOptions**](object-export-import-options) | Additional options targeting specific objects related to each item in the includeTypes field | [optional] 

## Examples

- Prepare the resource
```powershell
$ExportOptions = Initialize-PSSailpoint.V2024ExportOptions  -ExcludeTypes null `
 -IncludeTypes null `
 -ObjectOptions {TRIGGER_SUBSCRIPTION={includedIds=[be9e116d-08e1-49fc-ab7f-fa585e96c9e4], includedNames=[Test 2]}}
```

- Convert the resource to JSON
```powershell
$ExportOptions | ConvertTo-JSON
```


[[Back to top]](#) 

