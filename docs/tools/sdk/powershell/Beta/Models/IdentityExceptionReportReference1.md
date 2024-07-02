---
id: identity-exception-report-reference1
title: IdentityExceptionReportReference1
pagination_label: IdentityExceptionReportReference1
sidebar_label: IdentityExceptionReportReference1
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentityExceptionReportReference1'] 
slug: /tools/sdk/powershell/beta/models/identity-exception-report-reference1
tags: ['SDK', 'Software Development Kit', 'IdentityExceptionReportReference1']
---


# IdentityExceptionReportReference1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TaskResultId** |  Pointer to **String** | The id of the task result. | [optional] 
**ReportName** |  Pointer to **String** | The name of the report. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityExceptionReportReference1 = Initialize-BetaIdentityExceptionReportReference1  -TaskResultId 2b838de9-db9b-abcf-e646-d4f274ad4238 `
 -ReportName My annual report
```

- Convert the resource to JSON
```powershell
$IdentityExceptionReportReference1 | ConvertTo-JSON
```


[[Back to top]](#) 

