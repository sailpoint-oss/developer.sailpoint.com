---
id: okta-verification-request
title: OktaVerificationRequest
pagination_label: OktaVerificationRequest
sidebar_label: OktaVerificationRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'OktaVerificationRequest', 'OktaVerificationRequest'] 
slug: /tools/sdk/python/v3/models/okta-verification-request
tags: ['SDK', 'Software Development Kit', 'OktaVerificationRequest', 'OktaVerificationRequest']
---

# OktaVerificationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_id** | **str** | User identifier for Verification request. The value of the user's attribute. | [required]
}

## Example

```python
from sailpoint.v3.models.okta_verification_request import OktaVerificationRequest

okta_verification_request = OktaVerificationRequest(
user_id='example@mail.com'
)

```
[[Back to top]](#) 

