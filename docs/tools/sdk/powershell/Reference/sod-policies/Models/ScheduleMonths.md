---
id: schedule-months
title: ScheduleMonths
pagination_label: ScheduleMonths
sidebar_label: ScheduleMonths
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ScheduleMonths', 'ScheduleMonths'] 
slug: /tools/sdk/powershell/sodpolicies/models/schedule-months
tags: ['SDK', 'Software Development Kit', 'ScheduleMonths', 'ScheduleMonths']
---


# ScheduleMonths

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**Selectortype**](selectortype) |  | [required]
**Values** | **[]String** | The selected values.  | [required]
**Interval** | **Int32** | The selected interval for RANGE selectors.  | [optional] 

## Examples

- Prepare the resource
```powershell
$ScheduleMonths = Initialize-ScheduleMonths  -Type null `
 -Values [MON, WED] `
 -Interval 3
```

- Convert the resource to JSON
```powershell
$ScheduleMonths | ConvertTo-JSON
```


[[Back to top]](#) 

