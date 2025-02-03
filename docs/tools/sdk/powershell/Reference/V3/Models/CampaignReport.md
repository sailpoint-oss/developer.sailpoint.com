---
id: campaign-report
title: CampaignReport
pagination_label: CampaignReport
sidebar_label: CampaignReport
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaignReport', 'CampaignReport'] 
slug: /tools/sdk/powershell/v3/models/campaign-report
tags: ['SDK', 'Software Development Kit', 'CampaignReport', 'CampaignReport']
---


# CampaignReport

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "REPORT_RESULT" ] | SOD policy violation report result DTO type. | [optional] 
**Id** | **String** | SOD policy violation report result ID. | [optional] 
**Name** | **String** | Human-readable name of the SOD policy violation report result. | [optional] 
**Status** |  **Enum** [  "SUCCESS",    "WARNING",    "ERROR",    "TERMINATED",    "TEMP_ERROR",    "PENDING" ] | Status of a SOD policy violation report. | [optional] 
**ReportType** | [**ReportType**](report-type) |  | [required]
**LastRunAt** | **System.DateTime** | The most recent date and time this report was run | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$CampaignReport = Initialize-PSSailpoint.V3CampaignReport  -Type REPORT_RESULT `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name SOD Policy 1 Violation `
 -Status PENDING `
 -ReportType null `
 -LastRunAt null
```

- Convert the resource to JSON
```powershell
$CampaignReport | ConvertTo-JSON
```


[[Back to top]](#) 

