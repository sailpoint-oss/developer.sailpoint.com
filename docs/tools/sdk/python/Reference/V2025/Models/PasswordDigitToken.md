---
id: v2025-password-digit-token
title: PasswordDigitToken
pagination_label: PasswordDigitToken
sidebar_label: PasswordDigitToken
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PasswordDigitToken', 'V2025PasswordDigitToken'] 
slug: /tools/sdk/python/v2025/models/password-digit-token
tags: ['SDK', 'Software Development Kit', 'PasswordDigitToken', 'V2025PasswordDigitToken']
---

# PasswordDigitToken


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**digit_token** | **str** | The digit token for password management | [optional] 
**request_id** | **str** | The reference ID of the digit token generation request | [optional] 
}

## Example

```python
from sailpoint.v2025.models.password_digit_token import PasswordDigitToken

password_digit_token = PasswordDigitToken(
digit_token='09087713',
request_id='e1267ecd-fcd9-4c73-9c55-12555efad136'
)

```
[[Back to top]](#) 

