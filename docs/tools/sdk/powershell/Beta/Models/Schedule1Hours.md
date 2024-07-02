---
id: schedule1-hours
title: Schedule1Hours
pagination_label: Schedule1Hours
sidebar_label: Schedule1Hours
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'Schedule1Hours'] 
slug: /tools/sdk/powershell/beta/models/schedule1-hours
tags: ['SDK', 'Software Development Kit', 'Schedule1Hours']
---


# Schedule1Hours

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  [**SelectorType**](selector-type) |  | 
**Values** |  **[]String** | The selected values.  | 
**Interval** |  Pointer to **Int32** | The selected interval for RANGE selectors.  | [optional] 

## Examples

- Prepare the resource
```powershell
$Schedule1Hours = Initialize-BetaSchedule1Hours  -Type null `
 -Values [MON, WED] `
 -Interval 3
```

- Convert the resource to JSON
```powershell
$Schedule1Hours | ConvertTo-JSON
```


[[Back to top]](#) 

