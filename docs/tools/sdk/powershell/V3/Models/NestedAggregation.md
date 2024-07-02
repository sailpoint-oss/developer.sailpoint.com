---
id: nested-aggregation
title: NestedAggregation
pagination_label: NestedAggregation
sidebar_label: NestedAggregation
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'NestedAggregation'] 
slug: /tools/sdk/powershell/v3/models/nested-aggregation
tags: ['SDK', 'Software Development Kit', 'NestedAggregation']
---


# NestedAggregation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  **String** | The name of the nested aggregate to be included in the result. | 
**Type** |  **String** | The type of the nested object. | 

## Examples

- Prepare the resource
```powershell
$NestedAggregation = Initialize-NestedAggregation  -Name id `
 -Type access
```

- Convert the resource to JSON
```powershell
$NestedAggregation | ConvertTo-JSON
```


[[Back to top]](#) 

