---
id: v2025-auth-user-slim-response
title: AuthUserSlimResponse
pagination_label: AuthUserSlimResponse
sidebar_label: AuthUserSlimResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AuthUserSlimResponse', 'V2025AuthUserSlimResponse'] 
slug: /tools/sdk/python/v2025/models/auth-user-slim-response
tags: ['SDK', 'Software Development Kit', 'AuthUserSlimResponse', 'V2025AuthUserSlimResponse']
---

# AuthUserSlimResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identity ID. | [optional] 
**uid** | **str** | Identity unique identifier. | [optional] 
**alias** | **str** | Identity alias. | [optional] 
**display_name** | **str** | Identity name in display format. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.auth_user_slim_response import AuthUserSlimResponse

auth_user_slim_response = AuthUserSlimResponse(
id='eea1c52bc51c4f7d95565f4f8d6c1e41',
uid='john.doe@testmail.identitysoon.com',
alias='john.doe',
display_name='John Doe'
)

```
[[Back to top]](#) 

