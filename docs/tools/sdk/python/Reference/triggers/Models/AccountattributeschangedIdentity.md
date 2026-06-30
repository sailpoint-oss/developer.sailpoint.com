---
id: accountattributeschanged-identity
title: AccountattributeschangedIdentity
pagination_label: AccountattributeschangedIdentity
sidebar_label: AccountattributeschangedIdentity
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountattributeschangedIdentity', 'AccountattributeschangedIdentity'] 
slug: /tools/sdk/python/triggers/models/accountattributeschanged-identity
tags: ['SDK', 'Software Development Kit', 'AccountattributeschangedIdentity', 'AccountattributeschangedIdentity']
---

# AccountattributeschangedIdentity

The identity whose account attributes were updated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | DTO type of the identity whose account attributes were updated. | [required]
**id** | **str** | ID of the identity whose account attributes were updated. | [required]
**name** | **str** | Display name of the identity whose account attributes were updated. | [required]
}

## Example

```python
from sailpoint.triggers.models.accountattributeschanged_identity import AccountattributeschangedIdentity

accountattributeschanged_identity = AccountattributeschangedIdentity(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20642',
name='Michael Michaels'
)

```
[[Back to top]](#) 

