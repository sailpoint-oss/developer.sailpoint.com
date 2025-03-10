---
id: v2024-password-policy-holders-dto-inner
title: PasswordPolicyHoldersDtoInner
pagination_label: PasswordPolicyHoldersDtoInner
sidebar_label: PasswordPolicyHoldersDtoInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PasswordPolicyHoldersDtoInner', 'V2024PasswordPolicyHoldersDtoInner'] 
slug: /tools/sdk/python/v2024/models/password-policy-holders-dto-inner
tags: ['SDK', 'Software Development Kit', 'PasswordPolicyHoldersDtoInner', 'V2024PasswordPolicyHoldersDtoInner']
---

# PasswordPolicyHoldersDtoInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy_id** | **str** | The password policy Id. | [optional] 
**policy_name** | **str** | The name of the password policy. | [optional] 
**selectors** | [**PasswordPolicyHoldersDtoAttributes**](password-policy-holders-dto-attributes) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.password_policy_holders_dto_inner import PasswordPolicyHoldersDtoInner

password_policy_holders_dto_inner = PasswordPolicyHoldersDtoInner(
policy_id='2c91808e7d976f3b017d9f5ceae440c8',
policy_name='PasswordPolicy Example',
selectors={identityAttr=[{name=displayName, value=Robert}, {name=lastname, value=Juice}]}
)

```
[[Back to top]](#) 

