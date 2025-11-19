---
id: beta-sod-policy-conflicting-access-criteria
title: SodPolicyConflictingAccessCriteria
pagination_label: SodPolicyConflictingAccessCriteria
sidebar_label: SodPolicyConflictingAccessCriteria
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SodPolicyConflictingAccessCriteria', 'BetaSodPolicyConflictingAccessCriteria'] 
slug: /tools/sdk/python/beta/models/sod-policy-conflicting-access-criteria
tags: ['SDK', 'Software Development Kit', 'SodPolicyConflictingAccessCriteria', 'BetaSodPolicyConflictingAccessCriteria']
---

# SodPolicyConflictingAccessCriteria


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**left_criteria** | [**AccessCriteria**](access-criteria) |  | [optional] 
**right_criteria** | [**AccessCriteria**](access-criteria) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.sod_policy_conflicting_access_criteria import SodPolicyConflictingAccessCriteria

sod_policy_conflicting_access_criteria = SodPolicyConflictingAccessCriteria(
left_criteria=sailpoint.beta.models.access_criteria.Access Criteria(
                    name = 'money-in', 
                    criteria_list = [{type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a66, name=Administrator}, {type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a67, name=Administrator}], ),
right_criteria=sailpoint.beta.models.access_criteria.Access Criteria(
                    name = 'money-in', 
                    criteria_list = [{type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a66, name=Administrator}, {type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a67, name=Administrator}], )
)

```
[[Back to top]](#) 

