---
id: spconfigexportresults
title: Spconfigexportresults
pagination_label: Spconfigexportresults
sidebar_label: Spconfigexportresults
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Spconfigexportresults', 'Spconfigexportresults'] 
slug: /tools/sdk/powershell/spconfig/models/spconfigexportresults
tags: ['SDK', 'Software Development Kit', 'Spconfigexportresults', 'Spconfigexportresults']
---


# Spconfigexportresults

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | **Int32** | Current version of the export results object. | [optional] 
**Timestamp** | **System.DateTime** | Time the export was completed. | [optional] 
**Tenant** | **String** | Name of the tenant where this export originated. | [optional] 
**Description** | **String** | Optional user defined description/name for export job. | [optional] 
**Options** | [**Exportoptions**](exportoptions) |  | [optional] 
**Objects** | [**[]Configobject**](configobject) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Spconfigexportresults = Initialize-Spconfigexportresults  -Version 1 `
 -Timestamp 2021-05-11T22:23:16Z `
 -Tenant sample-tenant `
 -Description Export Job 1 Test `
 -Options null `
 -Objects null
```

- Convert the resource to JSON
```powershell
$Spconfigexportresults | ConvertTo-JSON
```


[[Back to top]](#) 

