---
id: v2025-object-export-import-options
title: ObjectExportImportOptions
pagination_label: ObjectExportImportOptions
sidebar_label: ObjectExportImportOptions
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ObjectExportImportOptions', 'V2025ObjectExportImportOptions'] 
slug: /tools/sdk/powershell/v2025/models/object-export-import-options
tags: ['SDK', 'Software Development Kit', 'ObjectExportImportOptions', 'V2025ObjectExportImportOptions']
---


# ObjectExportImportOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IncludedIds** | **[]String** | Object ids to be included in an import or export. | [optional] 
**IncludedNames** | **[]String** | Object names to be included in an import or export. | [optional] 

## Examples

- Prepare the resource
```powershell
$ObjectExportImportOptions = Initialize-PSSailpoint.V2025ObjectExportImportOptions  -IncludedIds null `
 -IncludedNames null
```

- Convert the resource to JSON
```powershell
$ObjectExportImportOptions | ConvertTo-JSON
```


[[Back to top]](#) 

