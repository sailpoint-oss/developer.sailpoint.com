---
id: accountaggregationcompleted-stats
title: AccountaggregationcompletedStats
pagination_label: AccountaggregationcompletedStats
sidebar_label: AccountaggregationcompletedStats
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountaggregationcompletedStats', 'AccountaggregationcompletedStats'] 
slug: /tools/sdk/python/triggers/models/accountaggregationcompleted-stats
tags: ['SDK', 'Software Development Kit', 'AccountaggregationcompletedStats', 'AccountaggregationcompletedStats']
---

# AccountaggregationcompletedStats

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
from sailpoint.triggers.models.accountaggregationcompleted_stats import AccountaggregationcompletedStats

accountaggregationcompleted_stats = AccountaggregationcompletedStats(
scanned=200,
unchanged=190,
changed=6,
added=4,
removed=3
)

```
[[Back to top]](#) 

