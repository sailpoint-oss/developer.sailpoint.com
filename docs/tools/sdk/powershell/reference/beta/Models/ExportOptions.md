---
id: beta-export-options
title: ExportOptions
pagination_label: ExportOptions
sidebar_label: ExportOptions
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ExportOptions'] 
slug: /tools/sdk/powershell/beta/models/export-options
tags: ['SDK', 'Software Development Kit', 'ExportOptions']
---


# ExportOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExcludeTypes** |  Pointer to **[]String** | Object type names to be excluded from an sp-config export command. | [optional] 
**IncludeTypes** |  Pointer to **[]String** | Object type names to be included in an sp-config export command. IncludeTypes takes precedence over excludeTypes. | [optional] 
**ObjectOptions** |  Pointer to [**map[string]ObjectExportImportOptions**](object-export-import-options) | Additional options targeting specific objects related to each item in the includeTypes field | [optional] 

## Examples

- Prepare the resource
```powershell
$ExportOptions = Initialize-PSSailpoint.BetaExportOptions  -ExcludeTypes null `
 -IncludeTypes null `
 -ObjectOptions {TRIGGER_SUBSCRIPTION&#x3D;{includedIds&#x3D;[be9e116d-08e1-49fc-ab7f-fa585e96c9e4], includedNames&#x3D;[Test 2]}}
```

- Convert the resource to JSON
```powershell
$ExportOptions | ConvertTo-JSON
```


[[Back to top]](#) 

