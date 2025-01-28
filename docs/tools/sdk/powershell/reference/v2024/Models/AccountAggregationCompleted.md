---
id: v2024-account-aggregation-completed
title: AccountAggregationCompleted
pagination_label: AccountAggregationCompleted
sidebar_label: AccountAggregationCompleted
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountAggregationCompleted', 'V2024AccountAggregationCompleted'] 
slug: /tools/sdk/powershell/v2024/models/account-aggregation-completed
tags: ['SDK', 'Software Development Kit', 'AccountAggregationCompleted', 'V2024AccountAggregationCompleted']
---


# AccountAggregationCompleted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Source** |  [**AccountAggregationCompletedSource**](account-aggregation-completed-source) |  | [required]
**Status** |   **Enum** [  "Success",    "Failed",    "Terminated" ] | The overall status of the aggregation. | [required]
**Started** |  **System.DateTime** | The date and time when the account aggregation started. | [required]
**Completed** |  **System.DateTime** | The date and time when the account aggregation finished. | [required]
**Errors** |  **[]String** | A list of errors that occurred during the aggregation. | [required]
**Warnings** |  **[]String** | A list of warnings that occurred during the aggregation. | [required]
**Stats** |  [**AccountAggregationCompletedStats**](account-aggregation-completed-stats) |  | [required]

## Examples

- Prepare the resource
```powershell
$AccountAggregationCompleted = Initialize-PSSailpoint.V2024AccountAggregationCompleted  -Source null `
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

