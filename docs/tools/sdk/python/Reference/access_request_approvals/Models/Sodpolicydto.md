---
id: sodpolicydto
title: Sodpolicydto
pagination_label: Sodpolicydto
sidebar_label: Sodpolicydto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Sodpolicydto', 'Sodpolicydto'] 
slug: /tools/sdk/python/access-request-approvals/models/sodpolicydto
tags: ['SDK', 'Software Development Kit', 'Sodpolicydto', 'Sodpolicydto']
---

# Sodpolicydto

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
from sailpoint.access_request_approvals.models.sodpolicydto import Sodpolicydto

sodpolicydto = Sodpolicydto(
type='SOD_POLICY',
id='0f11f2a4-7c94-4bf3-a2bd-742580fe3bde',
name='Business SOD Policy'
)

```
[[Back to top]](#) 

