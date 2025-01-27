---
id: scheduled-attributes
title: ScheduledAttributes
pagination_label: ScheduledAttributes
sidebar_label: ScheduledAttributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ScheduledAttributes'] 
slug: /tools/sdk/powershell/v2024/models/scheduled-attributes
tags: ['SDK', 'Software Development Kit', 'ScheduledAttributes']
---


# ScheduledAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CronString** |  Pointer to **String** | A valid CRON expression | [optional] 
**Frequency** |   **Enum** [  "daily",    "weekly",    "monthly",    "yearly",    "cronSchedule" ] | Frequency of execution | [required]
**TimeZone** |  Pointer to **String** | Time zone identifier | [optional] 
**WeeklyDays** |  Pointer to **[]String** | Scheduled days of the week for execution | [optional] 
**WeeklyTimes** |  Pointer to **[]String** | Scheduled execution times | [optional] 

## Examples

- Prepare the resource
```powershell
$ScheduledAttributes = Initialize-PSSailpoint.V2024ScheduledAttributes  -CronString 0 9 * * 1 `
 -Frequency null `
 -TimeZone America/Chicago `
 -WeeklyDays Monday `
 -WeeklyTimes Monday
```

- Convert the resource to JSON
```powershell
$ScheduledAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

