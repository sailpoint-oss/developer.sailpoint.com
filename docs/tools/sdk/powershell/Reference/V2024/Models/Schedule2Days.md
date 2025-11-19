---
id: v2024-schedule2-days
title: Schedule2Days
pagination_label: Schedule2Days
sidebar_label: Schedule2Days
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Schedule2Days', 'V2024Schedule2Days'] 
slug: /tools/sdk/powershell/v2024/models/schedule2-days
tags: ['SDK', 'Software Development Kit', 'Schedule2Days', 'V2024Schedule2Days']
---


# Schedule2Days

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApplicationId** | **String** | The application id | [optional] 
**AccountMatchConfig** | [**SelectorAccountMatchConfig**](selector-account-match-config) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Schedule2Days = Initialize-V2024Schedule2Days  -ApplicationId 2c91808874ff91550175097daaec161c" `
 -AccountMatchConfig null
```

- Convert the resource to JSON
```powershell
$Schedule2Days | ConvertTo-JSON
```


[[Back to top]](#) 

