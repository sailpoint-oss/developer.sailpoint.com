---
id: reportresultreference
title: Reportresultreference
pagination_label: Reportresultreference
sidebar_label: Reportresultreference
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Reportresultreference', 'Reportresultreference'] 
slug: /tools/sdk/powershell/certificationcampaigns/models/reportresultreference
tags: ['SDK', 'Software Development Kit', 'Reportresultreference', 'Reportresultreference']
---


# Reportresultreference

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
$Reportresultreference = Initialize-Reportresultreference  -Type REPORT_RESULT `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name SOD Policy 1 Violation `
 -Status PENDING
```

- Convert the resource to JSON
```powershell
$Reportresultreference | ConvertTo-JSON
```


[[Back to top]](#) 

