---
id: beta-token-auth-response
title: TokenAuthResponse
pagination_label: TokenAuthResponse
sidebar_label: TokenAuthResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'TokenAuthResponse', 'BetaTokenAuthResponse'] 
slug: /tools/sdk/python/beta/models/token-auth-response
tags: ['SDK', 'Software Development Kit', 'TokenAuthResponse', 'BetaTokenAuthResponse']
---

# TokenAuthResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** |  **Enum** [  'PENDING',    'SUCCESS',    'FAILED',    'LOCKOUT',    'NOT_ENOUGH_DATA' ] | MFA Authentication status | [optional] 
}

## Example

```python
from sailpoint.beta.models.token_auth_response import TokenAuthResponse

token_auth_response = TokenAuthResponse(
status='PENDING'
)

```
[[Back to top]](#) 

