---
id: v2025-sod-violation-context-conflicting-access-criteria
title: SodViolationContextConflictingAccessCriteria
pagination_label: SodViolationContextConflictingAccessCriteria
sidebar_label: SodViolationContextConflictingAccessCriteria
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SodViolationContextConflictingAccessCriteria', 'V2025SodViolationContextConflictingAccessCriteria'] 
slug: /tools/sdk/python/v2025/models/sod-violation-context-conflicting-access-criteria
tags: ['SDK', 'Software Development Kit', 'SodViolationContextConflictingAccessCriteria', 'V2025SodViolationContextConflictingAccessCriteria']
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
from sailpoint.v2025.models.sod_violation_context_conflicting_access_criteria import SodViolationContextConflictingAccessCriteria

sod_violation_context_conflicting_access_criteria = SodViolationContextConflictingAccessCriteria(
left_criteria=sailpoint.v2025.models.sod_violation_context_conflicting_access_criteria_left_criteria.SodViolationContext_conflictingAccessCriteria_leftCriteria(
                    criteria_list = [
                        sailpoint.v2025.models.sod_exempt_criteria.Sod Exempt Criteria(
                            existing = True, 
                            type = 'IDENTITY', 
                            id = '2c918085771e9d3301773b3cb66f6398', 
                            name = 'My HR Entitlement', )
                        ], ),
right_criteria=sailpoint.v2025.models.sod_violation_context_conflicting_access_criteria_left_criteria.SodViolationContext_conflictingAccessCriteria_leftCriteria(
                    criteria_list = [
                        sailpoint.v2025.models.sod_exempt_criteria.Sod Exempt Criteria(
                            existing = True, 
                            type = 'IDENTITY', 
                            id = '2c918085771e9d3301773b3cb66f6398', 
                            name = 'My HR Entitlement', )
                        ], )
)

```
[[Back to top]](#) 

