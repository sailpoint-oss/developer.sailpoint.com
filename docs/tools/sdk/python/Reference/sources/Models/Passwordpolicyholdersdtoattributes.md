---
id: passwordpolicyholdersdtoattributes
title: Passwordpolicyholdersdtoattributes
pagination_label: Passwordpolicyholdersdtoattributes
sidebar_label: Passwordpolicyholdersdtoattributes
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Passwordpolicyholdersdtoattributes', 'Passwordpolicyholdersdtoattributes'] 
slug: /tools/sdk/python/sources/models/passwordpolicyholdersdtoattributes
tags: ['SDK', 'Software Development Kit', 'Passwordpolicyholdersdtoattributes', 'Passwordpolicyholdersdtoattributes']
---

# Passwordpolicyholdersdtoattributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_attr** | [**[]PasswordpolicyholdersdtoattributesIdentityAttrInner**](passwordpolicyholdersdtoattributes-identity-attr-inner) | Attributes of PasswordPolicyHoldersDto | [optional] 
}

## Example

```python
from sailpoint.sources.models.passwordpolicyholdersdtoattributes import Passwordpolicyholdersdtoattributes

passwordpolicyholdersdtoattributes = Passwordpolicyholdersdtoattributes(
identity_attr=[
                    sailpoint.sources.models.passwordpolicyholdersdtoattributes_identity_attr_inner.passwordpolicyholdersdtoattributes_identityAttr_inner(
                        name = 'Country', 
                        value = 'Canada', )
                    ]
)

```
[[Back to top]](#) 

