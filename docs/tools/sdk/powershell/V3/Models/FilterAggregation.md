---
id: filter-aggregation
title: FilterAggregation
pagination_label: FilterAggregation
sidebar_label: FilterAggregation
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'FilterAggregation'] 
slug: /tools/sdk/powershell/v3/models/filter-aggregation
tags: ['SDK', 'Software Development Kit', 'FilterAggregation']
---


# FilterAggregation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  **String** | The name of the filter aggregate to be included in the result. | 
**Type** |  Pointer to [**SearchFilterType**](search-filter-type) |  | [optional] 
**Field** |  **String** | The search field to apply the filter to.  Prefix the field name with &#39;@&#39; to reference a nested object.  | 
**Value** |  **String** | The value to filter on. | 

## Examples

- Prepare the resource
```powershell
$FilterAggregation = Initialize-PSSailpointFilterAggregation  -Name Entitlements `
 -Type null `
 -Field access.type `
 -Value ENTITLEMENT
```

- Convert the resource to JSON
```powershell
$FilterAggregation | ConvertTo-JSON
```


[[Back to top]](#) 

