---
id: dimensionbulkdeleterequest
title: Dimensionbulkdeleterequest
pagination_label: Dimensionbulkdeleterequest
sidebar_label: Dimensionbulkdeleterequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Dimensionbulkdeleterequest', 'Dimensionbulkdeleterequest'] 
slug: /tools/sdk/powershell/dimensions/models/dimensionbulkdeleterequest
tags: ['SDK', 'Software Development Kit', 'Dimensionbulkdeleterequest', 'Dimensionbulkdeleterequest']
---


# Dimensionbulkdeleterequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DimensionIds** | **[]String** | List of IDs of Dimensions to be deleted. | [required]

## Examples

- Prepare the resource
```powershell
$Dimensionbulkdeleterequest = Initialize-Dimensionbulkdeleterequest  -DimensionIds ["2c9180847812e0b1017817051919ecca","2c9180887812e0b201781e129f151816"]
```

- Convert the resource to JSON
```powershell
$Dimensionbulkdeleterequest | ConvertTo-JSON
```


[[Back to top]](#) 

