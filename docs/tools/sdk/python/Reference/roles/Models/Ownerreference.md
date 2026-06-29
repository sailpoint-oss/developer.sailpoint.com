---
id: ownerreference
title: Ownerreference
pagination_label: Ownerreference
sidebar_label: Ownerreference
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Ownerreference', 'Ownerreference'] 
slug: /tools/sdk/python/roles/models/ownerreference
tags: ['SDK', 'Software Development Kit', 'Ownerreference', 'Ownerreference']
---

# Ownerreference

Owner of the object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | Owner type. This field must be either left null or set to 'IDENTITY' on input, otherwise a 400 Bad Request error will result. | [optional] 
**id** | **str** | Owner's identity ID. | [optional] 
**name** | **str** | Owner's name. It may be left null or omitted in a POST or PATCH. If set, it must match the current value of the owner's display name, otherwise a 400 Bad Request error will result. | [optional] 
}

## Example

```python
from sailpoint.roles.models.ownerreference import Ownerreference

ownerreference = Ownerreference(
type='IDENTITY',
id='2c9180a46faadee4016fb4e018c20639',
name='support'
)

```
[[Back to top]](#) 

