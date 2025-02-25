---
id: violation-context-policy
title: ViolationContextPolicy
pagination_label: ViolationContextPolicy
sidebar_label: ViolationContextPolicy
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ViolationContextPolicy', 'ViolationContextPolicy'] 
slug: /tools/sdk/python/v3/models/violation-context-policy
tags: ['SDK', 'Software Development Kit', 'ViolationContextPolicy', 'ViolationContextPolicy']
---

# ViolationContextPolicy

The types of objects supported for SOD violations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'ENTITLEMENT' ] | The type of object that is referenced | [optional] 
**id** | **str** | SOD policy ID. | [optional] 
**name** | **str** |  | [optional] 
}

## Example

```python
from sailpoint.v3.models.violation_context_policy import ViolationContextPolicy

violation_context_policy = ViolationContextPolicy(
type=ENTITLEMENT,
id='0f11f2a4-7c94-4bf3-a2bd-742580fe3bde',
name='A very cool policy name'
)

```
[[Back to top]](#) 

