---
id: sod-report-result-dto
title: SodReportResultDto
pagination_label: SodReportResultDto
sidebar_label: SodReportResultDto
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'SodReportResultDto'] 
slug: /tools/sdk/powershell/v3/models/sod-report-result-dto
tags: ['SDK', 'Software Development Kit', 'SodReportResultDto']
---


# SodReportResultDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "REPORT_RESULT" ] | SOD policy violation report result DTO type. | [optional] 
**Id** |  Pointer to **String** | SOD policy violation report result ID. | [optional] 
**Name** |  Pointer to **String** | Human-readable name of the SOD policy violation report result. | [optional] 

## Examples

- Prepare the resource
```powershell
$SodReportResultDto = Initialize-PSSailpointSodReportResultDto  -Type REPORT_RESULT `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name SOD Policy 1 Violation
```

- Convert the resource to JSON
```powershell
$SodReportResultDto | ConvertTo-JSON
```


[[Back to top]](#) 

