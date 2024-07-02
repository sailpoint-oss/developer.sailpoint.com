---
id: schedule1-months
title: Schedule1Months
pagination_label: Schedule1Months
sidebar_label: Schedule1Months
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'Schedule1Months'] 
slug: /tools/sdk/powershell/beta/models/schedule1-months
tags: ['SDK', 'Software Development Kit', 'Schedule1Months']
---


# Schedule1Months

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  [**SelectorType**](selector-type) |  | 
**Values** |  **[]String** | The selected values.  | 
**Interval** |  Pointer to **Int32** | The selected interval for RANGE selectors.  | [optional] 

## Examples

- Prepare the resource
```powershell
$Schedule1Months = Initialize-BetaSchedule1Months  -Type null `
 -Values [MON, WED] `
 -Interval 3
```

- Convert the resource to JSON
```powershell
$Schedule1Months | ConvertTo-JSON
```


[[Back to top]](#) 

