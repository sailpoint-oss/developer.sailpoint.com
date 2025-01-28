---
id: v2024-object-export-import-options
title: ObjectExportImportOptions
pagination_label: ObjectExportImportOptions
sidebar_label: ObjectExportImportOptions
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ObjectExportImportOptions', 'V2024ObjectExportImportOptions'] 
slug: /tools/sdk/powershell/v2024/models/object-export-import-options
tags: ['SDK', 'Software Development Kit', 'ObjectExportImportOptions', 'V2024ObjectExportImportOptions']
---


# ObjectExportImportOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IncludedIds** |  Pointer to **[]String** | Object ids to be included in an import or export. | [optional] 
**IncludedNames** |  Pointer to **[]String** | Object names to be included in an import or export. | [optional] 

## Examples

- Prepare the resource
```powershell
$ObjectExportImportOptions = Initialize-PSSailpoint.V2024ObjectExportImportOptions  -IncludedIds null `
 -IncludedNames null
```

- Convert the resource to JSON
```powershell
$ObjectExportImportOptions | ConvertTo-JSON
```


[[Back to top]](#) 

