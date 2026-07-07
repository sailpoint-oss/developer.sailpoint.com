---
id: accountcorrelated-source
title: AccountcorrelatedSource
pagination_label: AccountcorrelatedSource
sidebar_label: AccountcorrelatedSource
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountcorrelatedSource', 'AccountcorrelatedSource'] 
slug: /tools/sdk/python/triggers/models/accountcorrelated-source
tags: ['SDK', 'Software Development Kit', 'AccountcorrelatedSource', 'AccountcorrelatedSource']
---

# AccountcorrelatedSource

The source the accounts are being correlated from.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'SOURCE' ] | The DTO type of the source the accounts are being correlated from. | [required]
**id** | **str** | The ID of the source the accounts are being correlated from. | [required]
**name** | **str** | Display name of the source the accounts are being correlated from. | [required]
}

## Example

```python
from sailpoint.triggers.models.accountcorrelated_source import AccountcorrelatedSource

accountcorrelated_source = AccountcorrelatedSource(
type='SOURCE',
id='2c9180835d191a86015d28455b4b232a',
name='HR Active Directory'
)

```
[[Back to top]](#) 

