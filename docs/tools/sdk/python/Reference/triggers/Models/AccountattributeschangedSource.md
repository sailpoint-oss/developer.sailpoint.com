---
id: accountattributeschanged-source
title: AccountattributeschangedSource
pagination_label: AccountattributeschangedSource
sidebar_label: AccountattributeschangedSource
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountattributeschangedSource', 'AccountattributeschangedSource'] 
slug: /tools/sdk/python/triggers/models/accountattributeschanged-source
tags: ['SDK', 'Software Development Kit', 'AccountattributeschangedSource', 'AccountattributeschangedSource']
---

# AccountattributeschangedSource

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
from sailpoint.triggers.models.accountattributeschanged_source import AccountattributeschangedSource

accountattributeschanged_source = AccountattributeschangedSource(
id='4e4d982dddff4267ab12f0f1e72b5a6d',
type='SOURCE',
name='Corporate Active Directory'
)

```
[[Back to top]](#) 

