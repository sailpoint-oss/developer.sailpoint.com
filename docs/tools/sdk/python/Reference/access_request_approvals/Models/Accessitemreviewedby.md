---
id: accessitemreviewedby
title: Accessitemreviewedby
pagination_label: Accessitemreviewedby
sidebar_label: Accessitemreviewedby
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accessitemreviewedby', 'Accessitemreviewedby'] 
slug: /tools/sdk/python/access-request-approvals/models/accessitemreviewedby
tags: ['SDK', 'Software Development Kit', 'Accessitemreviewedby', 'Accessitemreviewedby']
---

# Accessitemreviewedby

Identity who reviewed the access item request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | DTO type of identity who reviewed the access item request. | [optional] 
**id** | **str** | ID of identity who reviewed the access item request. | [optional] 
**name** | **str** | Human-readable display name of identity who reviewed the access item request. | [optional] 
}

## Example

```python
from sailpoint.access_request_approvals.models.accessitemreviewedby import Accessitemreviewedby

accessitemreviewedby = Accessitemreviewedby(
type='IDENTITY',
id='2c3780a46faadee4016fb4e018c20652',
name='Allen Albertson'
)

```
[[Back to top]](#) 

