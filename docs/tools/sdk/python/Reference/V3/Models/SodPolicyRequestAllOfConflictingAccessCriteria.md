---
id: sod-policy-request-all-of-conflicting-access-criteria
title: SodPolicyRequestAllOfConflictingAccessCriteria
pagination_label: SodPolicyRequestAllOfConflictingAccessCriteria
sidebar_label: SodPolicyRequestAllOfConflictingAccessCriteria
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SodPolicyRequestAllOfConflictingAccessCriteria', 'SodPolicyRequestAllOfConflictingAccessCriteria'] 
slug: /tools/sdk/python/v3/models/sod-policy-request-all-of-conflicting-access-criteria
tags: ['SDK', 'Software Development Kit', 'SodPolicyRequestAllOfConflictingAccessCriteria', 'SodPolicyRequestAllOfConflictingAccessCriteria']
---

# SodPolicyRequestAllOfConflictingAccessCriteria


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**left_criteria** | [**AccessCriteriaRequest**](access-criteria-request) |  | [optional] 
**right_criteria** | [**AccessCriteriaRequest**](access-criteria-request) |  | [optional] 
}

## Example

```python
from sailpoint.v3.models.sod_policy_request_all_of_conflicting_access_criteria import SodPolicyRequestAllOfConflictingAccessCriteria

sod_policy_request_all_of_conflicting_access_criteria = SodPolicyRequestAllOfConflictingAccessCriteria(
left_criteria=sailpoint.v3.models.access_criteria_request.Access Criteria Request(
                    name = 'money-in', 
                    criteria_list = [{type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a66, name=Administrator}, {type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a67, name=Administrator}], ),
right_criteria=sailpoint.v3.models.access_criteria_request.Access Criteria Request(
                    name = 'money-in', 
                    criteria_list = [{type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a66, name=Administrator}, {type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a67, name=Administrator}], )
)

```
[[Back to top]](#) 

