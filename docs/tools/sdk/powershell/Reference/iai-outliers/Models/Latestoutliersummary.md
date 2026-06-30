---
id: latestoutliersummary
title: Latestoutliersummary
pagination_label: Latestoutliersummary
sidebar_label: Latestoutliersummary
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Latestoutliersummary', 'Latestoutliersummary'] 
slug: /tools/sdk/powershell/iaioutliers/models/latestoutliersummary
tags: ['SDK', 'Software Development Kit', 'Latestoutliersummary', 'Latestoutliersummary']
---


# Latestoutliersummary

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
$Latestoutliersummary = Initialize-Latestoutliersummary  -Type LOW_SIMILARITY `
 -SnapshotDate 2021-05-01T18:40:35.772Z `
 -TotalOutliers 50 `
 -TotalIdentities 5000 `
 -TotalIgnored 10
```

- Convert the resource to JSON
```powershell
$Latestoutliersummary | ConvertTo-JSON
```


[[Back to top]](#) 

