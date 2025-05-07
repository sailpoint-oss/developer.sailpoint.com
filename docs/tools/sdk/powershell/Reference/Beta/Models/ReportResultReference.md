---
id: beta-report-result-reference
title: ReportResultReference
pagination_label: ReportResultReference
sidebar_label: ReportResultReference
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ReportResultReference', 'BetaReportResultReference'] 
slug: /tools/sdk/powershell/beta/models/report-result-reference
tags: ['SDK', 'Software Development Kit', 'ReportResultReference', 'BetaReportResultReference']
---


# ReportResultReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "REPORT_RESULT" ] | SOD policy violation report result DTO type. | [optional] 
**Id** | **String** | SOD policy violation report result ID. | [optional] 
**Name** | **String** | Human-readable name of the SOD policy violation report result. | [optional] 
**Status** |  **Enum** [  "SUCCESS",    "WARNING",    "ERROR",    "TERMINATED",    "TEMP_ERROR",    "PENDING" ] | Status of a SOD policy violation report. | [optional] 

## Examples

- Prepare the resource
```powershell
$ReportResultReference = Initialize-BetaReportResultReference  -Type REPORT_RESULT `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name SOD Policy 1 Violation `
 -Status PENDING
```

- Convert the resource to JSON
```powershell
$ReportResultReference | ConvertTo-JSON
```


[[Back to top]](#) 

