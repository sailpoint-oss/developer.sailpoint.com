---
id: v2025-latest-outlier-summary
title: LatestOutlierSummary
pagination_label: LatestOutlierSummary
sidebar_label: LatestOutlierSummary
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LatestOutlierSummary', 'V2025LatestOutlierSummary'] 
slug: /tools/sdk/powershell/v2025/models/latest-outlier-summary
tags: ['SDK', 'Software Development Kit', 'LatestOutlierSummary', 'V2025LatestOutlierSummary']
---


# LatestOutlierSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "LOW_SIMILARITY",    "STRUCTURAL" ] | The type of outlier summary | [optional] 
**SnapshotDate** | **System.DateTime** | The date the bulk outlier detection ran/snapshot was created | [optional] 
**TotalOutliers** | **Int32** | Total number of outliers for the customer making the request | [optional] 
**TotalIdentities** | **Int32** | Total number of identities for the customer making the request | [optional] 
**TotalIgnored** | **Int32** | Total number of ignored outliers | [optional] 

## Examples

- Prepare the resource
```powershell
$LatestOutlierSummary = Initialize-V2025LatestOutlierSummary  -Type LOW_SIMILARITY `
 -SnapshotDate 2021-05-01T18:40:35.772Z `
 -TotalOutliers 50 `
 -TotalIdentities 5000 `
 -TotalIgnored 10
```

- Convert the resource to JSON
```powershell
$LatestOutlierSummary | ConvertTo-JSON
```


[[Back to top]](#) 

