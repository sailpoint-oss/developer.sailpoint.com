---
id: sodviolationcontext-conflicting-access-criteria
title: SodviolationcontextConflictingAccessCriteria
pagination_label: SodviolationcontextConflictingAccessCriteria
sidebar_label: SodviolationcontextConflictingAccessCriteria
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SodviolationcontextConflictingAccessCriteria', 'SodviolationcontextConflictingAccessCriteria'] 
slug: /tools/sdk/python/access-requests/models/sodviolationcontext-conflicting-access-criteria
tags: ['SDK', 'Software Development Kit', 'SodviolationcontextConflictingAccessCriteria', 'SodviolationcontextConflictingAccessCriteria']
---

# SodviolationcontextConflictingAccessCriteria

The object which contains the left and right hand side of the entitlements that got violated according to the policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**left_criteria** | [**SodviolationcontextConflictingAccessCriteriaLeftCriteria**](sodviolationcontext-conflicting-access-criteria-left-criteria) |  | [optional] 
**right_criteria** | [**SodviolationcontextConflictingAccessCriteriaLeftCriteria**](sodviolationcontext-conflicting-access-criteria-left-criteria) |  | [optional] 
}

## Example

```python
from sailpoint.access_requests.models.sodviolationcontext_conflicting_access_criteria import SodviolationcontextConflictingAccessCriteria

sodviolationcontext_conflicting_access_criteria = SodviolationcontextConflictingAccessCriteria(
left_criteria=sailpoint.access_requests.models.sodviolationcontext_conflicting_access_criteria_left_criteria.sodviolationcontext_conflictingAccessCriteria_leftCriteria(
                    criteria_list = [
                        sailpoint.access_requests.models.sod_exempt_criteria.Sod Exempt Criteria(
                            existing = True, 
                            type = 'IDENTITY', 
                            id = '2c918085771e9d3301773b3cb66f6398', 
                            name = 'My HR Entitlement', )
                        ], ),
right_criteria=sailpoint.access_requests.models.sodviolationcontext_conflicting_access_criteria_left_criteria.sodviolationcontext_conflictingAccessCriteria_leftCriteria(
                    criteria_list = [
                        sailpoint.access_requests.models.sod_exempt_criteria.Sod Exempt Criteria(
                            existing = True, 
                            type = 'IDENTITY', 
                            id = '2c918085771e9d3301773b3cb66f6398', 
                            name = 'My HR Entitlement', )
                        ], )
)

```
[[Back to top]](#) 

