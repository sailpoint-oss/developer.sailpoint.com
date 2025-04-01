---
id: v2025-mfa-duo-config
title: MfaDuoConfig
pagination_label: MfaDuoConfig
sidebar_label: MfaDuoConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MfaDuoConfig', 'V2025MfaDuoConfig'] 
slug: /tools/sdk/python/v2025/models/mfa-duo-config
tags: ['SDK', 'Software Development Kit', 'MfaDuoConfig', 'V2025MfaDuoConfig']
---

# MfaDuoConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mfa_method** | **str** | Mfa method name | [optional] 
**enabled** | **bool** | If MFA method is enabled. | [optional] [default to False]
**host** | **str** | The server host name or IP address of the MFA provider. | [optional] 
**access_key** | **str** | The secret key for authenticating requests to the MFA provider. | [optional] 
**identity_attribute** | **str** | Optional. The name of the attribute for mapping IdentityNow identity to the MFA provider. | [optional] 
**config_properties** | **map[string]object** | A map with additional config properties for the given MFA method - duo-web. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.mfa_duo_config import MfaDuoConfig

mfa_duo_config = MfaDuoConfig(
mfa_method='duo-web',
enabled=True,
host='example.com',
access_key='qw123Y3QlA5UqocYpdU3rEkzrK2D497y',
identity_attribute='email',
config_properties={skey=qwERttyZx1CdlQye2Vwtbsjr3HKddy4BAiCXjc5x, ikey=Q123WE45R6TY7890ZXCV}
)

```
[[Back to top]](#) 

