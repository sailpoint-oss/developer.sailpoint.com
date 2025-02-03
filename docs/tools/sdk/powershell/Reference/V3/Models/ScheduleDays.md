---
id: schedule-days
title: ScheduleDays
pagination_label: ScheduleDays
sidebar_label: ScheduleDays
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ScheduleDays', 'ScheduleDays'] 
slug: /tools/sdk/powershell/v3/models/schedule-days
tags: ['SDK', 'Software Development Kit', 'ScheduleDays', 'ScheduleDays']
---


# ScheduleDays

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "LIST",    "RANGE" ] | Enum type to specify days value | [required]
**Values** | **[]String** | Values of the days based on the enum type mentioned above | [required]
**Interval** | **Int64** | Interval between the cert generations | [optional] 

## Examples

- Prepare the resource
```powershell
$ScheduleDays = Initialize-PSSailpoint.V3ScheduleDays  -Type LIST `
 -Values [1] `
 -Interval 2
```

- Convert the resource to JSON
```powershell
$ScheduleDays | ConvertTo-JSON
```


[[Back to top]](#) 

