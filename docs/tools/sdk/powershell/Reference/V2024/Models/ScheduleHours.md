---
id: v2024-schedule-hours
title: ScheduleHours
pagination_label: ScheduleHours
sidebar_label: ScheduleHours
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ScheduleHours', 'V2024ScheduleHours'] 
slug: /tools/sdk/powershell/v2024/models/schedule-hours
tags: ['SDK', 'Software Development Kit', 'ScheduleHours', 'V2024ScheduleHours']
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
$ScheduleHours = Initialize-V2024ScheduleHours  -Type LIST `
 -Values [1] `
 -Interval 2
```

- Convert the resource to JSON
```powershell
$ScheduleHours | ConvertTo-JSON
```


[[Back to top]](#) 

