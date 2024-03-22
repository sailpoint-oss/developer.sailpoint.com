---
id: schedule1-days
title: Schedule1Days
pagination_label: Schedule1Days
sidebar_label: Schedule1Days
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'Schedule1Days'] 
slug: /tools/sdk/powershell/beta/models/schedule1-days
tags: ['SDK', 'Software Development Kit', 'Schedule1Days']
---


# Schedule1Days

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  [**SelectorType**](selector-type) |  | 
**Values** |  **[]String** | The selected values.  | 
**Interval** |  Pointer to **Int32** | The selected interval for RANGE selectors.  | [optional] 

## Examples

- Prepare the resource
```powershell
$Schedule1Days = Initialize-PSSailpointBetaSchedule1Days  -Type null `
 -Values [MON, WED] `
 -Interval 3
```

- Convert the resource to JSON
```powershell
$Schedule1Days | ConvertTo-JSON
```


[[Back to top]](#) 

