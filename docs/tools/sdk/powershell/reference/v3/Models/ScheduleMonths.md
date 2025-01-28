---
id: schedule-months
title: ScheduleMonths
pagination_label: ScheduleMonths
sidebar_label: ScheduleMonths
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ScheduleMonths', 'ScheduleMonths'] 
slug: /tools/sdk/powershell/v3/models/schedule-months
tags: ['SDK', 'Software Development Kit', 'ScheduleMonths', 'ScheduleMonths']
---


# ScheduleMonths

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |   **Enum** [  "LIST",    "RANGE" ] | Enum type to specify months value | [required]
**Values** |  **[]String** | Values of the months based on the enum type mentioned above | [required]
**Interval** |  Pointer to **Int64** | Interval between the cert generations | [optional] 

## Examples

- Prepare the resource
```powershell
$ScheduleMonths = Initialize-PSSailpoint.V3ScheduleMonths  -Type LIST `
 -Values [1] `
 -Interval 2
```

- Convert the resource to JSON
```powershell
$ScheduleMonths | ConvertTo-JSON
```


[[Back to top]](#) 

