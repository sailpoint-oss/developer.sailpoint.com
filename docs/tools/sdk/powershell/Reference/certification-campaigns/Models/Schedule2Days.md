---
id: schedule2-days
title: Schedule2Days
pagination_label: Schedule2Days
sidebar_label: Schedule2Days
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Schedule2Days', 'Schedule2Days'] 
slug: /tools/sdk/powershell/certificationcampaigns/models/schedule2-days
tags: ['SDK', 'Software Development Kit', 'Schedule2Days', 'Schedule2Days']
---


# Schedule2Days

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "LIST",    "RANGE" ] | Enum type to specify days value | [required]
**Values** | **[]String** | Values of the days based on the enum type mentioned above | [required]
**Interval** | **Int64** | Interval between the cert generations | [optional] 

## Examples

- Prepare the resource
```powershell
$Schedule2Days = Initialize-Schedule2Days  -Type LIST `
 -Values ["1"] `
 -Interval 2
```

- Convert the resource to JSON
```powershell
$Schedule2Days | ConvertTo-JSON
```


[[Back to top]](#) 

