---
id: beta-sod-violation-context1-conflicting-access-criteria
title: SodViolationContext1ConflictingAccessCriteria
pagination_label: SodViolationContext1ConflictingAccessCriteria
sidebar_label: SodViolationContext1ConflictingAccessCriteria
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SodViolationContext1ConflictingAccessCriteria', 'BetaSodViolationContext1ConflictingAccessCriteria'] 
slug: /tools/sdk/python/beta/models/sod-violation-context1-conflicting-access-criteria
tags: ['SDK', 'Software Development Kit', 'SodViolationContext1ConflictingAccessCriteria', 'BetaSodViolationContext1ConflictingAccessCriteria']
---

# SodViolationContext1ConflictingAccessCriteria

The object which contains the left and right hand side of the entitlements that got violated according to the policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**left_criteria** | [**SodViolationContext1ConflictingAccessCriteriaLeftCriteria**](sod-violation-context1-conflicting-access-criteria-left-criteria) |  | [optional] 
**right_criteria** | [**SodViolationContext1ConflictingAccessCriteriaLeftCriteria**](sod-violation-context1-conflicting-access-criteria-left-criteria) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.sod_violation_context1_conflicting_access_criteria import SodViolationContext1ConflictingAccessCriteria

sod_violation_context1_conflicting_access_criteria = SodViolationContext1ConflictingAccessCriteria(
left_criteria=sailpoint.beta.models.sod_violation_context_1_conflicting_access_criteria_left_criteria.SodViolationContext_1_conflictingAccessCriteria_leftCriteria(
                    criteria_list = [
                        sailpoint.beta.models.sod_exempt_criteria_1.SodExemptCriteria_1(
                            existing = True, 
                            type = 'IDENTITY', 
                            id = '2c918085771e9d3301773b3cb66f6398', 
                            name = 'My HR Entitlement', )
                        ], ),
right_criteria=sailpoint.beta.models.sod_violation_context_1_conflicting_access_criteria_left_criteria.SodViolationContext_1_conflictingAccessCriteria_leftCriteria(
                    criteria_list = [
                        sailpoint.beta.models.sod_exempt_criteria_1.SodExemptCriteria_1(
                            existing = True, 
                            type = 'IDENTITY', 
                            id = '2c918085771e9d3301773b3cb66f6398', 
                            name = 'My HR Entitlement', )
                        ], )
)

```
[[Back to top]](#) 

