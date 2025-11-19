---
id: beta-scheduled-attributes
title: ScheduledAttributes
pagination_label: ScheduledAttributes
sidebar_label: ScheduledAttributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ScheduledAttributes', 'BetaScheduledAttributes'] 
slug: /tools/sdk/powershell/beta/models/scheduled-attributes
tags: ['SDK', 'Software Development Kit', 'ScheduledAttributes', 'BetaScheduledAttributes']
---


# ScheduledAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Frequency** |  **Enum** [  "daily",    "weekly",    "monthly",    "yearly",    "cronSchedule" ] | Frequency of execution | [required]
**TimeZone** | **String** | Time zone identifier | [optional] 
**CronString** | **String** | A valid CRON expression | [optional] 
**WeeklyDays** | **[]String** | Scheduled days of the week for execution | [optional] 
**WeeklyTimes** | **[]String** | Scheduled execution times | [optional] 
**YearlyTimes** | **[]String** | Scheduled execution times | [optional] 

## Examples

- Prepare the resource
```powershell
$ScheduledAttributes = Initialize-BetaScheduledAttributes  -Frequency daily `
 -TimeZone America/Chicago `
 -CronString 0 9 * * 1 `
 -WeeklyDays Monday `
 -WeeklyTimes Monday `
 -YearlyTimes 1969-12-31T09:00:00.000Z
```

- Convert the resource to JSON
```powershell
$ScheduledAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

