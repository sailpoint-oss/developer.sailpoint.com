---
id: v2024-account-uncorrelated-source
title: AccountUncorrelatedSource
pagination_label: AccountUncorrelatedSource
sidebar_label: AccountUncorrelatedSource
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountUncorrelatedSource', 'V2024AccountUncorrelatedSource'] 
slug: /tools/sdk/python/v2024/models/account-uncorrelated-source
tags: ['SDK', 'Software Development Kit', 'AccountUncorrelatedSource', 'V2024AccountUncorrelatedSource']
---

# AccountUncorrelatedSource

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
from sailpoint.v2024.models.account_uncorrelated_source import AccountUncorrelatedSource

account_uncorrelated_source = AccountUncorrelatedSource(
type='SOURCE',
id='2c6180835d191a86015d28455b4b231b',
name='Corporate Directory'
)

```
[[Back to top]](#) 

