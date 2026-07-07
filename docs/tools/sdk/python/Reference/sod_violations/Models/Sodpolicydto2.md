---
id: sodpolicydto2
title: Sodpolicydto2
pagination_label: Sodpolicydto2
sidebar_label: Sodpolicydto2
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Sodpolicydto2', 'Sodpolicydto2'] 
slug: /tools/sdk/python/sod-violations/models/sodpolicydto2
tags: ['SDK', 'Software Development Kit', 'Sodpolicydto2', 'Sodpolicydto2']
---

# Sodpolicydto2

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
from sailpoint.sod_violations.models.sodpolicydto2 import Sodpolicydto2

sodpolicydto2 = Sodpolicydto2(
type='SOD_POLICY',
id='0f11f2a4-7c94-4bf3-a2bd-742580fe3bde',
name='Business SOD Policy'
)

```
[[Back to top]](#) 

