---
id: selector
title: Selector
pagination_label: Selector
sidebar_label: Selector
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Selector', 'Selector'] 
slug: /tools/sdk/powershell/v3/models/selector
tags: ['SDK', 'Software Development Kit', 'Selector', 'Selector']
---


# Selector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**SelectorType**](selector-type) |  | [required]
**Values** | **[]String** | The selected values.  | [required]
**Interval** | **Int32** | The selected interval for RANGE selectors.  | [optional] 

## Examples

- Prepare the resource
```powershell
$Selector = Initialize-PSSailpoint.V3Selector  -Type null `
 -Values [MON, WED] `
 -Interval 3
```

- Convert the resource to JSON
```powershell
$Selector | ConvertTo-JSON
```


[[Back to top]](#) 

