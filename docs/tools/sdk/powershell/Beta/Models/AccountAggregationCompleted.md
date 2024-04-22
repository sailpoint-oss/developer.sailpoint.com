---
id: account-aggregation-completed
title: AccountAggregationCompleted
pagination_label: AccountAggregationCompleted
sidebar_label: AccountAggregationCompleted
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccountAggregationCompleted'] 
slug: /tools/sdk/powershell/beta/models/account-aggregation-completed
tags: ['SDK', 'Software Development Kit', 'AccountAggregationCompleted']
---


# AccountAggregationCompleted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Source** |  [**AccountAggregationCompletedSource**](account-aggregation-completed-source) |  | 
**Status** |   **Enum** [  "Success",    "Failed",    "Terminated" ] | The overall status of the aggregation. | 
**Started** |  **System.DateTime** | The date and time when the account aggregation started. | 
**Completed** |  **System.DateTime** | The date and time when the account aggregation finished. | 
**Errors** |  **[]String** | A list of errors that occurred during the aggregation. | 
**Warnings** |  **[]String** | A list of warnings that occurred during the aggregation. | 
**Stats** |  [**AccountAggregationCompletedStats**](account-aggregation-completed-stats) |  | 

## Examples

- Prepare the resource
```powershell
$AccountAggregationCompleted = Initialize-BetaAccountAggregationCompleted  -Source null `
 -Status Success `
 -Started 2020-06-29T22:01:50.474Z `
 -Completed 2020-06-29T22:02:04.090Z `
 -Errors null `
 -Warnings null `
 -Stats null
```

- Convert the resource to JSON
```powershell
$AccountAggregationCompleted | ConvertTo-JSON
```


[[Back to top]](#) 

