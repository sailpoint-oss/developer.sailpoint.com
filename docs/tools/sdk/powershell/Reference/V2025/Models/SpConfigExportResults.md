---
id: v2025-sp-config-export-results
title: SpConfigExportResults
pagination_label: SpConfigExportResults
sidebar_label: SpConfigExportResults
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SpConfigExportResults', 'V2025SpConfigExportResults'] 
slug: /tools/sdk/powershell/v2025/models/sp-config-export-results
tags: ['SDK', 'Software Development Kit', 'SpConfigExportResults', 'V2025SpConfigExportResults']
---


# SpConfigExportResults

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | **Int32** | Current version of the export results object. | [optional] 
**Timestamp** | **System.DateTime** | Time the export was completed. | [optional] 
**Tenant** | **String** | Name of the tenant where this export originated. | [optional] 
**Description** | **String** | Optional user defined description/name for export job. | [optional] 
**Options** | [**ExportOptions1**](export-options1) |  | [optional] 
**Objects** | [**[]ConfigObject**](config-object) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SpConfigExportResults = Initialize-V2025SpConfigExportResults  -Version 1 `
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

