---
id: v2024-accounts-collected-for-aggregation
title: AccountsCollectedForAggregation
pagination_label: AccountsCollectedForAggregation
sidebar_label: AccountsCollectedForAggregation
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountsCollectedForAggregation', 'V2024AccountsCollectedForAggregation'] 
slug: /tools/sdk/powershell/v2024/models/accounts-collected-for-aggregation
tags: ['SDK', 'Software Development Kit', 'AccountsCollectedForAggregation', 'V2024AccountsCollectedForAggregation']
---


# AccountsCollectedForAggregation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Source** | [**AccountsCollectedForAggregationSource**](accounts-collected-for-aggregation-source) |  | [required]
**Status** |  **Enum** [  "Success",    "Failed",    "Terminated" ] | The overall status of the collection. | [required]
**Started** | **System.DateTime** | The date and time when the account collection started. | [required]
**Completed** | **System.DateTime** | The date and time when the account collection finished. | [required]
**Errors** | **[]String** | A list of errors that occurred during the collection. | [required]
**Warnings** | **[]String** | A list of warnings that occurred during the collection. | [required]
**Stats** | [**AccountsCollectedForAggregationStats**](accounts-collected-for-aggregation-stats) |  | [required]

## Examples

- Prepare the resource
```powershell
$AccountsCollectedForAggregation = Initialize-PSSailpoint.V2024AccountsCollectedForAggregation  -Source null `
 -Status Success `
 -Started 2020-06-29T22:01:50.474Z `
 -Completed 2020-06-29T22:02:04.090Z `
 -Errors null `
 -Warnings null `
 -Stats null
```

- Convert the resource to JSON
```powershell
$AccountsCollectedForAggregation | ConvertTo-JSON
```


[[Back to top]](#) 

