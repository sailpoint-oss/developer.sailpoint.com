---
id: v2025-nested-aggregation
title: NestedAggregation
pagination_label: NestedAggregation
sidebar_label: NestedAggregation
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NestedAggregation', 'V2025NestedAggregation'] 
slug: /tools/sdk/powershell/v2025/models/nested-aggregation
tags: ['SDK', 'Software Development Kit', 'NestedAggregation', 'V2025NestedAggregation']
---


# NestedAggregation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The name of the nested aggregate to be included in the result. | [required]
**Type** | **String** | The type of the nested object. | [required]

## Examples

- Prepare the resource
```powershell
$NestedAggregation = Initialize-V2025NestedAggregation  -Name id `
 -Type access
```

- Convert the resource to JSON
```powershell
$NestedAggregation | ConvertTo-JSON
```


[[Back to top]](#) 

