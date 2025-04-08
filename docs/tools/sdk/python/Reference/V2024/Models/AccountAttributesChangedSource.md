---
id: v2024-account-attributes-changed-source
title: AccountAttributesChangedSource
pagination_label: AccountAttributesChangedSource
sidebar_label: AccountAttributesChangedSource
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountAttributesChangedSource', 'V2024AccountAttributesChangedSource'] 
slug: /tools/sdk/python/v2024/models/account-attributes-changed-source
tags: ['SDK', 'Software Development Kit', 'AccountAttributesChangedSource', 'V2024AccountAttributesChangedSource']
---

# AccountAttributesChangedSource

The source that contains the account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the object to which this reference applies | [required]
**type** |  **Enum** [  'SOURCE' ] | The type of object that is referenced | [required]
**name** | **str** | Human-readable display name of the object to which this reference applies | [required]
}

## Example

```python
from sailpoint.v2024.models.account_attributes_changed_source import AccountAttributesChangedSource

account_attributes_changed_source = AccountAttributesChangedSource(
id='4e4d982dddff4267ab12f0f1e72b5a6d',
type='SOURCE',
name='Corporate Active Directory'
)

```
[[Back to top]](#) 

