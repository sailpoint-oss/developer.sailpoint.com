---
id: v2025-export-payload
title: ExportPayload
pagination_label: ExportPayload
sidebar_label: ExportPayload
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ExportPayload', 'V2025ExportPayload'] 
slug: /tools/sdk/powershell/v2025/models/export-payload
tags: ['SDK', 'Software Development Kit', 'ExportPayload', 'V2025ExportPayload']
---


# ExportPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | **String** | Optional user defined description/name for export job. | [optional] 
**ExcludeTypes** | **[]String** | Object type names to be excluded from an sp-config export command. | [optional] 
**IncludeTypes** | **[]String** | Object type names to be included in an sp-config export command. IncludeTypes takes precedence over excludeTypes. | [optional] 
**ObjectOptions** | [**map[string]ObjectExportImportOptions**](object-export-import-options) | Additional options targeting specific objects related to each item in the includeTypes field | [optional] 

## Examples

- Prepare the resource
```powershell
$ExportPayload = Initialize-PSSailpoint.V2025ExportPayload  -Description Export Job 1 Test `
 -ExcludeTypes null `
 -IncludeTypes null `
 -ObjectOptions {TRIGGER_SUBSCRIPTION={includedIds=[be9e116d-08e1-49fc-ab7f-fa585e96c9e4], includedNames=[Test 2]}}
```

- Convert the resource to JSON
```powershell
$ExportPayload | ConvertTo-JSON
```


[[Back to top]](#) 

