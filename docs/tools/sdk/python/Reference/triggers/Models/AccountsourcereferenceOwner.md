---
id: accountsourcereference-owner
title: AccountsourcereferenceOwner
pagination_label: AccountsourcereferenceOwner
sidebar_label: AccountsourcereferenceOwner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountsourcereferenceOwner', 'AccountsourcereferenceOwner'] 
slug: /tools/sdk/python/triggers/models/accountsourcereference-owner
tags: ['SDK', 'Software Development Kit', 'AccountsourcereferenceOwner', 'AccountsourcereferenceOwner']
---

# AccountsourcereferenceOwner

Details about the owner of the source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the source owner. | [required]
**name** | **str** | Name of the source owner. | [required]
}

## Example

```python
from sailpoint.triggers.models.accountsourcereference_owner import AccountsourcereferenceOwner

accountsourcereference_owner = AccountsourcereferenceOwner(
id='owner-123',
name='owner-name'
)

```
[[Back to top]](#) 

