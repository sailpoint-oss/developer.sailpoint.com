---
id: mfaduoconfig
title: Mfaduoconfig
pagination_label: Mfaduoconfig
sidebar_label: Mfaduoconfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Mfaduoconfig', 'Mfaduoconfig'] 
slug: /tools/sdk/python/mfa-configuration/models/mfaduoconfig
tags: ['SDK', 'Software Development Kit', 'Mfaduoconfig', 'Mfaduoconfig']
---

# Mfaduoconfig


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
from sailpoint.mfa_configuration.models.mfaduoconfig import Mfaduoconfig

mfaduoconfig = Mfaduoconfig(
mfa_method='duo-web',
enabled=True,
host='example.com',
access_key='qw123Y3QlA5UqocYpdU3rEkzrK2D497y',
identity_attribute='email',
config_properties={"skey":"qwERttyZx1CdlQye2Vwtbsjr3HKddy4BAiCXjc5x","ikey":"Q123WE45R6TY7890ZXCV"}
)

```
[[Back to top]](#) 

