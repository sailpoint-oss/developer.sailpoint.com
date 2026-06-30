---
id: violationcontext-policy
title: ViolationcontextPolicy
pagination_label: ViolationcontextPolicy
sidebar_label: ViolationcontextPolicy
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ViolationcontextPolicy', 'ViolationcontextPolicy'] 
slug: /tools/sdk/python/sod-violations/models/violationcontext-policy
tags: ['SDK', 'Software Development Kit', 'ViolationcontextPolicy', 'ViolationcontextPolicy']
---

# ViolationcontextPolicy

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
from sailpoint.sod_violations.models.violationcontext_policy import ViolationcontextPolicy

violationcontext_policy = ViolationcontextPolicy(
type='ENTITLEMENT',
id='0f11f2a4-7c94-4bf3-a2bd-742580fe3bde',
name='A very cool policy name'
)

```
[[Back to top]](#) 

