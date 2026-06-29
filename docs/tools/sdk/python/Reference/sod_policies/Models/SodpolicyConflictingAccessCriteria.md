---
id: sodpolicy-conflicting-access-criteria
title: SodpolicyConflictingAccessCriteria
pagination_label: SodpolicyConflictingAccessCriteria
sidebar_label: SodpolicyConflictingAccessCriteria
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SodpolicyConflictingAccessCriteria', 'SodpolicyConflictingAccessCriteria'] 
slug: /tools/sdk/python/sod-policies/models/sodpolicy-conflicting-access-criteria
tags: ['SDK', 'Software Development Kit', 'SodpolicyConflictingAccessCriteria', 'SodpolicyConflictingAccessCriteria']
---

# SodpolicyConflictingAccessCriteria


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**left_criteria** | [**Accesscriteria**](accesscriteria) |  | [optional] 
**right_criteria** | [**Accesscriteria**](accesscriteria) |  | [optional] 
}

## Example

```python
from sailpoint.sod_policies.models.sodpolicy_conflicting_access_criteria import SodpolicyConflictingAccessCriteria

sodpolicy_conflicting_access_criteria = SodpolicyConflictingAccessCriteria(
left_criteria=sailpoint.sod_policies.models.access_criteria.Access Criteria(
                    name = 'money-in', 
                    criteria_list = [{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a66","name":"Administrator"},{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a67","name":"Administrator"}], ),
right_criteria=sailpoint.sod_policies.models.access_criteria.Access Criteria(
                    name = 'money-in', 
                    criteria_list = [{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a66","name":"Administrator"},{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a67","name":"Administrator"}], )
)

```
[[Back to top]](#) 

