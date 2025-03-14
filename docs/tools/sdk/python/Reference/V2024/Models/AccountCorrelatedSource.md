---
id: v2024-account-correlated-source
title: AccountCorrelatedSource
pagination_label: AccountCorrelatedSource
sidebar_label: AccountCorrelatedSource
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountCorrelatedSource', 'V2024AccountCorrelatedSource'] 
slug: /tools/sdk/python/v2024/models/account-correlated-source
tags: ['SDK', 'Software Development Kit', 'AccountCorrelatedSource', 'V2024AccountCorrelatedSource']
---

# AccountCorrelatedSource

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
from sailpoint.v2024.models.account_correlated_source import AccountCorrelatedSource

account_correlated_source = AccountCorrelatedSource(
type='SOURCE',
id='2c9180835d191a86015d28455b4b232a',
name='HR Active Directory'
)

```
[[Back to top]](#) 

