---
id: exceptioncriteria
title: Exceptioncriteria
pagination_label: Exceptioncriteria
sidebar_label: Exceptioncriteria
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Exceptioncriteria', 'Exceptioncriteria'] 
slug: /tools/sdk/python/sod-violations/models/exceptioncriteria
tags: ['SDK', 'Software Development Kit', 'Exceptioncriteria', 'Exceptioncriteria']
---

# Exceptioncriteria


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**criteria_list** | [**[]ExceptioncriteriaCriteriaListInner**](exceptioncriteria-criteria-list-inner) | List of exception criteria. There is a min of 1 and max of 50 items in the list. | [optional] 
}

## Example

```python
from sailpoint.sod_violations.models.exceptioncriteria import Exceptioncriteria

exceptioncriteria = Exceptioncriteria(
criteria_list=[{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a66","existing":true},{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a67","existing":false}]
)

```
[[Back to top]](#) 

