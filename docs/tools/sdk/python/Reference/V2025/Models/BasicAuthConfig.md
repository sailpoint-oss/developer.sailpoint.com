---
id: v2025-basic-auth-config
title: BasicAuthConfig
pagination_label: BasicAuthConfig
sidebar_label: BasicAuthConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'BasicAuthConfig', 'V2025BasicAuthConfig'] 
slug: /tools/sdk/python/v2025/models/basic-auth-config
tags: ['SDK', 'Software Development Kit', 'BasicAuthConfig', 'V2025BasicAuthConfig']
---

# BasicAuthConfig

Config required if BASIC_AUTH is used.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_name** | **str** | The username to authenticate. | [optional] 
**password** | **str** | The password to authenticate. On response, this field is set to null as to not return secrets. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.basic_auth_config import BasicAuthConfig

basic_auth_config = BasicAuthConfig(
user_name='user@example.com',
password=''
)

```
[[Back to top]](#) 

