---
id: account-aggregation-completed-stats
title: AccountAggregationCompletedStats
pagination_label: AccountAggregationCompletedStats
sidebar_label: AccountAggregationCompletedStats
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccountAggregationCompletedStats'] 
slug: /tools/sdk/powershell/beta/models/account-aggregation-completed-stats
tags: ['SDK', 'Software Development Kit', 'AccountAggregationCompletedStats']
---


# AccountAggregationCompletedStats

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Scanned** |  **Int32** | The number of accounts which were scanned / iterated over. | 
**Unchanged** |  **Int32** | The number of accounts which existed before, but had no changes. | 
**Changed** |  **Int32** | The number of accounts which existed before, but had changes. | 
**Added** |  **Int32** | The number of accounts which are new - have not existed before. | 
**Removed** |  **Int32** | The number accounts which existed before, but no longer exist (thus getting removed). | 

## Examples

- Prepare the resource
```powershell
$AccountAggregationCompletedStats = Initialize-PSSailpointBetaAccountAggregationCompletedStats  -Scanned 200 `
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

