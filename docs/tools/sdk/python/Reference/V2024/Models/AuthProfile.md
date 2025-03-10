---
id: v2024-auth-profile
title: AuthProfile
pagination_label: AuthProfile
sidebar_label: AuthProfile
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AuthProfile', 'V2024AuthProfile'] 
slug: /tools/sdk/python/v2024/models/auth-profile
tags: ['SDK', 'Software Development Kit', 'AuthProfile', 'V2024AuthProfile']
---

# AuthProfile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Authentication Profile name. | [optional] 
**off_network** | **bool** | Use it to block access from off network. | [optional] [default to False]
**untrusted_geography** | **bool** | Use it to block access from untrusted geoographies. | [optional] [default to False]
**application_id** | **str** | Application ID. | [optional] 
**application_name** | **str** | Application name. | [optional] 
**type** |  **Enum** [  'BLOCK',    'MFA',    'NON_PTA',    'PTA' ] | Type of the Authentication Profile. | [optional] 
**strong_auth_login** | **bool** | Use it to enable strong authentication. | [optional] [default to False]
}

## Example

```python
from sailpoint.v2024.models.auth_profile import AuthProfile

auth_profile = AuthProfile(
name='EndToEnd-Profile',
off_network=True,
untrusted_geography=True,
application_id='2c91808458ae7a4f0158b1bbf8af0628',
application_name='EndToEnd-Source',
type='PTA',
strong_auth_login=True
)

```
[[Back to top]](#) 

