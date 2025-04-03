---
id: v2025-accounts-collected-for-aggregation-stats
title: AccountsCollectedForAggregationStats
pagination_label: AccountsCollectedForAggregationStats
sidebar_label: AccountsCollectedForAggregationStats
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountsCollectedForAggregationStats', 'V2025AccountsCollectedForAggregationStats'] 
slug: /tools/sdk/python/v2025/models/accounts-collected-for-aggregation-stats
tags: ['SDK', 'Software Development Kit', 'AccountsCollectedForAggregationStats', 'V2025AccountsCollectedForAggregationStats']
---

# AccountsCollectedForAggregationStats

Overall statistics about the account collection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scanned** | **int** | The number of accounts which were scanned / iterated over. | [required]
**unchanged** | **int** | The number of accounts which existed before, but had no changes. | [required]
**changed** | **int** | The number of accounts which existed before, but had changes. | [required]
**added** | **int** | The number of accounts which are new - have not existed before. | [required]
**removed** | **int** | The number accounts which existed before, but no longer exist (thus getting removed). | [required]
}

## Example

```python
from sailpoint.v2025.models.accounts_collected_for_aggregation_stats import AccountsCollectedForAggregationStats

accounts_collected_for_aggregation_stats = AccountsCollectedForAggregationStats(
scanned=200,
unchanged=190,
changed=6,
added=4,
removed=3
)

```
[[Back to top]](#) 

