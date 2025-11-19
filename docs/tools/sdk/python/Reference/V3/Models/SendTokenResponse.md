---
id: send-token-response
title: SendTokenResponse
pagination_label: SendTokenResponse
sidebar_label: SendTokenResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SendTokenResponse', 'SendTokenResponse'] 
slug: /tools/sdk/python/v3/models/send-token-response
tags: ['SDK', 'Software Development Kit', 'SendTokenResponse', 'SendTokenResponse']
---

# SendTokenResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **str** | The token request ID | [optional] 
**status** |  **Enum** [  'SUCCESS',    'FAILED' ] | Status of sending token | [optional] 
**error_message** | **str** | Error messages from token send request | [optional] 
}

## Example

```python
from sailpoint.v3.models.send_token_response import SendTokenResponse

send_token_response = SendTokenResponse(
request_id='089899f13a8f4da7824996191587bab9',
status='SUCCESS',
error_message='Unable to sent text message'
)

```
[[Back to top]](#) 

