---
id: beta-violation-context-policy
title: ViolationContextPolicy
pagination_label: ViolationContextPolicy
sidebar_label: ViolationContextPolicy
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ViolationContextPolicy', 'BetaViolationContextPolicy'] 
slug: /tools/sdk/python/beta/models/violation-context-policy
tags: ['SDK', 'Software Development Kit', 'ViolationContextPolicy', 'BetaViolationContextPolicy']
---

# ViolationContextPolicy

The types of objects supported for SOD policy violations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'ENTITLEMENT' ] | The type of object supported for SOD policy violations. | [optional] 
**id** | **str** | SOD policy ID. | [optional] 
**name** | **str** |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.violation_context_policy import ViolationContextPolicy

violation_context_policy = ViolationContextPolicy(
type=ENTITLEMENT,
id='0f11f2a4-7c94-4bf3-a2bd-742580fe3bde',
name='A very cool policy name'
)

```
[[Back to top]](#) 

