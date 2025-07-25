---
id: conflicting-access-criteria-request
title: ConflictingAccessCriteriaRequest
pagination_label: ConflictingAccessCriteriaRequest
sidebar_label: ConflictingAccessCriteriaRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ConflictingAccessCriteriaRequest', 'ConflictingAccessCriteriaRequest'] 
slug: /tools/sdk/python/v3/models/conflicting-access-criteria-request
tags: ['SDK', 'Software Development Kit', 'ConflictingAccessCriteriaRequest', 'ConflictingAccessCriteriaRequest']
---

# ConflictingAccessCriteriaRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**left_criteria** | [**AccessCriteriaRequest**](access-criteria-request) |  | [optional] 
**right_criteria** | [**AccessCriteriaRequest**](access-criteria-request) |  | [optional] 
}

## Example

```python
from sailpoint.v3.models.conflicting_access_criteria_request import ConflictingAccessCriteriaRequest

conflicting_access_criteria_request = ConflictingAccessCriteriaRequest(
left_criteria=sailpoint.v3.models.access_criteria_request.Access Criteria Request(
                    name = 'money-in', 
                    criteria_list = [{type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a66, name=Administrator}, {type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a67, name=Administrator}], ),
right_criteria=sailpoint.v3.models.access_criteria_request.Access Criteria Request(
                    name = 'money-in', 
                    criteria_list = [{type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a66, name=Administrator}, {type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a67, name=Administrator}], )
)

```
[[Back to top]](#) 

