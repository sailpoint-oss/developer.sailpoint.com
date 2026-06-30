---
id: schedule2-hours
title: Schedule2Hours
pagination_label: Schedule2Hours
sidebar_label: Schedule2Hours
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Schedule2Hours', 'Schedule2Hours'] 
slug: /tools/sdk/powershell/certificationcampaigns/models/schedule2-hours
tags: ['SDK', 'Software Development Kit', 'Schedule2Hours', 'Schedule2Hours']
---


# Schedule2Hours

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "LIST",    "RANGE" ] | Enum type to specify hours value | [required]
**Values** | **[]String** | Values of the days based on the enum type mentioned above | [required]
**Interval** | **Int64** | Interval between the cert generations | [optional] 

## Examples

- Prepare the resource
```powershell
$Schedule2Hours = Initialize-Schedule2Hours  -Type LIST `
 -Values ["1"] `
 -Interval 2
```

- Convert the resource to JSON
```powershell
$Schedule2Hours | ConvertTo-JSON
```


[[Back to top]](#) 

