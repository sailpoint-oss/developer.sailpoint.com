---
id: accessitemrequestedfor
title: Accessitemrequestedfor
pagination_label: Accessitemrequestedfor
sidebar_label: Accessitemrequestedfor
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accessitemrequestedfor', 'Accessitemrequestedfor'] 
slug: /tools/sdk/python/access-request-approvals/models/accessitemrequestedfor
tags: ['SDK', 'Software Development Kit', 'Accessitemrequestedfor', 'Accessitemrequestedfor']
---

# Accessitemrequestedfor

Identity the access item is requested for.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | DTO type of identity the access item is requested for. | [optional] 
**id** | **str** | ID of identity the access item is requested for. | [optional] 
**name** | **str** | Human-readable display name of identity the access item is requested for. | [optional] 
}

## Example

```python
from sailpoint.access_request_approvals.models.accessitemrequestedfor import Accessitemrequestedfor

accessitemrequestedfor = Accessitemrequestedfor(
type='IDENTITY',
id='2c4180a46faadee4016fb4e018c20626',
name='Robert Robinson'
)

```
[[Back to top]](#) 

