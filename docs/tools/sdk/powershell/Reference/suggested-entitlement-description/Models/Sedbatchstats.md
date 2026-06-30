---
id: sedbatchstats
title: Sedbatchstats
pagination_label: Sedbatchstats
sidebar_label: Sedbatchstats
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sedbatchstats', 'Sedbatchstats'] 
slug: /tools/sdk/powershell/suggestedentitlementdescription/models/sedbatchstats
tags: ['SDK', 'Software Development Kit', 'Sedbatchstats', 'Sedbatchstats']
---


# Sedbatchstats

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BatchComplete** | **Boolean** | batch complete | [optional] [default to $false]
**BatchId** | **String** | batch Id | [optional] 
**DiscoveredCount** | **Int64** | discovered count | [optional] 
**DiscoveryComplete** | **Boolean** | discovery complete | [optional] [default to $false]
**ProcessedCount** | **Int64** | processed count | [optional] 

## Examples

- Prepare the resource
```powershell
$Sedbatchstats = Initialize-Sedbatchstats  -BatchComplete true `
 -BatchId 016629d1-1d25-463f-97f3-0c6686846650 `
 -DiscoveredCount 100 `
 -DiscoveryComplete true `
 -ProcessedCount 100
```

- Convert the resource to JSON
```powershell
$Sedbatchstats | ConvertTo-JSON
```


[[Back to top]](#) 

