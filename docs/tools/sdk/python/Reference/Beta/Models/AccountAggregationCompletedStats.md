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
**scanned** | **int** | Number of accounts scanned/iterated over. | [required]
**unchanged** | **int** | Number of accounts that existed before but had no changes. | [required]
**changed** | **int** | Number of accounts that existed before but had changes. | [required]
**added** | **int** | Number of accounts that are new and didn't previously exist. | [required]
**removed** | **int** | Number accounts that existed before but were removed and no longer exist. | [required]
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

