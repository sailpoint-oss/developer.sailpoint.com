---
id: accessitemrequester
title: Accessitemrequester
pagination_label: Accessitemrequester
sidebar_label: Accessitemrequester
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accessitemrequester', 'Accessitemrequester'] 
slug: /tools/sdk/python/access-request-approvals/models/accessitemrequester
tags: ['SDK', 'Software Development Kit', 'Accessitemrequester', 'Accessitemrequester']
---

# Accessitemrequester

Access item requester's identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | Access item requester's DTO type. | [optional] 
**id** | **str** | Access item requester's identity ID. | [optional] 
**name** | **str** | Access item owner's human-readable display name. | [optional] 
}

## Example

```python
from sailpoint.access_request_approvals.models.accessitemrequester import Accessitemrequester

accessitemrequester = Accessitemrequester(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20648',
name='William Wilson'
)

```
[[Back to top]](#) 

