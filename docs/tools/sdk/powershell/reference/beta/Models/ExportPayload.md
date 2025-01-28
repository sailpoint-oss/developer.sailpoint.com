---
id: beta-export-payload
title: ExportPayload
pagination_label: ExportPayload
sidebar_label: ExportPayload
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ExportPayload', 'BetaExportPayload'] 
slug: /tools/sdk/powershell/beta/models/export-payload
tags: ['SDK', 'Software Development Kit', 'ExportPayload', 'BetaExportPayload']
---


# ExportPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** |  Pointer to **String** | Optional user defined description/name for export job. | [optional] 
**ExcludeTypes** |  Pointer to **[]String** | Object type names to be excluded from an sp-config export command. | [optional] 
**IncludeTypes** |  Pointer to **[]String** | Object type names to be included in an sp-config export command. IncludeTypes takes precedence over excludeTypes. | [optional] 
**ObjectOptions** |  Pointer to [**map[string]ObjectExportImportOptions**](object-export-import-options) | Additional options targeting specific objects related to each item in the includeTypes field | [optional] 

## Examples

- Prepare the resource
```powershell
$ExportPayload = Initialize-PSSailpoint.BetaExportPayload  -Description Export Job 1 Test `
 -ExcludeTypes null `
 -IncludeTypes null `
 -ObjectOptions {TRIGGER_SUBSCRIPTION&#x3D;{includedIds&#x3D;[be9e116d-08e1-49fc-ab7f-fa585e96c9e4], includedNames&#x3D;[Test 2]}}
```

- Convert the resource to JSON
```powershell
$ExportPayload | ConvertTo-JSON
```


[[Back to top]](#) 

