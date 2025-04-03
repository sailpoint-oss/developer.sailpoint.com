---
id: v2025-password-digit-token-reset
title: PasswordDigitTokenReset
pagination_label: PasswordDigitTokenReset
sidebar_label: PasswordDigitTokenReset
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PasswordDigitTokenReset', 'V2025PasswordDigitTokenReset'] 
slug: /tools/sdk/python/v2025/models/password-digit-token-reset
tags: ['SDK', 'Software Development Kit', 'PasswordDigitTokenReset', 'V2025PasswordDigitTokenReset']
---

# PasswordDigitTokenReset


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_id** | **str** | The uid of the user requested for digit token | [required]
**length** | **int** | The length of digit token. It should be from 6 to 18, inclusive. The default value is 6. | [optional] 
**duration_minutes** | **int** | The time to live for the digit token in minutes. The default value is 5 minutes. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.password_digit_token_reset import PasswordDigitTokenReset

password_digit_token_reset = PasswordDigitTokenReset(
user_id='Abby.Smith',
length=8,
duration_minutes=5
)

```
[[Back to top]](#) 

