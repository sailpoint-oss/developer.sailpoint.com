---
id: account-aggregation-completed-source
title: AccountAggregationCompletedSource
pagination_label: AccountAggregationCompletedSource
sidebar_label: AccountAggregationCompletedSource
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccountAggregationCompletedSource'] 
slug: /tools/sdk/powershell/beta/models/account-aggregation-completed-source
tags: ['SDK', 'Software Development Kit', 'AccountAggregationCompletedSource']
---


# AccountAggregationCompletedSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |   **Enum** [  "SOURCE" ] | The DTO type of the source the accounts are being aggregated from. | 
**Id** |  **String** | The ID of the source the accounts are being aggregated from. | 
**Name** |  **String** | Display name of the source the accounts are being aggregated from. | 

## Examples

- Prepare the resource
```powershell
$AccountAggregationCompletedSource = Initialize-BetaAccountAggregationCompletedSource  -Type SOURCE `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name HR Active Directory
```

- Convert the resource to JSON
```powershell
$AccountAggregationCompletedSource | ConvertTo-JSON
```


[[Back to top]](#) 

