---
id: schedule1-days
title: Schedule1Days
pagination_label: Schedule1Days
sidebar_label: Schedule1Days
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Schedule1Days'] 
slug: /tools/sdk/powershell/beta/models/schedule1-days
tags: ['SDK', 'Software Development Kit', 'Schedule1Days']
---


# Schedule1Days

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApplicationId** |  Pointer to **String** | The application id | [optional] 
**AccountMatchConfig** |  Pointer to [**SelectorAccountMatchConfig**](selector-account-match-config) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Schedule1Days = Initialize-PSSailpoint.BetaSchedule1Days  -ApplicationId 2c91808874ff91550175097daaec161c&quot; `
 -AccountMatchConfig null
```

- Convert the resource to JSON
```powershell
$Schedule1Days | ConvertTo-JSON
```


[[Back to top]](#) 

