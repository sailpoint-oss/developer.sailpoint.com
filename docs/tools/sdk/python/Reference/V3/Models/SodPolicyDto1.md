---
id: sod-policy-dto1
title: SodPolicyDto1
pagination_label: SodPolicyDto1
sidebar_label: SodPolicyDto1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SodPolicyDto1', 'SodPolicyDto1'] 
slug: /tools/sdk/python/v3/models/sod-policy-dto1
tags: ['SDK', 'Software Development Kit', 'SodPolicyDto1', 'SodPolicyDto1']
---

# SodPolicyDto1

SOD policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'SOD_POLICY' ] | SOD policy DTO type. | [optional] 
**id** | **str** | SOD policy ID. | [optional] 
**name** | **str** | SOD policy display name. | [optional] 
}

## Example

```python
from sailpoint.v3.models.sod_policy_dto1 import SodPolicyDto1

sod_policy_dto1 = SodPolicyDto1(
type='SOD_POLICY',
id='0f11f2a4-7c94-4bf3-a2bd-742580fe3bde',
name='Business SOD Policy'
)

```
[[Back to top]](#) 

