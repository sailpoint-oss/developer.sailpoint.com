---
id: v2024-schedule2-months
title: Schedule2Months
pagination_label: Schedule2Months
sidebar_label: Schedule2Months
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Schedule2Months', 'V2024Schedule2Months'] 
slug: /tools/sdk/powershell/v2024/models/schedule2-months
tags: ['SDK', 'Software Development Kit', 'Schedule2Months', 'V2024Schedule2Months']
---


# Schedule2Months

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApplicationId** | **String** | The application id | [optional] 
**AccountMatchConfig** | [**SelectorAccountMatchConfig**](selector-account-match-config) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Schedule2Months = Initialize-V2024Schedule2Months  -ApplicationId 2c91808874ff91550175097daaec161c" `
 -AccountMatchConfig null
```

- Convert the resource to JSON
```powershell
$Schedule2Months | ConvertTo-JSON
```


[[Back to top]](#) 

