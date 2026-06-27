---
id: schedule2
title: Schedule2
pagination_label: Schedule2
sidebar_label: Schedule2
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Schedule2', 'Schedule2'] 
slug: /tools/sdk/powershell/certificationcampaigns/models/schedule2
tags: ['SDK', 'Software Development Kit', 'Schedule2', 'Schedule2']
---


# Schedule2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "WEEKLY",    "MONTHLY",    "ANNUALLY",    "CALENDAR" ] | Determines the overall schedule cadence. In general, all time period fields smaller than the chosen type can be configured. For example, a DAILY schedule can have 'hours' set, but not 'days'; a WEEKLY schedule can have both 'hours' and 'days' set. | [required]
**Months** | [**Schedule2Months**](schedule2-months) |  | [optional] 
**Days** | [**Schedule2Days**](schedule2-days) |  | [optional] 
**Hours** | [**Schedule2Hours**](schedule2-hours) |  | [required]
**Expiration** | **System.DateTime** | Specifies the time after which this schedule will no longer occur. | [optional] 
**TimeZoneId** | **String** | The time zone to use when running the schedule. For instance, if the schedule is scheduled to run at 1AM, and this field is set to ""CST"", the schedule will run at 1AM CST. | [optional] 

## Examples

- Prepare the resource
```powershell
$Schedule2 = Initialize-Schedule2  -Type WEEKLY `
 -Months null `
 -Days null `
 -Hours null `
 -Expiration null `
 -TimeZoneId CST
```

- Convert the resource to JSON
```powershell
$Schedule2 | ConvertTo-JSON
```


[[Back to top]](#) 

