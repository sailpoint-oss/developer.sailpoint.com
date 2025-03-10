---
id: beta-send-account-verification-request
title: SendAccountVerificationRequest
pagination_label: SendAccountVerificationRequest
sidebar_label: SendAccountVerificationRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SendAccountVerificationRequest', 'BetaSendAccountVerificationRequest'] 
slug: /tools/sdk/python/beta/models/send-account-verification-request
tags: ['SDK', 'Software Development Kit', 'SendAccountVerificationRequest', 'BetaSendAccountVerificationRequest']
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
from sailpoint.beta.models.send_account_verification_request import SendAccountVerificationRequest

send_account_verification_request = SendAccountVerificationRequest(
source_name='Active Directory Source',
via='EMAIL_WORK'
)

```
[[Back to top]](#) 

