---
id: beta-access-criteria
title: AccessCriteria
pagination_label: AccessCriteria
sidebar_label: AccessCriteria
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessCriteria', 'BetaAccessCriteria'] 
slug: /tools/sdk/python/beta/models/access-criteria
tags: ['SDK', 'Software Development Kit', 'AccessCriteria', 'BetaAccessCriteria']
---

# AccessCriteria


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Business name for the access construct list | [optional] 
**criteria_list** | [**[]AccessCriteriaCriteriaListInner**](access-criteria-criteria-list-inner) | List of criteria.  There is a min of 1 and max of 50 items in the list. | [optional] 
}

## Example

```python
from sailpoint.beta.models.access_criteria import AccessCriteria

access_criteria = AccessCriteria(
name='money-in',
criteria_list=[{type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a66, name=Administrator}, {type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a67, name=Administrator}]
)

```
[[Back to top]](#) 

