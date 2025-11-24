---
id: v2025-create-schedule-request
title: CreateScheduleRequest
pagination_label: CreateScheduleRequest
sidebar_label: CreateScheduleRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CreateScheduleRequest', 'V2025CreateScheduleRequest'] 
slug: /tools/sdk/powershell/v2025/models/create-schedule-request
tags: ['SDK', 'Software Development Kit', 'CreateScheduleRequest', 'V2025CreateScheduleRequest']
---


# CreateScheduleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TaskTypeName** | **String** | The type or category of the scheduled task. | [optional] 
**ScheduleType** | **String** | The scheduling type, such as ""Daily"", ""Weekly"" etc. | [optional] 
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
$CreateScheduleRequest = Initialize-V2025CreateScheduleRequest  -TaskTypeName DataSync `
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
$CreateScheduleRequest | ConvertTo-JSON
```


[[Back to top]](#) 

