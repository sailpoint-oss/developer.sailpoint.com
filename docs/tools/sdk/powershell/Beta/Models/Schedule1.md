---
id: schedule1
title: Schedule1
pagination_label: Schedule1
sidebar_label: Schedule1
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'Schedule1'] 
slug: /tools/sdk/powershell/beta/models/schedule1
tags: ['SDK', 'Software Development Kit', 'Schedule1']
---


# Schedule1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  [**ScheduleType**](schedule-type) |  | 
**Months** |  Pointer to [**Schedule1Months**](schedule1-months) |  | [optional] 
**Days** |  Pointer to [**Schedule1Days**](schedule1-days) |  | [optional] 
**Hours** |  [**Schedule1Hours**](schedule1-hours) |  | 
**Expiration** |  Pointer to **System.DateTime** | A date-time in ISO-8601 format | [optional] 
**TimeZoneId** |  Pointer to **String** | The canonical TZ identifier the schedule will run in (ex. America/New_York).  If no timezone is specified, the org&#39;s default timezone is used. | [optional] 

## Examples

- Prepare the resource
```powershell
$Schedule1 = Initialize-BetaSchedule1  -Type null `
 -Months null `
 -Days null `
 -Hours null `
 -Expiration 2018-06-25T20:22:28.104Z `
 -TimeZoneId America/Chicago
```

- Convert the resource to JSON
```powershell
$Schedule1 | ConvertTo-JSON
```


[[Back to top]](#) 

