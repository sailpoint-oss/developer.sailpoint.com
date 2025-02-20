---
id: base-access-all-of-owner
title: BaseAccessAllOfOwner
pagination_label: BaseAccessAllOfOwner
sidebar_label: BaseAccessAllOfOwner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'BaseAccessAllOfOwner', 'BaseAccessAllOfOwner'] 
slug: /tools/sdk/python/v3/models/base-access-all-of-owner
tags: ['SDK', 'Software Development Kit', 'BaseAccessAllOfOwner', 'BaseAccessAllOfOwner']
---

# BaseAccessAllOfOwner

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
from sailpoint.v3.models.base_access_all_of_owner import BaseAccessAllOfOwner

base_access_all_of_owner = BaseAccessAllOfOwner(
type='IDENTITY',
id='2c9180a46faadee4016fb4e018c20639',
name='Support',
email='cloud-support@sailpoint.com'
)

```
[[Back to top]](#) 

