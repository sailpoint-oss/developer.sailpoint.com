---
id: v2025-account-aggregation-completed-source
title: AccountAggregationCompletedSource
pagination_label: AccountAggregationCompletedSource
sidebar_label: AccountAggregationCompletedSource
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountAggregationCompletedSource', 'V2025AccountAggregationCompletedSource'] 
slug: /tools/sdk/python/v2025/models/account-aggregation-completed-source
tags: ['SDK', 'Software Development Kit', 'AccountAggregationCompletedSource', 'V2025AccountAggregationCompletedSource']
---

# AccountAggregationCompletedSource

The source the accounts are being aggregated from.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'SOURCE' ] | The DTO type of the source the accounts are being aggregated from. | [required]
**id** | **str** | The ID of the source the accounts are being aggregated from. | [required]
**name** | **str** | Display name of the source the accounts are being aggregated from. | [required]
}

## Example

```python
from sailpoint.v2025.models.account_aggregation_completed_source import AccountAggregationCompletedSource

account_aggregation_completed_source = AccountAggregationCompletedSource(
type='SOURCE',
id='2c9180835d191a86015d28455b4b232a',
name='HR Active Directory'
)

```
[[Back to top]](#) 

