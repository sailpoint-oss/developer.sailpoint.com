---
id: v2024-conflicting-access-criteria
title: ConflictingAccessCriteria
pagination_label: ConflictingAccessCriteria
sidebar_label: ConflictingAccessCriteria
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ConflictingAccessCriteria', 'V2024ConflictingAccessCriteria'] 
slug: /tools/sdk/python/v2024/models/conflicting-access-criteria
tags: ['SDK', 'Software Development Kit', 'ConflictingAccessCriteria', 'V2024ConflictingAccessCriteria']
---

# ConflictingAccessCriteria


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**left_criteria** | [**AccessCriteria**](access-criteria) |  | [optional] 
**right_criteria** | [**AccessCriteria**](access-criteria) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.conflicting_access_criteria import ConflictingAccessCriteria

conflicting_access_criteria = ConflictingAccessCriteria(
left_criteria=sailpoint.v2024.models.access_criteria.Access Criteria(
                    name = 'money-in', 
                    criteria_list = [{type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a66, name=Administrator}, {type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a67, name=Administrator}], ),
right_criteria=sailpoint.v2024.models.access_criteria.Access Criteria(
                    name = 'money-in', 
                    criteria_list = [{type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a66, name=Administrator}, {type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a67, name=Administrator}], )
)

```
[[Back to top]](#) 

