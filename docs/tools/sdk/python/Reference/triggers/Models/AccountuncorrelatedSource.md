---
id: accountuncorrelated-source
title: AccountuncorrelatedSource
pagination_label: AccountuncorrelatedSource
sidebar_label: AccountuncorrelatedSource
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountuncorrelatedSource', 'AccountuncorrelatedSource'] 
slug: /tools/sdk/python/triggers/models/accountuncorrelated-source
tags: ['SDK', 'Software Development Kit', 'AccountuncorrelatedSource', 'AccountuncorrelatedSource']
---

# AccountuncorrelatedSource

The source the accounts are uncorrelated from.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'SOURCE' ] | The DTO type of the source the accounts are uncorrelated from. | [required]
**id** | **str** | The ID of the source the accounts are uncorrelated from. | [required]
**name** | **str** | Display name of the source the accounts are uncorrelated from. | [required]
}

## Example

```python
from sailpoint.triggers.models.accountuncorrelated_source import AccountuncorrelatedSource

accountuncorrelated_source = AccountuncorrelatedSource(
type='SOURCE',
id='2c6180835d191a86015d28455b4b231b',
name='Corporate Directory'
)

```
[[Back to top]](#) 

