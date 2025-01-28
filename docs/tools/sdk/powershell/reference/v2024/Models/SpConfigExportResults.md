---
id: v2024-sp-config-export-results
title: SpConfigExportResults
pagination_label: SpConfigExportResults
sidebar_label: SpConfigExportResults
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SpConfigExportResults', 'V2024SpConfigExportResults'] 
slug: /tools/sdk/powershell/v2024/models/sp-config-export-results
tags: ['SDK', 'Software Development Kit', 'SpConfigExportResults', 'V2024SpConfigExportResults']
---


# SpConfigExportResults

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** |  Pointer to **Int32** | Current version of the export results object. | [optional] 
**Timestamp** |  Pointer to **System.DateTime** | Time the export was completed. | [optional] 
**Tenant** |  Pointer to **String** | Name of the tenant where this export originated. | [optional] 
**Description** |  Pointer to **String** | Optional user defined description/name for export job. | [optional] 
**Options** |  Pointer to [**ExportOptions**](export-options) |  | [optional] 
**Objects** |  Pointer to [**[]ConfigObject**](config-object) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SpConfigExportResults = Initialize-PSSailpoint.V2024SpConfigExportResults  -Version 1 `
 -Timestamp 2021-05-11T22:23:16Z `
 -Tenant sample-tenant `
 -Description Export Job 1 Test `
 -Options null `
 -Objects null
```

- Convert the resource to JSON
```powershell
$SpConfigExportResults | ConvertTo-JSON
```


[[Back to top]](#) 

