---
id: beta-sp-config-export-results
title: SpConfigExportResults
pagination_label: SpConfigExportResults
sidebar_label: SpConfigExportResults
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SpConfigExportResults', 'BetaSpConfigExportResults'] 
slug: /tools/sdk/powershell/beta/models/sp-config-export-results
tags: ['SDK', 'Software Development Kit', 'SpConfigExportResults', 'BetaSpConfigExportResults']
---


# SpConfigExportResults

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | **Int32** | Current version of the export results object. | [optional] 
**Timestamp** | **System.DateTime** | Time the export was completed. | [optional] 
**Tenant** | **String** | Name of the tenant where this export originated. | [optional] 
**Description** | **String** | Optional user defined description/name for export job. | [optional] 
**Options** | [**ExportOptions**](export-options) |  | [optional] 
**Objects** | [**[]ConfigObject**](config-object) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SpConfigExportResults = Initialize-BetaSpConfigExportResults  -Version 1 `
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

