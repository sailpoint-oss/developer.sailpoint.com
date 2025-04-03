---
id: verification-response
title: VerificationResponse
pagination_label: VerificationResponse
sidebar_label: VerificationResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'VerificationResponse', 'VerificationResponse'] 
slug: /tools/sdk/python/v3/models/verification-response
tags: ['SDK', 'Software Development Kit', 'VerificationResponse', 'VerificationResponse']
---

# VerificationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **str** | The verificationPollRequest request ID | [optional] 
**status** |  **Enum** [  'PENDING',    'SUCCESS',    'FAILED',    'LOCKOUT',    'NOT_ENOUGH_DATA' ] | MFA Authentication status | [optional] 
**error** | **str** | Error messages from MFA verification request | [optional] 
}

## Example

```python
from sailpoint.v3.models.verification_response import VerificationResponse

verification_response = VerificationResponse(
request_id='089899f13a8f4da7824996191587bab9',
status='SUCCESS',
error='Unable to connect DUO Service during verification'
)

```
[[Back to top]](#) 

