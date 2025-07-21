---
id: access-criteria-request
title: AccessCriteriaRequest
pagination_label: AccessCriteriaRequest
sidebar_label: AccessCriteriaRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessCriteriaRequest', 'AccessCriteriaRequest'] 
slug: /tools/sdk/python/v3/models/access-criteria-request
tags: ['SDK', 'Software Development Kit', 'AccessCriteriaRequest', 'AccessCriteriaRequest']
---

# AccessCriteriaRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Business name for the access construct list | [optional] 
**criteria_list** | [**[]AccessCriteriaRequestCriteriaListInner**](access-criteria-request-criteria-list-inner) | List of criteria. There is a min of 1 and max of 50 items in the list. | [optional] 
}

## Example

```python
from sailpoint.v3.models.access_criteria_request import AccessCriteriaRequest

access_criteria_request = AccessCriteriaRequest(
name='money-in',
criteria_list=[{type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a66, name=Administrator}, {type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a67, name=Administrator}]
)

```
[[Back to top]](#) 

