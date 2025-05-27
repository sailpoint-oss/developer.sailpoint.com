---
id: beta-accounts-collected-for-aggregation-stats
title: AccountsCollectedForAggregationStats
pagination_label: AccountsCollectedForAggregationStats
sidebar_label: AccountsCollectedForAggregationStats
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountsCollectedForAggregationStats', 'BetaAccountsCollectedForAggregationStats'] 
slug: /tools/sdk/powershell/beta/models/accounts-collected-for-aggregation-stats
tags: ['SDK', 'Software Development Kit', 'AccountsCollectedForAggregationStats', 'BetaAccountsCollectedForAggregationStats']
---


# AccountsCollectedForAggregationStats

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Scanned** | **Int32** | The number of accounts which were scanned / iterated over. | [required]
**Unchanged** | **Int32** | The number of accounts which existed before, but had no changes. | [required]
**Changed** | **Int32** | The number of accounts which existed before, but had changes. | [required]
**Added** | **Int32** | The number of accounts which are new - have not existed before. | [required]
**Removed** | **Int32** | The number accounts which existed before, but no longer exist (thus getting removed). | [required]

## Examples

- Prepare the resource
```powershell
$AccountsCollectedForAggregationStats = Initialize-BetaAccountsCollectedForAggregationStats  -Scanned 200 `
 -Unchanged 190 `
 -Changed 6 `
 -Added 4 `
 -Removed 3
```

- Convert the resource to JSON
```powershell
$AccountsCollectedForAggregationStats | ConvertTo-JSON
```


[[Back to top]](#) 

