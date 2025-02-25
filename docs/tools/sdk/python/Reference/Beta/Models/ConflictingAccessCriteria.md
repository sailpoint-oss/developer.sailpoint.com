---
id: beta-conflicting-access-criteria
title: ConflictingAccessCriteria
pagination_label: ConflictingAccessCriteria
sidebar_label: ConflictingAccessCriteria
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ConflictingAccessCriteria', 'BetaConflictingAccessCriteria'] 
slug: /tools/sdk/python/beta/models/conflicting-access-criteria
tags: ['SDK', 'Software Development Kit', 'ConflictingAccessCriteria', 'BetaConflictingAccessCriteria']
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
from sailpoint.beta.models.conflicting_access_criteria import ConflictingAccessCriteria

conflicting_access_criteria = ConflictingAccessCriteria(
left_criteria=sailpoint.beta.models.access_criteria.AccessCriteria(
                    name = 'money-in', 
                    criteria_list = [{type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a66, name=Administrator}, {type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a67, name=Administrator}], ),
right_criteria=sailpoint.beta.models.access_criteria.AccessCriteria(
                    name = 'money-in', 
                    criteria_list = [{type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a66, name=Administrator}, {type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a67, name=Administrator}], )
)

```
[[Back to top]](#) 

