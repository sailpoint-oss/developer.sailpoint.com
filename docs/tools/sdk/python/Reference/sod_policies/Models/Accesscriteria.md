---
id: accesscriteria
title: Accesscriteria
pagination_label: Accesscriteria
sidebar_label: Accesscriteria
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accesscriteria', 'Accesscriteria'] 
slug: /tools/sdk/python/sod-policies/models/accesscriteria
tags: ['SDK', 'Software Development Kit', 'Accesscriteria', 'Accesscriteria']
---

# Accesscriteria


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Business name for the access construct list | [optional] 
**criteria_list** | [**[]AccesscriteriaCriteriaListInner**](accesscriteria-criteria-list-inner) | List of criteria. There is a min of 1 and max of 50 items in the list. | [optional] 
}

## Example

```python
from sailpoint.sod_policies.models.accesscriteria import Accesscriteria

accesscriteria = Accesscriteria(
name='money-in',
criteria_list=[{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a66","name":"Administrator"},{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a67","name":"Administrator"}]
)

```
[[Back to top]](#) 

