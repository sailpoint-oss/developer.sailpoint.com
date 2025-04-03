---
id: token-auth-request
title: TokenAuthRequest
pagination_label: TokenAuthRequest
sidebar_label: TokenAuthRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'TokenAuthRequest', 'TokenAuthRequest'] 
slug: /tools/sdk/python/v3/models/token-auth-request
tags: ['SDK', 'Software Development Kit', 'TokenAuthRequest', 'TokenAuthRequest']
---

# TokenAuthRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | **str** | Token value | [required]
**user_alias** | **str** | User alias from table spt_identity field named 'name' | [required]
**delivery_type** |  **Enum** [  'SMS_PERSONAL',    'VOICE_PERSONAL',    'SMS_WORK',    'VOICE_WORK',    'EMAIL_WORK',    'EMAIL_PERSONAL' ] | Token delivery type | [required]
}

## Example

```python
from sailpoint.v3.models.token_auth_request import TokenAuthRequest

token_auth_request = TokenAuthRequest(
token='12345',
user_alias='will.albin',
delivery_type='EMAIL_WORK'
)

```
[[Back to top]](#) 

