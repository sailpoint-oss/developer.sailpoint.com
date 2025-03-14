---
id: beta-exception-criteria
title: ExceptionCriteria
pagination_label: ExceptionCriteria
sidebar_label: ExceptionCriteria
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ExceptionCriteria', 'BetaExceptionCriteria'] 
slug: /tools/sdk/python/beta/models/exception-criteria
tags: ['SDK', 'Software Development Kit', 'ExceptionCriteria', 'BetaExceptionCriteria']
---

# ExceptionCriteria


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**criteria_list** | [**[]ExceptionCriteriaCriteriaListInner**](exception-criteria-criteria-list-inner) | List of exception criteria. There is a min of 1 and max of 50 items in the list. | [optional] 
}

## Example

```python
from sailpoint.beta.models.exception_criteria import ExceptionCriteria

exception_criteria = ExceptionCriteria(
criteria_list=[{type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a66, existing=true}, {type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a67, existing=false}]
)

```
[[Back to top]](#) 

