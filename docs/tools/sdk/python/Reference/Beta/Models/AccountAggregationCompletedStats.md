---
id: beta-account-aggregation-completed-stats
title: AccountAggregationCompletedStats
pagination_label: AccountAggregationCompletedStats
sidebar_label: AccountAggregationCompletedStats
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountAggregationCompletedStats', 'BetaAccountAggregationCompletedStats'] 
slug: /tools/sdk/python/beta/models/account-aggregation-completed-stats
tags: ['SDK', 'Software Development Kit', 'AccountAggregationCompletedStats', 'BetaAccountAggregationCompletedStats']
---

# AccountAggregationCompletedStats

Overall statistics about the account aggregation.

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
from sailpoint.beta.models.account_aggregation_completed_stats import AccountAggregationCompletedStats

account_aggregation_completed_stats = AccountAggregationCompletedStats(
scanned=200,
unchanged=190,
changed=6,
added=4,
removed=3
)

```
[[Back to top]](#) 

