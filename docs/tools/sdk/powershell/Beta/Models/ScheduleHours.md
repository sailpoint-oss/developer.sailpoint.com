---
id: schedule-hours
title: ScheduleHours
pagination_label: ScheduleHours
sidebar_label: ScheduleHours
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ScheduleHours'] 
slug: /tools/sdk/powershell/beta/models/schedule-hours
tags: ['SDK', 'Software Development Kit', 'ScheduleHours']
---


# ScheduleHours

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |   **Enum** [  "LIST",    "RANGE" ] | Enum type to specify hours value | 
**Values** |  **[]String** | Values of the days based on the enum type mentioned above | 
**Interval** |  Pointer to **Int64** | Interval between the cert generations | [optional] 

## Examples

- Prepare the resource
```powershell
$ScheduleHours = Initialize-BetaScheduleHours  -Type LIST `
 -Values [1] `
 -Interval 2
```

- Convert the resource to JSON
```powershell
$ScheduleHours | ConvertTo-JSON
```


[[Back to top]](#) 

