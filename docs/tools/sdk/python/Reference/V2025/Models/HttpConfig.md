---
id: v2025-http-config
title: HttpConfig
pagination_label: HttpConfig
sidebar_label: HttpConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'HttpConfig', 'V2025HttpConfig'] 
slug: /tools/sdk/python/v2025/models/http-config
tags: ['SDK', 'Software Development Kit', 'HttpConfig', 'V2025HttpConfig']
---

# HttpConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | URL of the external/custom integration. | [required]
**http_dispatch_mode** | [**HttpDispatchMode**](http-dispatch-mode) |  | [required]
**http_authentication_type** | [**HttpAuthenticationType**](http-authentication-type) |  | [optional] [default to HttpAuthenticationType.NO_AUTH]
**basic_auth_config** | [**BasicAuthConfig**](basic-auth-config) |  | [optional] 
**bearer_token_auth_config** | [**BearerTokenAuthConfig**](bearer-token-auth-config) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.http_config import HttpConfig

http_config = HttpConfig(
url='https://www.example.com',
http_dispatch_mode='SYNC',
http_authentication_type='NO_AUTH',
basic_auth_config=sailpoint.v2025.models.basic_auth_config.Basic Auth Config(
                    user_name = 'user@example.com', 
                    password = '', ),
bearer_token_auth_config=sailpoint.v2025.models.bearer_token_auth_config.Bearer Token Auth Config(
                    bearer_token = '', )
)

```
[[Back to top]](#) 

