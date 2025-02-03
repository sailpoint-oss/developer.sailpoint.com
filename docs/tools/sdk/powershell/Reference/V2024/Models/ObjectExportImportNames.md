---
id: v2024-object-export-import-names
title: ObjectExportImportNames
pagination_label: ObjectExportImportNames
sidebar_label: ObjectExportImportNames
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ObjectExportImportNames', 'V2024ObjectExportImportNames'] 
slug: /tools/sdk/powershell/v2024/models/object-export-import-names
tags: ['SDK', 'Software Development Kit', 'ObjectExportImportNames', 'V2024ObjectExportImportNames']
---


# ObjectExportImportNames

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IncludedNames** | **[]String** | Object names to be included in a backup. | [optional] 

## Examples

- Prepare the resource
```powershell
$ObjectExportImportNames = Initialize-PSSailpoint.V2024ObjectExportImportNames  -IncludedNames null
```

- Convert the resource to JSON
```powershell
$ObjectExportImportNames | ConvertTo-JSON
```


[[Back to top]](#) 

