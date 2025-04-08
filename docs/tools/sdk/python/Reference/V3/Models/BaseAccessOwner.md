---
id: base-access-owner
title: BaseAccessOwner
pagination_label: BaseAccessOwner
sidebar_label: BaseAccessOwner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'BaseAccessOwner', 'BaseAccessOwner'] 
slug: /tools/sdk/python/v3/models/base-access-owner
tags: ['SDK', 'Software Development Kit', 'BaseAccessOwner', 'BaseAccessOwner']
---

# BaseAccessOwner

Owner's identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | Owner's DTO type. | [optional] 
**id** | **str** | Owner's identity ID. | [optional] 
**name** | **str** | Owner's display name. | [optional] 
**email** | **str** | Owner's email. | [optional] 
}

## Example

```python
from sailpoint.v3.models.base_access_owner import BaseAccessOwner

base_access_owner = BaseAccessOwner(
type='IDENTITY',
id='2c9180a46faadee4016fb4e018c20639',
name='Support',
email='cloud-support@sailpoint.com'
)

```
[[Back to top]](#) 

