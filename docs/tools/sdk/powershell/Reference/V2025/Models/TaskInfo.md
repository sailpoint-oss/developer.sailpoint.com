---
id: v2025-task-info
title: TaskInfo
pagination_label: TaskInfo
sidebar_label: TaskInfo
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TaskInfo', 'V2025TaskInfo'] 
slug: /tools/sdk/powershell/v2025/models/task-info
tags: ['SDK', 'Software Development Kit', 'TaskInfo', 'V2025TaskInfo']
---


# TaskInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TaskId** | **Int64** | The unique identifier for the task. | [optional] 
**TaskTypeName** | **String** | The type or category of the task. | [optional] 
**StartTime** | **Int64** | The start time of the task, represented as epoch seconds. | [optional] 
**EndTime** | **Int64** | The end time of the task, represented as epoch seconds. | [optional] 
**TaskName** | **String** | The display name of the task. | [optional] 
**CreatedByDisplayName** | **String** | The display name of the user who created the task. | [optional] 
**Progress** | **Int32** | The progress of the task, typically represented as a percentage (0-100). | [optional] 
**Status** | **String** | The current status of the task (e.g., ""Running"", ""Completed"", ""Failed""). | [optional] 
**Details** | **String** | Additional details or information about the task. | [optional] 
**ScheduleTaskId** | **Int64** | The unique identifier of the associated scheduled task, if applicable. | [optional] 

## Examples

- Prepare the resource
```powershell
$TaskInfo = Initialize-V2025TaskInfo  -TaskId 1001 `
 -TaskTypeName DataSync `
 -StartTime 1762237200 `
 -EndTime 1762240800 `
 -TaskName Daily Data Sync `
 -CreatedByDisplayName Jane Doe `
 -Progress 75 `
 -Status Running `
 -Details Task is processing files in the Finance folder. `
 -ScheduleTaskId 2001
```

- Convert the resource to JSON
```powershell
$TaskInfo | ConvertTo-JSON
```


[[Back to top]](#) 

