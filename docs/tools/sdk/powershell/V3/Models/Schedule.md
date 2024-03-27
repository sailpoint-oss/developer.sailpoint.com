---
id: schedule
title: Schedule
pagination_label: Schedule
sidebar_label: Schedule
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'Schedule'] 
slug: /tools/sdk/powershell/v3/models/schedule
tags: ['SDK', 'Software Development Kit', 'Schedule']
---


# Schedule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |   **Enum** [  "WEEKLY",    "MONTHLY",    "ANNUALLY",    "CALENDAR" ] | Determines the overall schedule cadence. In general, all time period fields smaller than the chosen type can be configured. For example, a DAILY schedule can have &#39;hours&#39; set, but not &#39;days&#39;; a WEEKLY schedule can have both &#39;hours&#39; and &#39;days&#39; set. | 
**Months** |  Pointer to [**ScheduleMonths**](schedule-months) |  | [optional] 
**Days** |  Pointer to [**ScheduleDays**](schedule-days) |  | [optional] 
**Hours** |  [**ScheduleHours**](schedule-hours) |  | 
**Expiration** |  Pointer to **System.DateTime** | Specifies the time after which this schedule will no longer occur. | [optional] 
**TimeZoneId** |  Pointer to **String** | The time zone to use when running the schedule. For instance, if the schedule is scheduled to run at 1AM, and this field is set to &quot;&quot;CST&quot;&quot;, the schedule will run at 1AM CST. | [optional] 

## Examples

- Prepare the resource
```powershell
$Schedule = Initialize-PSSailpointSchedule  -Type WEEKLY `
 -Months null `
 -Days null `
 -Hours null `
 -Expiration null `
 -TimeZoneId CST
```

- Convert the resource to JSON
```powershell
$Schedule | ConvertTo-JSON
```


[[Back to top]](#) 

