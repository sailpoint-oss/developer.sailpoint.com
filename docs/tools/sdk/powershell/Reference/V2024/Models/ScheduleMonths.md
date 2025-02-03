---
id: v2024-schedule-months
title: ScheduleMonths
pagination_label: ScheduleMonths
sidebar_label: ScheduleMonths
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ScheduleMonths', 'V2024ScheduleMonths'] 
slug: /tools/sdk/powershell/v2024/models/schedule-months
tags: ['SDK', 'Software Development Kit', 'ScheduleMonths', 'V2024ScheduleMonths']
---


# ScheduleMonths

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "LIST",    "RANGE" ] | Enum type to specify months value | [required]
**Values** | **[]String** | Values of the months based on the enum type mentioned above | [required]
**Interval** | **Int64** | Interval between the cert generations | [optional] 

## Examples

- Prepare the resource
```powershell
$ScheduleMonths = Initialize-PSSailpoint.V2024ScheduleMonths  -Type LIST `
 -Values [1] `
 -Interval 2
```

- Convert the resource to JSON
```powershell
$ScheduleMonths | ConvertTo-JSON
```


[[Back to top]](#) 

