---
id: outlier-summary
title: OutlierSummary
pagination_label: OutlierSummary
sidebar_label: OutlierSummary
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'OutlierSummary'] 
slug: /tools/sdk/powershell/beta/models/outlier-summary
tags: ['SDK', 'Software Development Kit', 'OutlierSummary']
---


# OutlierSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "LOW_SIMILARITY",    "STRUCTURAL" ] | The type of outlier summary | [optional] 
**SnapshotDate** |  Pointer to **System.DateTime** | The date the bulk outlier detection ran/snapshot was created | [optional] 
**TotalOutliers** |  Pointer to **Int32** | Total number of outliers for the customer making the request | [optional] 
**TotalIdentities** |  Pointer to **Int32** | Total number of identities for the customer making the request | [optional] 
**TotalIgnored** |  Pointer to **Int32** |  | [optional] [default to 0]

## Examples

- Prepare the resource
```powershell
$OutlierSummary = Initialize-PSSailpointBetaOutlierSummary  -Type LOW_SIMILARITY `
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

