---
id: beta-schedule1-hours
title: Schedule1Hours
pagination_label: Schedule1Hours
sidebar_label: Schedule1Hours
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Schedule1Hours', 'BetaSchedule1Hours'] 
slug: /tools/sdk/powershell/beta/models/schedule1-hours
tags: ['SDK', 'Software Development Kit', 'Schedule1Hours', 'BetaSchedule1Hours']
---


# Schedule1Hours

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApplicationId** | **String** | The application id | [optional] 
**AccountMatchConfig** | [**SelectorAccountMatchConfig**](selector-account-match-config) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Schedule1Hours = Initialize-PSSailpoint.BetaSchedule1Hours  -ApplicationId 2c91808874ff91550175097daaec161c" `
 -AccountMatchConfig null
```

- Convert the resource to JSON
```powershell
$Schedule1Hours | ConvertTo-JSON
```


[[Back to top]](#) 

