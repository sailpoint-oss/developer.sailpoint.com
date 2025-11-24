---
id: v2025-update-schedule-request
title: UpdateScheduleRequest
pagination_label: UpdateScheduleRequest
sidebar_label: UpdateScheduleRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'UpdateScheduleRequest', 'V2025UpdateScheduleRequest'] 
slug: /tools/sdk/powershell/v2025/models/update-schedule-request
tags: ['SDK', 'Software Development Kit', 'UpdateScheduleRequest', 'V2025UpdateScheduleRequest']
---


# UpdateScheduleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TaskTypeName** | **String** | The type or category of the scheduled task. | [optional] 
**ScheduleType** | **String** | The scheduling type, such as ""Daily"", ""Weekly"", or ""Manual"" etc. | [optional] 
**Interval** | **Int32** | The interval depends on the chosen schedule cycle (scheduleType), i.e. if the schedule is daily, the interval will represent the days between executions. | [optional] 
**ScheduleTaskName** | **String** | The display name of the scheduled task. | [optional] 
**StartTime** | **Int64** | The start time for the scheduled task, represented as epoch seconds. | [optional] 
**EndTime** | **Int64** | The end time for the scheduled task, represented as epoch seconds. | [optional] 
**DaysOfWeek** | **[]String** | A list of days of the week when the task should run (e.g., ""Monday"", ""Wednesday""). | [optional] 
**Active** | **Boolean** | Indicates whether the scheduled task is currently active. | [optional] [default to $false]
**RunAfterScheduleTaskId** | **Int64** | The ID of another scheduled task that triggers this scheduled task upon its completion. | [optional] 
**ApplicationId** | **Int64** | The unique identifier of the application associated with the scheduled task. | [optional] 

## Examples

- Prepare the resource
```powershell
$UpdateScheduleRequest = Initialize-V2025UpdateScheduleRequest  -TaskTypeName DataSync `
 -ScheduleType Daily `
 -Interval 1440 `
 -ScheduleTaskName Daily Data Sync `
 -StartTime 1762237200 `
 -EndTime 1762240800 `
 -DaysOfWeek [Monday, Wednesday, Friday] `
 -Active true `
 -RunAfterScheduleTaskId 1000 `
 -ApplicationId 2001
```

- Convert the resource to JSON
```powershell
$UpdateScheduleRequest | ConvertTo-JSON
```


[[Back to top]](#) 

