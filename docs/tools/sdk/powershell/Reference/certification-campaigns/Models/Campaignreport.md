---
id: campaignreport
title: Campaignreport
pagination_label: Campaignreport
sidebar_label: Campaignreport
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Campaignreport', 'Campaignreport'] 
slug: /tools/sdk/powershell/certificationcampaigns/models/campaignreport
tags: ['SDK', 'Software Development Kit', 'Campaignreport', 'Campaignreport']
---


# Campaignreport

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "REPORT_RESULT" ] | SOD policy violation report result DTO type. | [optional] 
**Id** | **String** | SOD policy violation report result ID. | [optional] 
**Name** | **String** | Human-readable name of the SOD policy violation report result. | [optional] 
**Status** |  **Enum** [  "SUCCESS",    "WARNING",    "ERROR",    "TERMINATED",    "TEMP_ERROR",    "PENDING" ] | Status of a SOD policy violation report. | [optional] 
**ReportType** | [**Reporttype**](reporttype) |  | [required]
**LastRunAt** | **System.DateTime** | The most recent date and time this report was run | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$Campaignreport = Initialize-Campaignreport  -Type REPORT_RESULT `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name SOD Policy 1 Violation `
 -Status PENDING `
 -ReportType null `
 -LastRunAt null
```

- Convert the resource to JSON
```powershell
$Campaignreport | ConvertTo-JSON
```


[[Back to top]](#) 

