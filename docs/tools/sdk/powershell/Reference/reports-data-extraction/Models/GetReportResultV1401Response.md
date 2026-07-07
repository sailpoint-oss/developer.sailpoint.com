---
id: get-report-result-v1401-response
title: GetReportResultV1401Response
pagination_label: GetReportResultV1401Response
sidebar_label: GetReportResultV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetReportResultV1401Response', 'GetReportResultV1401Response'] 
slug: /tools/sdk/powershell/reportsdataextraction/models/get-report-result-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetReportResultV1401Response', 'GetReportResultV1401Response']
---


# GetReportResultV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetReportResultV1401Response = Initialize-GetReportResultV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetReportResultV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

