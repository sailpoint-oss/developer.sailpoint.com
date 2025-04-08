---
id: beta-account-aggregation-completed-source
title: AccountAggregationCompletedSource
pagination_label: AccountAggregationCompletedSource
sidebar_label: AccountAggregationCompletedSource
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountAggregationCompletedSource', 'BetaAccountAggregationCompletedSource'] 
slug: /tools/sdk/python/beta/models/account-aggregation-completed-source
tags: ['SDK', 'Software Development Kit', 'AccountAggregationCompletedSource', 'BetaAccountAggregationCompletedSource']
---

# AccountAggregationCompletedSource

Source ISC is aggregating accounts from.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'SOURCE' ] | Source's DTO type. | [required]
**id** | **str** | Source's unique ID. | [required]
**name** | **str** | Source's name. | [required]
}

## Example

```python
from sailpoint.beta.models.account_aggregation_completed_source import AccountAggregationCompletedSource

account_aggregation_completed_source = AccountAggregationCompletedSource(
type='SOURCE',
id='2c9180835d191a86015d28455b4b232a',
name='HR Active Directory'
)

```
[[Back to top]](#) 

