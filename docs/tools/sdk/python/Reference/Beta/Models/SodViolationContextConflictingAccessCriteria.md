---
id: beta-sod-violation-context-conflicting-access-criteria
title: SodViolationContextConflictingAccessCriteria
pagination_label: SodViolationContextConflictingAccessCriteria
sidebar_label: SodViolationContextConflictingAccessCriteria
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SodViolationContextConflictingAccessCriteria', 'BetaSodViolationContextConflictingAccessCriteria'] 
slug: /tools/sdk/python/beta/models/sod-violation-context-conflicting-access-criteria
tags: ['SDK', 'Software Development Kit', 'SodViolationContextConflictingAccessCriteria', 'BetaSodViolationContextConflictingAccessCriteria']
---

# SodViolationContextConflictingAccessCriteria

The object which contains the left and right hand side of the entitlements that got violated according to the policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**left_criteria** | [**SodViolationContextConflictingAccessCriteriaLeftCriteria**](sod-violation-context-conflicting-access-criteria-left-criteria) |  | [optional] 
**right_criteria** | [**SodViolationContextConflictingAccessCriteriaLeftCriteria**](sod-violation-context-conflicting-access-criteria-left-criteria) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.sod_violation_context_conflicting_access_criteria import SodViolationContextConflictingAccessCriteria

sod_violation_context_conflicting_access_criteria = SodViolationContextConflictingAccessCriteria(
left_criteria=sailpoint.beta.models.sod_violation_context_conflicting_access_criteria_left_criteria.SodViolationContext_conflictingAccessCriteria_leftCriteria(
                    criteria_list = [
                        sailpoint.beta.models.sod_exempt_criteria.SodExemptCriteria(
                            existing = True, 
                            type = 'IDENTITY', 
                            id = '2c918085771e9d3301773b3cb66f6398', 
                            name = 'My HR Entitlement', )
                        ], ),
right_criteria=sailpoint.beta.models.sod_violation_context_conflicting_access_criteria_left_criteria.SodViolationContext_conflictingAccessCriteria_leftCriteria(
                    criteria_list = [
                        sailpoint.beta.models.sod_exempt_criteria.SodExemptCriteria(
                            existing = True, 
                            type = 'IDENTITY', 
                            id = '2c918085771e9d3301773b3cb66f6398', 
                            name = 'My HR Entitlement', )
                        ], )
)

```
[[Back to top]](#) 

