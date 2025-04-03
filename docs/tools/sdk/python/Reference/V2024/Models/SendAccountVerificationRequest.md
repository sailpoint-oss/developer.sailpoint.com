---
id: v2024-send-account-verification-request
title: SendAccountVerificationRequest
pagination_label: SendAccountVerificationRequest
sidebar_label: SendAccountVerificationRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SendAccountVerificationRequest', 'V2024SendAccountVerificationRequest'] 
slug: /tools/sdk/python/v2024/models/send-account-verification-request
tags: ['SDK', 'Software Development Kit', 'SendAccountVerificationRequest', 'V2024SendAccountVerificationRequest']
---

# SendAccountVerificationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_name** | **str** | The source name where identity account password should be reset | [optional] 
**via** |  **Enum** [  'EMAIL_WORK',    'EMAIL_PERSONAL',    'LINK_WORK',    'LINK_PERSONAL' ] | The method to send notification | [required]
}

## Example

```python
from sailpoint.v2024.models.send_account_verification_request import SendAccountVerificationRequest

send_account_verification_request = SendAccountVerificationRequest(
source_name='Active Directory Source',
via='EMAIL_WORK'
)

```
[[Back to top]](#) 

