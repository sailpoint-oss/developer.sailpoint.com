---
id: schedule1-days
title: Schedule1Days
pagination_label: Schedule1Days
sidebar_label: Schedule1Days
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Schedule1Days', 'Schedule1Days'] 
slug: /tools/sdk/powershell/v3/models/schedule1-days
tags: ['SDK', 'Software Development Kit', 'Schedule1Days', 'Schedule1Days']
---


# Schedule1Days

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**SelectorType**](selector-type) |  | [required]
**Values** | **[]String** | The selected values.  | [required]
**Interval** | **Int32** | The selected interval for RANGE selectors.  | [optional] 

## Examples

- Prepare the resource
```powershell
$Schedule1Days = Initialize-Schedule1Days  -Type null `
 -Values [MON, WED] `
 -Interval 3
```

- Convert the resource to JSON
```powershell
$Schedule1Days | ConvertTo-JSON
```


[[Back to top]](#) 

