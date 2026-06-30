---
id: get-report-result-v1429-response
title: GetReportResultV1429Response
pagination_label: GetReportResultV1429Response
sidebar_label: GetReportResultV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetReportResultV1429Response', 'GetReportResultV1429Response'] 
slug: /tools/sdk/powershell/reportsdataextraction/models/get-report-result-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetReportResultV1429Response', 'GetReportResultV1429Response']
---


# GetReportResultV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetReportResultV1429Response = Initialize-GetReportResultV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetReportResultV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

