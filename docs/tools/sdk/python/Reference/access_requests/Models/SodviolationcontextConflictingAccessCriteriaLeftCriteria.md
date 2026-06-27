---
id: sodviolationcontext-conflicting-access-criteria-left-criteria
title: SodviolationcontextConflictingAccessCriteriaLeftCriteria
pagination_label: SodviolationcontextConflictingAccessCriteriaLeftCriteria
sidebar_label: SodviolationcontextConflictingAccessCriteriaLeftCriteria
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SodviolationcontextConflictingAccessCriteriaLeftCriteria', 'SodviolationcontextConflictingAccessCriteriaLeftCriteria'] 
slug: /tools/sdk/python/access-requests/models/sodviolationcontext-conflicting-access-criteria-left-criteria
tags: ['SDK', 'Software Development Kit', 'SodviolationcontextConflictingAccessCriteriaLeftCriteria', 'SodviolationcontextConflictingAccessCriteriaLeftCriteria']
---

# SodviolationcontextConflictingAccessCriteriaLeftCriteria


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**criteria_list** | [**[]Sodexemptcriteria**](sodexemptcriteria) |  | [optional] 
}

## Example

```python
from sailpoint.access_requests.models.sodviolationcontext_conflicting_access_criteria_left_criteria import SodviolationcontextConflictingAccessCriteriaLeftCriteria

sodviolationcontext_conflicting_access_criteria_left_criteria = SodviolationcontextConflictingAccessCriteriaLeftCriteria(
criteria_list=[
                    sailpoint.access_requests.models.sod_exempt_criteria.Sod Exempt Criteria(
                        existing = True, 
                        type = 'IDENTITY', 
                        id = '2c918085771e9d3301773b3cb66f6398', 
                        name = 'My HR Entitlement', )
                    ]
)

```
[[Back to top]](#) 

