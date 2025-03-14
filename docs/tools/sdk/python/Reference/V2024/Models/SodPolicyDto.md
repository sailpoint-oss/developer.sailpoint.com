---
id: v2024-sod-policy-dto
title: SodPolicyDto
pagination_label: SodPolicyDto
sidebar_label: SodPolicyDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SodPolicyDto', 'V2024SodPolicyDto'] 
slug: /tools/sdk/python/v2024/models/sod-policy-dto
tags: ['SDK', 'Software Development Kit', 'SodPolicyDto', 'V2024SodPolicyDto']
---

# SodPolicyDto

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
from sailpoint.v2024.models.sod_policy_dto import SodPolicyDto

sod_policy_dto = SodPolicyDto(
type='SOD_POLICY',
id='0f11f2a4-7c94-4bf3-a2bd-742580fe3bde',
name='Business SOD Policy'
)

```
[[Back to top]](#) 

