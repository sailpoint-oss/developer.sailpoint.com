---
id: machineidentityaggregationrequest
title: Machineidentityaggregationrequest
pagination_label: Machineidentityaggregationrequest
sidebar_label: Machineidentityaggregationrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Machineidentityaggregationrequest', 'Machineidentityaggregationrequest'] 
slug: /tools/sdk/powershell/machineidentities/models/machineidentityaggregationrequest
tags: ['SDK', 'Software Development Kit', 'Machineidentityaggregationrequest', 'Machineidentityaggregationrequest']
---


# Machineidentityaggregationrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DatasetIds** | **[]String** | List of dataset Ids to aggregate machine identities | [required]
**DisableOptimization** | **Boolean** | Flag to disable optimization for the aggregation. Defaults to false when not provided. When set to true, it disables aggregation optimizations and may increase processing time. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$Machineidentityaggregationrequest = Initialize-Machineidentityaggregationrequest  -DatasetIds null `
 -DisableOptimization false
```

- Convert the resource to JSON
```powershell
$Machineidentityaggregationrequest | ConvertTo-JSON
```


[[Back to top]](#) 

