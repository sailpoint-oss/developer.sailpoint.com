---
id: beta-schedule-months
title: ScheduleMonths
pagination_label: ScheduleMonths
sidebar_label: ScheduleMonths
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ScheduleMonths', 'BetaScheduleMonths'] 
slug: /tools/sdk/powershell/beta/models/schedule-months
tags: ['SDK', 'Software Development Kit', 'ScheduleMonths', 'BetaScheduleMonths']
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
$ScheduleMonths = Initialize-PSSailpoint.BetaScheduleMonths  -Type LIST `
 -Values [1] `
 -Interval 2
```

- Convert the resource to JSON
```powershell
$ScheduleMonths | ConvertTo-JSON
```


[[Back to top]](#) 

