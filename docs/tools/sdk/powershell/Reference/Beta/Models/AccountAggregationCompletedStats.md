---
id: beta-account-aggregation-completed-stats
title: AccountAggregationCompletedStats
pagination_label: AccountAggregationCompletedStats
sidebar_label: AccountAggregationCompletedStats
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountAggregationCompletedStats', 'BetaAccountAggregationCompletedStats'] 
slug: /tools/sdk/powershell/beta/models/account-aggregation-completed-stats
tags: ['SDK', 'Software Development Kit', 'AccountAggregationCompletedStats', 'BetaAccountAggregationCompletedStats']
---


# AccountAggregationCompletedStats

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Scanned** | **Int32** | Number of accounts scanned/iterated over. | [required]
**Unchanged** | **Int32** | Number of accounts that existed before but had no changes. | [required]
**Changed** | **Int32** | Number of accounts that existed before but had changes. | [required]
**Added** | **Int32** | Number of accounts that are new and didn't previously exist. | [required]
**Removed** | **Int32** | Number accounts that existed before but were removed and no longer exist. | [required]

## Examples

- Prepare the resource
```powershell
$AccountAggregationCompletedStats = Initialize-BetaAccountAggregationCompletedStats  -Scanned 200 `
 -Unchanged 190 `
 -Changed 6 `
 -Added 4 `
 -Removed 3
```

- Convert the resource to JSON
```powershell
$AccountAggregationCompletedStats | ConvertTo-JSON
```


[[Back to top]](#) 

