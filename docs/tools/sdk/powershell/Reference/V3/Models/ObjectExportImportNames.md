---
id: object-export-import-names
title: ObjectExportImportNames
pagination_label: ObjectExportImportNames
sidebar_label: ObjectExportImportNames
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ObjectExportImportNames', 'ObjectExportImportNames'] 
slug: /tools/sdk/powershell/v3/models/object-export-import-names
tags: ['SDK', 'Software Development Kit', 'ObjectExportImportNames', 'ObjectExportImportNames']
---


# ObjectExportImportNames

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IncludedNames** | **[]String** | Object names to be included in a backup. | [optional] 

## Examples

- Prepare the resource
```powershell
$ObjectExportImportNames = Initialize-PSSailpoint.V3ObjectExportImportNames  -IncludedNames null
```

- Convert the resource to JSON
```powershell
$ObjectExportImportNames | ConvertTo-JSON
```


[[Back to top]](#) 

