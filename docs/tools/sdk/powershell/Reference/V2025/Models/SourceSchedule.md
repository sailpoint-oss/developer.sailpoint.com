---
id: v2025-source-schedule
title: SourceSchedule
pagination_label: SourceSchedule
sidebar_label: SourceSchedule
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceSchedule', 'V2025SourceSchedule'] 
slug: /tools/sdk/powershell/v2025/models/source-schedule
tags: ['SDK', 'Software Development Kit', 'SourceSchedule', 'V2025SourceSchedule']
---


# SourceSchedule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "ACCOUNT_AGGREGATION",    "GROUP_AGGREGATION" ] | The type of the Schedule. | [required]
**CronExpression** | **String** | The cron expression of the schedule. | [required]

## Examples

- Prepare the resource
```powershell
$SourceSchedule = Initialize-V2025SourceSchedule  -Type ACCOUNT_AGGREGATION `
 -CronExpression 0 0 5,13,21 * * ?
```

- Convert the resource to JSON
```powershell
$SourceSchedule | ConvertTo-JSON
```


[[Back to top]](#) 

