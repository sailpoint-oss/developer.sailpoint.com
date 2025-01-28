---
id: schedule1-months
title: Schedule1Months
pagination_label: Schedule1Months
sidebar_label: Schedule1Months
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Schedule1Months', 'Schedule1Months'] 
slug: /tools/sdk/powershell/v3/models/schedule1-months
tags: ['SDK', 'Software Development Kit', 'Schedule1Months', 'Schedule1Months']
---


# Schedule1Months

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  [**SelectorType**](selector-type) |  | [required]
**Values** |  **[]String** | The selected values.  | [required]
**Interval** |  Pointer to **Int32** | The selected interval for RANGE selectors.  | [optional] 

## Examples

- Prepare the resource
```powershell
$Schedule1Months = Initialize-PSSailpoint.V3Schedule1Months  -Type null `
 -Values [MON, WED] `
 -Interval 3
```

- Convert the resource to JSON
```powershell
$Schedule1Months | ConvertTo-JSON
```


[[Back to top]](#) 

