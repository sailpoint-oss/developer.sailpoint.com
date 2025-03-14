---
id: v2024-violation-prediction
title: ViolationPrediction
pagination_label: ViolationPrediction
sidebar_label: ViolationPrediction
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ViolationPrediction', 'V2024ViolationPrediction'] 
slug: /tools/sdk/python/v2024/models/violation-prediction
tags: ['SDK', 'Software Development Kit', 'ViolationPrediction', 'V2024ViolationPrediction']
---

# ViolationPrediction

An object containing a listing of the SOD violation reasons detected by this check.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**violation_contexts** | [**[]ViolationContext**](violation-context) | List of Violation Contexts | [optional] 
}

## Example

```python
from sailpoint.v2024.models.violation_prediction import ViolationPrediction

violation_prediction = ViolationPrediction(
violation_contexts=[
                    sailpoint.v2024.models.violation_context.ViolationContext(
                        policy = sailpoint.v2024.models.violation_context_policy.ViolationContext_policy(
                            type = ENTITLEMENT, ), 
                        conflicting_access_criteria = sailpoint.v2024.models.exception_access_criteria.ExceptionAccessCriteria(
                            left_criteria = sailpoint.v2024.models.exception_criteria.ExceptionCriteria(
                                criteria_list = [{type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a66, existing=true}, {type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a67, existing=false}], ), 
                            right_criteria = sailpoint.v2024.models.exception_criteria.ExceptionCriteria(
                                criteria_list = [{type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a66, existing=true}, {type=ENTITLEMENT, id=2c9180866166b5b0016167c32ef31a67, existing=false}], ), ), )
                    ]
)

```
[[Back to top]](#) 

