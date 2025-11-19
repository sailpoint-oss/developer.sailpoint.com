---
id: v2025-account-aggregation-completed-source
title: AccountAggregationCompletedSource
pagination_label: AccountAggregationCompletedSource
sidebar_label: AccountAggregationCompletedSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountAggregationCompletedSource', 'V2025AccountAggregationCompletedSource'] 
slug: /tools/sdk/powershell/v2025/models/account-aggregation-completed-source
tags: ['SDK', 'Software Development Kit', 'AccountAggregationCompletedSource', 'V2025AccountAggregationCompletedSource']
---


# AccountAggregationCompletedSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "SOURCE" ] | The DTO type of the source the accounts are being aggregated from. | [required]
**Id** | **String** | The ID of the source the accounts are being aggregated from. | [required]
**Name** | **String** | Display name of the source the accounts are being aggregated from. | [required]

## Examples

- Prepare the resource
```powershell
$AccountAggregationCompletedSource = Initialize-V2025AccountAggregationCompletedSource  -Type SOURCE `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name HR Active Directory
```

- Convert the resource to JSON
```powershell
$AccountAggregationCompletedSource | ConvertTo-JSON
```


[[Back to top]](#) 

