---
id: beta-send-token-request
title: SendTokenRequest
pagination_label: SendTokenRequest
sidebar_label: SendTokenRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SendTokenRequest', 'BetaSendTokenRequest'] 
slug: /tools/sdk/python/beta/models/send-token-request
tags: ['SDK', 'Software Development Kit', 'SendTokenRequest', 'BetaSendTokenRequest']
---

# SendTokenRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_alias** | **str** | User alias from table spt_identity field named 'name' | [required]
**delivery_type** |  **Enum** [  'SMS_PERSONAL',    'VOICE_PERSONAL',    'SMS_WORK',    'VOICE_WORK',    'EMAIL_WORK',    'EMAIL_PERSONAL' ] | Token delivery type | [required]
}

## Example

```python
from sailpoint.beta.models.send_token_request import SendTokenRequest

send_token_request = SendTokenRequest(
user_alias='will.albin',
delivery_type='EMAIL_WORK'
)

```
[[Back to top]](#) 

