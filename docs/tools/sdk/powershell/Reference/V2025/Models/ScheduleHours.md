---
id: v2025-schedule-hours
title: ScheduleHours
pagination_label: ScheduleHours
sidebar_label: ScheduleHours
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ScheduleHours', 'V2025ScheduleHours'] 
slug: /tools/sdk/powershell/v2025/models/schedule-hours
tags: ['SDK', 'Software Development Kit', 'ScheduleHours', 'V2025ScheduleHours']
---


# ScheduleHours

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "LIST",    "RANGE" ] | Enum type to specify hours value | [required]
**Values** | **[]String** | Values of the days based on the enum type mentioned above | [required]
**Interval** | **Int64** | Interval between the cert generations | [optional] 

## Examples

- Prepare the resource
```powershell
$ScheduleHours = Initialize-V2025ScheduleHours  -Type LIST `
 -Values [1] `
 -Interval 2
```

- Convert the resource to JSON
```powershell
$ScheduleHours | ConvertTo-JSON
```


[[Back to top]](#) 

