---
id: v2025-exception-access-criteria
title: ExceptionAccessCriteria
pagination_label: ExceptionAccessCriteria
sidebar_label: ExceptionAccessCriteria
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ExceptionAccessCriteria', 'V2025ExceptionAccessCriteria'] 
slug: /tools/sdk/python/v2025/models/exception-access-criteria
tags: ['SDK', 'Software Development Kit', 'ExceptionAccessCriteria', 'V2025ExceptionAccessCriteria']
---

# ExceptionAccessCriteria


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**left_criteria** | [**ExceptionCriteria**](exception-criteria) |  | [optional] 
**right_criteria** | [**ExceptionCriteria**](exception-criteria) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.exception_access_criteria import ExceptionAccessCriteria

exception_access_criteria = ExceptionAccessCriteria(
left_criteria=sailpoint.v2025.models.exception_criteria.ExceptionCriteria(
                    criteria_list = [{type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a66, existing=true}, {type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a67, existing=false}], ),
right_criteria=sailpoint.v2025.models.exception_criteria.ExceptionCriteria(
                    criteria_list = [{type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a66, existing=true}, {type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a67, existing=false}], )
)

```
[[Back to top]](#) 

