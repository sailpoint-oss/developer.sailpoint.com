---
id: schedule1-months
title: Schedule1Months
pagination_label: Schedule1Months
sidebar_label: Schedule1Months
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Schedule1Months'] 
slug: /tools/sdk/powershell/beta/models/schedule1-months
tags: ['SDK', 'Software Development Kit', 'Schedule1Months']
---


# Schedule1Months

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApplicationId** |  Pointer to **String** | The application id | [optional] 
**AccountMatchConfig** |  Pointer to [**SelectorAccountMatchConfig**](selector-account-match-config) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Schedule1Months = Initialize-PSSailpoint.BetaSchedule1Months  -ApplicationId 2c91808874ff91550175097daaec161c&quot; `
 -AccountMatchConfig null
```

- Convert the resource to JSON
```powershell
$Schedule1Months | ConvertTo-JSON
```


[[Back to top]](#) 

