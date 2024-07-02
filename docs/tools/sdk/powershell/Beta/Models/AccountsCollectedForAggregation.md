---
id: accounts-collected-for-aggregation
title: AccountsCollectedForAggregation
pagination_label: AccountsCollectedForAggregation
sidebar_label: AccountsCollectedForAggregation
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccountsCollectedForAggregation'] 
slug: /tools/sdk/powershell/beta/models/accounts-collected-for-aggregation
tags: ['SDK', 'Software Development Kit', 'AccountsCollectedForAggregation']
---


# AccountsCollectedForAggregation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Source** |  [**AccountsCollectedForAggregationSource**](accounts-collected-for-aggregation-source) |  | 
**Status** |   **Enum** [  "Success",    "Failed",    "Terminated" ] | The overall status of the collection. | 
**Started** |  **System.DateTime** | The date and time when the account collection started. | 
**Completed** |  **System.DateTime** | The date and time when the account collection finished. | 
**Errors** |  **[]String** | A list of errors that occurred during the collection. | 
**Warnings** |  **[]String** | A list of warnings that occurred during the collection. | 
**Stats** |  [**AccountsCollectedForAggregationStats**](accounts-collected-for-aggregation-stats) |  | 

## Examples

- Prepare the resource
```powershell
$AccountsCollectedForAggregation = Initialize-BetaAccountsCollectedForAggregation  -Source null `
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

