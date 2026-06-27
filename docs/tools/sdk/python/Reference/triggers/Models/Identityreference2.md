---
id: identityreference2
title: Identityreference2
pagination_label: Identityreference2
sidebar_label: Identityreference2
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Identityreference2', 'Identityreference2'] 
slug: /tools/sdk/python/triggers/models/identityreference2
tags: ['SDK', 'Software Development Kit', 'Identityreference2', 'Identityreference2']
---

# Identityreference2

Details about the identity correlated with the account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the identity that is correlated with this account. | [required]
**name** | **str** | The name of the identity that is correlated with this account. | [required]
**alias** | **str** | The alias of the identity. | [required]
**email** | **str** | The email of the identity. | [required]
}

## Example

```python
from sailpoint.triggers.models.identityreference2 import Identityreference2

identityreference2 = Identityreference2(
id='ee769173319b41d19ccec6c235423237b',
name='john.doe',
alias='jdoe',
email='john.doe@email.com'
)

```
[[Back to top]](#) 

