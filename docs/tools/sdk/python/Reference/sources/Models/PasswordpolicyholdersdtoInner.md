---
id: passwordpolicyholdersdto-inner
title: PasswordpolicyholdersdtoInner
pagination_label: PasswordpolicyholdersdtoInner
sidebar_label: PasswordpolicyholdersdtoInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PasswordpolicyholdersdtoInner', 'PasswordpolicyholdersdtoInner'] 
slug: /tools/sdk/python/sources/models/passwordpolicyholdersdto-inner
tags: ['SDK', 'Software Development Kit', 'PasswordpolicyholdersdtoInner', 'PasswordpolicyholdersdtoInner']
---

# PasswordpolicyholdersdtoInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy_id** | **str** | The password policy Id. | [optional] 
**policy_name** | **str** | The name of the password policy. | [optional] 
**selectors** | [**Passwordpolicyholdersdtoattributes**](passwordpolicyholdersdtoattributes) |  | [optional] 
}

## Example

```python
from sailpoint.sources.models.passwordpolicyholdersdto_inner import PasswordpolicyholdersdtoInner

passwordpolicyholdersdto_inner = PasswordpolicyholdersdtoInner(
policy_id='2c91808e7d976f3b017d9f5ceae440c8',
policy_name='PasswordPolicy Example',
selectors=sailpoint.sources.models.password_policy_holders_dto_attributes.Password Policy Holders Dto Attributes(
                    identity_attr = [
                        sailpoint.sources.models.passwordpolicyholdersdtoattributes_identity_attr_inner.passwordpolicyholdersdtoattributes_identityAttr_inner(
                            name = 'Country', 
                            value = 'Canada', )
                        ], )
)

```
[[Back to top]](#) 

