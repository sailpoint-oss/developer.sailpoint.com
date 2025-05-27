---
id: v2024-sod-report-result-dto
title: SodReportResultDto
pagination_label: SodReportResultDto
sidebar_label: SodReportResultDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SodReportResultDto', 'V2024SodReportResultDto'] 
slug: /tools/sdk/powershell/v2024/models/sod-report-result-dto
tags: ['SDK', 'Software Development Kit', 'SodReportResultDto', 'V2024SodReportResultDto']
---


# SodReportResultDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "REPORT_RESULT" ] | SOD policy violation report result DTO type. | [optional] 
**Id** | **String** | SOD policy violation report result ID. | [optional] 
**Name** | **String** | Human-readable name of the SOD policy violation report result. | [optional] 

## Examples

- Prepare the resource
```powershell
$SodReportResultDto = Initialize-V2024SodReportResultDto  -Type REPORT_RESULT `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name SOD Policy 1 Violation
```

- Convert the resource to JSON
```powershell
$SodReportResultDto | ConvertTo-JSON
```


[[Back to top]](#) 

