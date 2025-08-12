---
id: v2025-outlier-summary
title: OutlierSummary
pagination_label: OutlierSummary
sidebar_label: OutlierSummary
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'OutlierSummary', 'V2025OutlierSummary'] 
slug: /tools/sdk/powershell/v2025/models/outlier-summary
tags: ['SDK', 'Software Development Kit', 'OutlierSummary', 'V2025OutlierSummary']
---


# OutlierSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "LOW_SIMILARITY",    "STRUCTURAL" ] | The type of outlier summary | [optional] 
**SnapshotDate** | **System.DateTime** | The date the bulk outlier detection ran/snapshot was created | [optional] 
**TotalOutliers** | **Int32** | Total number of outliers for the customer making the request | [optional] 
**TotalIdentities** | **Int32** | Total number of identities for the customer making the request | [optional] 
**TotalIgnored** | **Int32** |  | [optional] [default to 0]

## Examples

- Prepare the resource
```powershell
$OutlierSummary = Initialize-V2025OutlierSummary  -Type LOW_SIMILARITY `
 -SnapshotDate 2021-05-01T18:40:35.772Z `
 -TotalOutliers 50 `
 -TotalIdentities 5000 `
 -TotalIgnored 0
```

- Convert the resource to JSON
```powershell
$OutlierSummary | ConvertTo-JSON
```


[[Back to top]](#) 

