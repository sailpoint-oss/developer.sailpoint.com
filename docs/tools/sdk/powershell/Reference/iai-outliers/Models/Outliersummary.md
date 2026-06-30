---
id: outliersummary
title: Outliersummary
pagination_label: Outliersummary
sidebar_label: Outliersummary
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Outliersummary', 'Outliersummary'] 
slug: /tools/sdk/powershell/iaioutliers/models/outliersummary
tags: ['SDK', 'Software Development Kit', 'Outliersummary', 'Outliersummary']
---


# Outliersummary

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
$Outliersummary = Initialize-Outliersummary  -Type LOW_SIMILARITY `
 -SnapshotDate 2021-05-01T18:40:35.772Z `
 -TotalOutliers 50 `
 -TotalIdentities 5000 `
 -TotalIgnored 0
```

- Convert the resource to JSON
```powershell
$Outliersummary | ConvertTo-JSON
```


[[Back to top]](#) 

