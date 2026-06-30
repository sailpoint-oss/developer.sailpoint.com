---
id: schedule-hours
title: ScheduleHours
pagination_label: ScheduleHours
sidebar_label: ScheduleHours
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ScheduleHours', 'ScheduleHours'] 
slug: /tools/sdk/powershell/scheduledsearch/models/schedule-hours
tags: ['SDK', 'Software Development Kit', 'ScheduleHours', 'ScheduleHours']
---


# ScheduleHours

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**Selectortype**](selectortype) |  | [required]
**Values** | **[]String** | The selected values.  | [required]
**Interval** | **Int32** | The selected interval for RANGE selectors.  | [optional] 

## Examples

- Prepare the resource
```powershell
$ScheduleHours = Initialize-ScheduleHours  -Type null `
 -Values [MON, WED] `
 -Interval 3
```

- Convert the resource to JSON
```powershell
$ScheduleHours | ConvertTo-JSON
```


[[Back to top]](#) 

