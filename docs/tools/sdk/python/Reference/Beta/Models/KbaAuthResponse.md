---
id: beta-kba-auth-response
title: KbaAuthResponse
pagination_label: KbaAuthResponse
sidebar_label: KbaAuthResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'KbaAuthResponse', 'BetaKbaAuthResponse'] 
slug: /tools/sdk/python/beta/models/kba-auth-response
tags: ['SDK', 'Software Development Kit', 'KbaAuthResponse', 'BetaKbaAuthResponse']
---

# KbaAuthResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kba_auth_response_items** | [**[]KbaAuthResponseItem**](kba-auth-response-item) |  | [optional] 
**status** |  **Enum** [  'PENDING',    'SUCCESS',    'FAILED',    'LOCKOUT',    'NOT_ENOUGH_DATA' ] | MFA Authentication status | [optional] 
}

## Example

```python
from sailpoint.beta.models.kba_auth_response import KbaAuthResponse

kba_auth_response = KbaAuthResponse(
kba_auth_response_items=[{questionId=089899f13a8f4da7824996191587bab9, isVerified=false}],
status='PENDING'
)

```
[[Back to top]](#) 

