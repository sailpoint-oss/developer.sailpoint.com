---
id: summaryresponse
title: Summaryresponse
pagination_label: Summaryresponse
sidebar_label: Summaryresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Summaryresponse', 'Summaryresponse'] 
slug: /tools/sdk/powershell/apiusage/models/summaryresponse
tags: ['SDK', 'Software Development Kit', 'Summaryresponse', 'Summaryresponse']
---


# Summaryresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestedUri** | **String** | The endpoint of a SailPoint API | [optional] 
**NumberOfCalls** | **Int64** | Number of calls made to a specific SailPoint API | [optional] 

## Examples

- Prepare the resource
```powershell
$Summaryresponse = Initialize-Summaryresponse  -RequestedUri /v2024/auth-org/session-config `
 -NumberOfCalls 10
```

- Convert the resource to JSON
```powershell
$Summaryresponse | ConvertTo-JSON
```


[[Back to top]](#) 

