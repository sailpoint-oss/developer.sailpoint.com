---
id: v2025-summary-response
title: SummaryResponse
pagination_label: SummaryResponse
sidebar_label: SummaryResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SummaryResponse', 'V2025SummaryResponse'] 
slug: /tools/sdk/powershell/v2025/models/summary-response
tags: ['SDK', 'Software Development Kit', 'SummaryResponse', 'V2025SummaryResponse']
---


# SummaryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestedUri** | **String** | The endpoint of a SailPoint API | [optional] 
**NumberOfCalls** | **Int64** | Number of calls made to a specific SailPoint API | [optional] 

## Examples

- Prepare the resource
```powershell
$SummaryResponse = Initialize-V2025SummaryResponse  -RequestedUri /v2024/auth-org/session-config `
 -NumberOfCalls 10
```

- Convert the resource to JSON
```powershell
$SummaryResponse | ConvertTo-JSON
```


[[Back to top]](#) 

