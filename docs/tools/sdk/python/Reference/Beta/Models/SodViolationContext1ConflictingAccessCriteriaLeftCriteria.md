---
id: beta-sod-violation-context1-conflicting-access-criteria-left-criteria
title: SodViolationContext1ConflictingAccessCriteriaLeftCriteria
pagination_label: SodViolationContext1ConflictingAccessCriteriaLeftCriteria
sidebar_label: SodViolationContext1ConflictingAccessCriteriaLeftCriteria
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SodViolationContext1ConflictingAccessCriteriaLeftCriteria', 'BetaSodViolationContext1ConflictingAccessCriteriaLeftCriteria'] 
slug: /tools/sdk/python/beta/models/sod-violation-context1-conflicting-access-criteria-left-criteria
tags: ['SDK', 'Software Development Kit', 'SodViolationContext1ConflictingAccessCriteriaLeftCriteria', 'BetaSodViolationContext1ConflictingAccessCriteriaLeftCriteria']
---

# SodViolationContext1ConflictingAccessCriteriaLeftCriteria


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**criteria_list** | [**[]SodExemptCriteria1**](sod-exempt-criteria1) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.sod_violation_context1_conflicting_access_criteria_left_criteria import SodViolationContext1ConflictingAccessCriteriaLeftCriteria

sod_violation_context1_conflicting_access_criteria_left_criteria = SodViolationContext1ConflictingAccessCriteriaLeftCriteria(
criteria_list=[
                    sailpoint.beta.models.sod_exempt_criteria.Sod Exempt Criteria(
                        existing = True, 
                        type = 'IDENTITY', 
                        id = '2c918085771e9d3301773b3cb66f6398', 
                        name = 'My HR Entitlement', )
                    ]
)

```
[[Back to top]](#) 

