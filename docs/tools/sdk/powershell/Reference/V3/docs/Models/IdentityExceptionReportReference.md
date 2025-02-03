---
id: identity-exception-report-reference
title: IdentityExceptionReportReference
pagination_label: IdentityExceptionReportReference
sidebar_label: IdentityExceptionReportReference
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityExceptionReportReference', 'IdentityExceptionReportReference'] 
slug: /tools/sdk/powershell/v3/models/identity-exception-report-reference
tags: ['SDK', 'Software Development Kit', 'IdentityExceptionReportReference', 'IdentityExceptionReportReference']
---


# IdentityExceptionReportReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TaskResultId** |  Pointer to **String** | The id of the task result. | [optional] 
**ReportName** |  Pointer to **String** | The name of the report. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityExceptionReportReference = Initialize-PSSailpoint.V3IdentityExceptionReportReference  -TaskResultId 2b838de9-db9b-abcf-e646-d4f274ad4238 `
 -ReportName My annual report
```

- Convert the resource to JSON
```powershell
$IdentityExceptionReportReference | ConvertTo-JSON
```


[[Back to top]](#) 

