---
id: beta-sod-violation-context1
title: SodViolationContext1
pagination_label: SodViolationContext1
sidebar_label: SodViolationContext1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SodViolationContext1', 'BetaSodViolationContext1'] 
slug: /tools/sdk/python/beta/models/sod-violation-context1
tags: ['SDK', 'Software Development Kit', 'SodViolationContext1', 'BetaSodViolationContext1']
---

# SodViolationContext1

The contextual information of the violated criteria.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy** | [**SodPolicyDto1**](sod-policy-dto1) |  | [optional] 
**conflicting_access_criteria** | [**SodViolationContext1ConflictingAccessCriteria**](sod-violation-context1-conflicting-access-criteria) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.sod_violation_context1 import SodViolationContext1

sod_violation_context1 = SodViolationContext1(
policy=sailpoint.beta.models.sod_policy_dto.Sod Policy Dto(
                    type = 'SOD_POLICY', 
                    id = '0f11f2a4-7c94-4bf3-a2bd-742580fe3bde', 
                    name = 'Business SOD Policy', ),
conflicting_access_criteria=sailpoint.beta.models.sod_violation_context_1_conflicting_access_criteria.SodViolationContext_1_conflictingAccessCriteria(
                    left_criteria = sailpoint.beta.models.sod_violation_context_1_conflicting_access_criteria_left_criteria.SodViolationContext_1_conflictingAccessCriteria_leftCriteria(
                        criteria_list = [
                            sailpoint.beta.models.sod_exempt_criteria.Sod Exempt Criteria(
                                existing = True, 
                                type = 'IDENTITY', 
                                id = '2c918085771e9d3301773b3cb66f6398', 
                                name = 'My HR Entitlement', )
                            ], ), 
                    right_criteria = sailpoint.beta.models.sod_violation_context_1_conflicting_access_criteria_left_criteria.SodViolationContext_1_conflictingAccessCriteria_leftCriteria(), )
)

```
[[Back to top]](#) 

