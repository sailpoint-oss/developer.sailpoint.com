---
id: selector
title: Selector
pagination_label: Selector
sidebar_label: Selector
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Selector', 'Selector'] 
slug: /tools/sdk/python/v3/models/selector
tags: ['SDK', 'Software Development Kit', 'Selector', 'Selector']
---

# Selector


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**SelectorType**](selector-type) |  | [required]
**values** | **[]str** | The selected values.  | [required]
**interval** | **int** | The selected interval for RANGE selectors.  | [optional] 
}

## Example

```python
from sailpoint.v3.models.selector import Selector

selector = Selector(
type='LIST',
values=[MON, WED],
interval=3
)

```
[[Back to top]](#) 

