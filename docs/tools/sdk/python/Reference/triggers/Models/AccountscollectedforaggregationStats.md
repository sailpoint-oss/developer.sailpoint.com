---
id: accountscollectedforaggregation-stats
title: AccountscollectedforaggregationStats
pagination_label: AccountscollectedforaggregationStats
sidebar_label: AccountscollectedforaggregationStats
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccountscollectedforaggregationStats', 'AccountscollectedforaggregationStats'] 
slug: /tools/sdk/python/triggers/models/accountscollectedforaggregation-stats
tags: ['SDK', 'Software Development Kit', 'AccountscollectedforaggregationStats', 'AccountscollectedforaggregationStats']
---

# AccountscollectedforaggregationStats

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
from sailpoint.triggers.models.accountscollectedforaggregation_stats import AccountscollectedforaggregationStats

accountscollectedforaggregation_stats = AccountscollectedforaggregationStats(
scanned=200,
unchanged=190,
changed=6,
added=4,
removed=3
)

```
[[Back to top]](#) 

