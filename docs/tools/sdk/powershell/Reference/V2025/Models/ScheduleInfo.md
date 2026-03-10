---
id: v2025-schedule-info
title: ScheduleInfo
pagination_label: ScheduleInfo
sidebar_label: ScheduleInfo
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ScheduleInfo', 'V2025ScheduleInfo'] 
slug: /tools/sdk/powershell/v2025/models/schedule-info
tags: ['SDK', 'Software Development Kit', 'ScheduleInfo', 'V2025ScheduleInfo']
---


# ScheduleInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ScheduleTaskId** | **Int64** | The unique identifier for the scheduled task. | [optional] 
**ScheduleTaskName** | **String** | The display name of the scheduled task. | [optional] 
**TaskTypeName** | **String** | The type or category of the scheduled task. | [optional] 
**Interval** | **Int32** | The interval depends on the chosen schedule cycle (scheduleType), i.e. if the schedule is daily, the interval will represent the days between executions. | [optional] 
**ScheduleType** | **String** | The scheduling type, such as ""Daily"", ""Weekly"", or ""Manual"" etc. | [optional] 
**Active** | **Boolean** | Indicates whether the scheduled task is currently active. | [optional] [default to $false]
**StartTime** | **Int64** | The start time for the scheduled task, represented as epoch seconds. | [optional] 
**EndTime** | **Int64** | The end time for the scheduled task, represented as epoch seconds. | [optional] 
**DaysOfWeek** | **[]String** | A list of days of the week when the task should run (e.g., ""Monday"", ""Wednesday""). | [optional] 
**RunAfterScheduleTaskId** | **Int64** | The ID of another scheduled task that triggers this scheduled task upon its completion. | [optional] 
**RunAfterScheduleTaskName** | **String** | The name of the scheduled task that must complete before this task runs. | [optional] 
**ApplicationId** | **Int64** | The unique identifier of the application associated with the scheduled task. | [optional] 
**CreatedByDisplayName** | **String** | The display name of the user who created the scheduled task. | [optional] 
**NextRun** | **Int64** | The next scheduled run time for the task, represented as epoch seconds. | [optional] 
**LastRun** | **Int64** | The last run time of the task, represented as epoch seconds. | [optional] 

## Examples

- Prepare the resource
```powershell
$ScheduleInfo = Initialize-V2025ScheduleInfo  -ScheduleTaskId 1001 `
 -ScheduleTaskName Daily Data Sync `
 -TaskTypeName DataSync `
 -Interval 1440 `
 -ScheduleType Daily `
 -Active true `
 -StartTime 1762237200 `
 -EndTime 1762240800 `
 -DaysOfWeek [Monday, Wednesday, Friday] `
 -RunAfterScheduleTaskId 1000 `
 -RunAfterScheduleTaskName Pre-Sync Task `
 -ApplicationId 2001 `
 -CreatedByDisplayName Jane Doe `
 -NextRun 1762323600 `
 -LastRun 1762237200
```

- Convert the resource to JSON
```powershell
$ScheduleInfo | ConvertTo-JSON
```


[[Back to top]](#) 

