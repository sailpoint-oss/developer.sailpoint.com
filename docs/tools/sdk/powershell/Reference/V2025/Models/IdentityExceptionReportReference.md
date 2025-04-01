---
id: v2025-identity-exception-report-reference
title: IdentityExceptionReportReference
pagination_label: IdentityExceptionReportReference
sidebar_label: IdentityExceptionReportReference
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityExceptionReportReference', 'V2025IdentityExceptionReportReference'] 
slug: /tools/sdk/powershell/v2025/models/identity-exception-report-reference
tags: ['SDK', 'Software Development Kit', 'IdentityExceptionReportReference', 'V2025IdentityExceptionReportReference']
---


# IdentityExceptionReportReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TaskResultId** | **String** | Task result ID. | [optional] 
**ReportName** | **String** | Report name. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityExceptionReportReference = Initialize-PSSailpoint.V2025IdentityExceptionReportReference  -TaskResultId 2b838de9-db9b-abcf-e646-d4f274ad4238 `
 -ReportName My annual report
```

- Convert the resource to JSON
```powershell
$IdentityExceptionReportReference | ConvertTo-JSON
```


[[Back to top]](#) 

