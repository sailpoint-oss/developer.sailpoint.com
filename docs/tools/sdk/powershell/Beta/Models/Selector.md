---
id: selector
title: Selector
pagination_label: Selector
sidebar_label: Selector
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'Selector'] 
slug: /tools/sdk/powershell/beta/models/selector
tags: ['SDK', 'Software Development Kit', 'Selector']
---


# Selector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  [**SelectorType**](selector-type) |  | 
**Values** |  **[]String** | The selected values.  | 
**Interval** |  Pointer to **Int32** | The selected interval for RANGE selectors.  | [optional] 

## Examples

- Prepare the resource
```powershell
$Selector = Initialize-PSSailpointBetaSelector  -Type null `
 -Values [MON, WED] `
 -Interval 3
```

- Convert the resource to JSON
```powershell
$Selector | ConvertTo-JSON
```


[[Back to top]](#) 

