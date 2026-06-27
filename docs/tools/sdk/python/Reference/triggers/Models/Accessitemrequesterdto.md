---
id: accessitemrequesterdto
title: Accessitemrequesterdto
pagination_label: Accessitemrequesterdto
sidebar_label: Accessitemrequesterdto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accessitemrequesterdto', 'Accessitemrequesterdto'] 
slug: /tools/sdk/python/triggers/models/accessitemrequesterdto
tags: ['SDK', 'Software Development Kit', 'Accessitemrequesterdto', 'Accessitemrequesterdto']
---

# Accessitemrequesterdto

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
from sailpoint.triggers.models.accessitemrequesterdto import Accessitemrequesterdto

accessitemrequesterdto = Accessitemrequesterdto(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20648',
name='William Wilson'
)

```
[[Back to top]](#) 

