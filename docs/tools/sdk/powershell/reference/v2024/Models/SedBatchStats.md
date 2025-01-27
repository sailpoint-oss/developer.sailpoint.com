---
id: v2024-sed-batch-stats
title: SedBatchStats
pagination_label: SedBatchStats
sidebar_label: SedBatchStats
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SedBatchStats'] 
slug: /tools/sdk/powershell/v2024/models/sed-batch-stats
tags: ['SDK', 'Software Development Kit', 'SedBatchStats']
---


# SedBatchStats

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BatchComplete** |  Pointer to **Boolean** | batch complete | [optional] [default to $false]
**BatchId** |  Pointer to **String** | batch Id | [optional] 
**DiscoveredCount** |  Pointer to **Int64** | discovered count | [optional] 
**DiscoveryComplete** |  Pointer to **Boolean** | discovery complete | [optional] [default to $false]
**ProcessedCount** |  Pointer to **Int64** | processed count | [optional] 

## Examples

- Prepare the resource
```powershell
$SedBatchStats = Initialize-PSSailpoint.V2024SedBatchStats  -BatchComplete true `
 -BatchId 016629d1-1d25-463f-97f3-0c6686846650 `
 -DiscoveredCount 100 `
 -DiscoveryComplete true `
 -ProcessedCount 100
```

- Convert the resource to JSON
```powershell
$SedBatchStats | ConvertTo-JSON
```


[[Back to top]](#) 

