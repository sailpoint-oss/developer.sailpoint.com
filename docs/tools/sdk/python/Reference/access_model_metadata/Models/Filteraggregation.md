---
id: filteraggregation
title: Filteraggregation
pagination_label: Filteraggregation
sidebar_label: Filteraggregation
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Filteraggregation', 'Filteraggregation'] 
slug: /tools/sdk/python/access-model-metadata/models/filteraggregation
tags: ['SDK', 'Software Development Kit', 'Filteraggregation', 'Filteraggregation']
---

# Filteraggregation

An additional filter to constrain the results of the search query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the filter aggregate to be included in the result. | [required]
**type** | [**Searchfiltertype**](searchfiltertype) |  | [optional] [default to Searchfiltertype.TERM]
**var_field** | **str** | The search field to apply the filter to.  Prefix the field name with '@' to reference a nested object.  | [required]
**value** | **str** | The value to filter on. | [required]
}

## Example

```python
from sailpoint.access_model_metadata.models.filteraggregation import Filteraggregation

filteraggregation = Filteraggregation(
name='Entitlements',
type='TERM',
var_field='access.type',
value='ENTITLEMENT'
)

```
[[Back to top]](#) 

