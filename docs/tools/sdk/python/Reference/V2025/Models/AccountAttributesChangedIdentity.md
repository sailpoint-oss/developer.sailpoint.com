---
id: v2025-account-attributes-changed-identity
title: AccountAttributesChangedIdentity
pagination_label: AccountAttributesChangedIdentity
sidebar_label: AccountAttributesChangedIdentity
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountAttributesChangedIdentity', 'V2025AccountAttributesChangedIdentity'] 
slug: /tools/sdk/python/v2025/models/account-attributes-changed-identity
tags: ['SDK', 'Software Development Kit', 'AccountAttributesChangedIdentity', 'V2025AccountAttributesChangedIdentity']
---

# AccountAttributesChangedIdentity

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
from sailpoint.v2025.models.account_attributes_changed_identity import AccountAttributesChangedIdentity

account_attributes_changed_identity = AccountAttributesChangedIdentity(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20642',
name='Michael Michaels'
)

```
[[Back to top]](#) 

