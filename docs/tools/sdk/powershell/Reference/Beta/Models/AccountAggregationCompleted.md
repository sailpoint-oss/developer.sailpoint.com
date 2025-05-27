---
id: beta-account-aggregation-completed
title: AccountAggregationCompleted
pagination_label: AccountAggregationCompleted
sidebar_label: AccountAggregationCompleted
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountAggregationCompleted', 'BetaAccountAggregationCompleted'] 
slug: /tools/sdk/powershell/beta/models/account-aggregation-completed
tags: ['SDK', 'Software Development Kit', 'AccountAggregationCompleted', 'BetaAccountAggregationCompleted']
---


# AccountAggregationCompleted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Source** | [**AccountAggregationCompletedSource**](account-aggregation-completed-source) |  | [required]
**Status** |  **Enum** [  "Success",    "Failed",    "Terminated" ] | Aggregation's overall status. | [required]
**Started** | **System.DateTime** | Date and time when the account aggregation started. | [required]
**Completed** | **System.DateTime** | Date and time when the account aggregation finished. | [required]
**Errors** | **[]String** | List of errors that occurred during the aggregation. | [required]
**Warnings** | **[]String** | List of warnings that occurred during the aggregation. | [required]
**Stats** | [**AccountAggregationCompletedStats**](account-aggregation-completed-stats) |  | [required]

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

