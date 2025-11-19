---
id: sod-policy-read-all-of-conflicting-access-criteria
title: SodPolicyReadAllOfConflictingAccessCriteria
pagination_label: SodPolicyReadAllOfConflictingAccessCriteria
sidebar_label: SodPolicyReadAllOfConflictingAccessCriteria
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SodPolicyReadAllOfConflictingAccessCriteria', 'SodPolicyReadAllOfConflictingAccessCriteria'] 
slug: /tools/sdk/python/v3/models/sod-policy-read-all-of-conflicting-access-criteria
tags: ['SDK', 'Software Development Kit', 'SodPolicyReadAllOfConflictingAccessCriteria', 'SodPolicyReadAllOfConflictingAccessCriteria']
---

# SodPolicyReadAllOfConflictingAccessCriteria


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**left_criteria** | [**AccessCriteria**](access-criteria) |  | [optional] 
**right_criteria** | [**AccessCriteria**](access-criteria) |  | [optional] 
}

## Example

```python
from sailpoint.v3.models.sod_policy_read_all_of_conflicting_access_criteria import SodPolicyReadAllOfConflictingAccessCriteria

sod_policy_read_all_of_conflicting_access_criteria = SodPolicyReadAllOfConflictingAccessCriteria(
left_criteria=sailpoint.v3.models.access_criteria.Access Criteria(
                    name = 'money-in', 
                    criteria_list = [{type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a66, name=Administrator}, {type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a67, name=Administrator}], ),
right_criteria=sailpoint.v3.models.access_criteria.Access Criteria(
                    name = 'money-in', 
                    criteria_list = [{type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a66, name=Administrator}, {type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a67, name=Administrator}], )
)

```
[[Back to top]](#) 

