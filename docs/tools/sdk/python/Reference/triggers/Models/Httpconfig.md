---
id: httpconfig
title: Httpconfig
pagination_label: Httpconfig
sidebar_label: Httpconfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Httpconfig', 'Httpconfig'] 
slug: /tools/sdk/python/triggers/models/httpconfig
tags: ['SDK', 'Software Development Kit', 'Httpconfig', 'Httpconfig']
---

# Httpconfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | URL of the external/custom integration. | [required]
**http_dispatch_mode** | [**Httpdispatchmode**](httpdispatchmode) |  | [required]
**http_authentication_type** | [**Httpauthenticationtype**](httpauthenticationtype) |  | [optional] [default to Httpauthenticationtype.NO_AUTH]
**basic_auth_config** | [**Basicauthconfig**](basicauthconfig) |  | [optional] 
**bearer_token_auth_config** | [**Bearertokenauthconfig**](bearertokenauthconfig) |  | [optional] 
}

## Example

```python
from sailpoint.triggers.models.httpconfig import Httpconfig

httpconfig = Httpconfig(
url='https://www.example.com',
http_dispatch_mode='SYNC',
http_authentication_type='NO_AUTH',
basic_auth_config=sailpoint.triggers.models.basic_auth_config.Basic Auth Config(
                    user_name = 'user@example.com', 
                    password = '', ),
bearer_token_auth_config=sailpoint.triggers.models.bearer_token_auth_config.Bearer Token Auth Config(
                    bearer_token = '', )
)

```
[[Back to top]](#) 

