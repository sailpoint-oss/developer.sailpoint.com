---
id: schedule-months
title: ScheduleMonths
pagination_label: ScheduleMonths
sidebar_label: ScheduleMonths
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ScheduleMonths'] 
slug: /tools/sdk/powershell/beta/models/schedule-months
tags: ['SDK', 'Software Development Kit', 'ScheduleMonths']
---


# ScheduleMonths

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |   **Enum** [  "LIST",    "RANGE" ] | Enum type to specify months value | 
**Values** |  **[]String** | Values of the months based on the enum type mentioned above | 
**Interval** |  Pointer to **Int64** | Interval between the cert generations | [optional] 

## Examples

- Prepare the resource
```powershell
$ScheduleMonths = Initialize-BetaScheduleMonths  -Type LIST `
 -Values [1] `
 -Interval 2
```

- Convert the resource to JSON
```powershell
$ScheduleMonths | ConvertTo-JSON
```


[[Back to top]](#) 

