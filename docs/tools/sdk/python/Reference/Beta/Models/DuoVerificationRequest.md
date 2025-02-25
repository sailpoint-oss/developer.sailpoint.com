---
id: beta-duo-verification-request
title: DuoVerificationRequest
pagination_label: DuoVerificationRequest
sidebar_label: DuoVerificationRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'DuoVerificationRequest', 'BetaDuoVerificationRequest'] 
slug: /tools/sdk/python/beta/models/duo-verification-request
tags: ['SDK', 'Software Development Kit', 'DuoVerificationRequest', 'BetaDuoVerificationRequest']
---

# DuoVerificationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_id** | **str** | User id for Verification request. | [required]
**signed_response** | **str** | User id for Verification request. | [required]
}

## Example

```python
from sailpoint.beta.models.duo_verification_request import DuoVerificationRequest

duo_verification_request = DuoVerificationRequest(
user_id='2c9180947f0ef465017f215cbcfd004b',
signed_response='AUTH|d2lsbC5hbGJpbnxESTZNMFpHSThKQVRWTVpZN0M5VXwxNzAxMjUzMDg5|f1f5f8ced5b340f3d303b05d0efa0e43b6a8f970:APP|d2lsbC5hbGJpbnxESTZNMFpHSThKQVRWTVpZN0M5VXwxNzAxMjU2NjE5|cb44cf44353f5127edcae31b1da0355f87357db2'
)

```
[[Back to top]](#) 

