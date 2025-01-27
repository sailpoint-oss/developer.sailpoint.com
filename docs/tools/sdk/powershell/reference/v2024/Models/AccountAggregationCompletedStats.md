---
id: account-aggregation-completed-stats
title: AccountAggregationCompletedStats
pagination_label: AccountAggregationCompletedStats
sidebar_label: AccountAggregationCompletedStats
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountAggregationCompletedStats'] 
slug: /tools/sdk/powershell/v2024/models/account-aggregation-completed-stats
tags: ['SDK', 'Software Development Kit', 'AccountAggregationCompletedStats']
---


# AccountAggregationCompletedStats

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Scanned** |  **Int32** | The number of accounts which were scanned / iterated over. | [required]
**Unchanged** |  **Int32** | The number of accounts which existed before, but had no changes. | [required]
**Changed** |  **Int32** | The number of accounts which existed before, but had changes. | [required]
**Added** |  **Int32** | The number of accounts which are new - have not existed before. | [required]
**Removed** |  **Int32** | The number accounts which existed before, but no longer exist (thus getting removed). | [required]

## Examples

- Prepare the resource
```powershell
$AccountAggregationCompletedStats = Initialize-PSSailpoint.V2024AccountAggregationCompletedStats  -Scanned 200 `
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

