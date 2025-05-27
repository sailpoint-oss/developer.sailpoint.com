---
id: v2025-schedule2
title: Schedule2
pagination_label: Schedule2
sidebar_label: Schedule2
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Schedule2', 'V2025Schedule2'] 
slug: /tools/sdk/powershell/v2025/models/schedule2
tags: ['SDK', 'Software Development Kit', 'Schedule2', 'V2025Schedule2']
---


# Schedule2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**ScheduleType**](schedule-type) |  | [required]
**Months** | [**Schedule2Months**](schedule2-months) |  | [optional] 
**Days** | [**Schedule2Days**](schedule2-days) |  | [optional] 
**Hours** | [**Schedule2Hours**](schedule2-hours) |  | [required]
**Expiration** | **System.DateTime** | A date-time in ISO-8601 format | [optional] 
**TimeZoneId** | **String** | The canonical TZ identifier the schedule will run in (ex. America/New_York).  If no timezone is specified, the org's default timezone is used. | [optional] 

## Examples

- Prepare the resource
```powershell
$Schedule2 = Initialize-V2025Schedule2  -Type null `
 -Months null `
 -Days null `
 -Hours null `
 -Expiration 2018-06-25T20:22:28.104Z `
 -TimeZoneId America/Chicago
```

- Convert the resource to JSON
```powershell
$Schedule2 | ConvertTo-JSON
```


[[Back to top]](#) 

