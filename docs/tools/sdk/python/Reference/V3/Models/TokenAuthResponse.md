---
id: token-auth-response
title: TokenAuthResponse
pagination_label: TokenAuthResponse
sidebar_label: TokenAuthResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'TokenAuthResponse', 'TokenAuthResponse'] 
slug: /tools/sdk/python/v3/models/token-auth-response
tags: ['SDK', 'Software Development Kit', 'TokenAuthResponse', 'TokenAuthResponse']
---

# TokenAuthResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** |  **Enum** [  'PENDING',    'SUCCESS',    'FAILED',    'LOCKOUT',    'NOT_ENOUGH_DATA' ] | MFA Authentication status | [optional] 
}

## Example

```python
from sailpoint.v3.models.token_auth_response import TokenAuthResponse

token_auth_response = TokenAuthResponse(
status='PENDING'
)

```
[[Back to top]](#) 

