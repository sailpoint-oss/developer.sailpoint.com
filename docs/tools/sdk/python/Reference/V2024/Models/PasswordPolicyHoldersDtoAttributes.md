---
id: v2024-password-policy-holders-dto-attributes
title: PasswordPolicyHoldersDtoAttributes
pagination_label: PasswordPolicyHoldersDtoAttributes
sidebar_label: PasswordPolicyHoldersDtoAttributes
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PasswordPolicyHoldersDtoAttributes', 'V2024PasswordPolicyHoldersDtoAttributes'] 
slug: /tools/sdk/python/v2024/models/password-policy-holders-dto-attributes
tags: ['SDK', 'Software Development Kit', 'PasswordPolicyHoldersDtoAttributes', 'V2024PasswordPolicyHoldersDtoAttributes']
---

# PasswordPolicyHoldersDtoAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_attr** | [**[]PasswordPolicyHoldersDtoAttributesIdentityAttrInner**](password-policy-holders-dto-attributes-identity-attr-inner) | Attributes of PasswordPolicyHoldersDto | [optional] 
}

## Example

```python
from sailpoint.v2024.models.password_policy_holders_dto_attributes import PasswordPolicyHoldersDtoAttributes

password_policy_holders_dto_attributes = PasswordPolicyHoldersDtoAttributes(
identity_attr=[
                    sailpoint.v2024.models.password_policy_holders_dto_attributes_identity_attr_inner.PasswordPolicyHoldersDtoAttributes_identityAttr_inner(
                        name = 'Country', 
                        value = 'Canada', )
                    ]
)

```
[[Back to top]](#) 

