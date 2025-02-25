---
id: v2024-bearer-token-auth-config
title: BearerTokenAuthConfig
pagination_label: BearerTokenAuthConfig
sidebar_label: BearerTokenAuthConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'BearerTokenAuthConfig', 'V2024BearerTokenAuthConfig'] 
slug: /tools/sdk/python/v2024/models/bearer-token-auth-config
tags: ['SDK', 'Software Development Kit', 'BearerTokenAuthConfig', 'V2024BearerTokenAuthConfig']
---

# BearerTokenAuthConfig

Config required if BEARER_TOKEN authentication is used. On response, this field is set to null as to not return secrets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bearer_token** | **str** | Bearer token | [optional] 
}

## Example

```python
from sailpoint.v2024.models.bearer_token_auth_config import BearerTokenAuthConfig

bearer_token_auth_config = BearerTokenAuthConfig(
bearer_token=''
)

```
[[Back to top]](#) 

