---
id: beta-account-aggregation-completed-source
title: AccountAggregationCompletedSource
pagination_label: AccountAggregationCompletedSource
sidebar_label: AccountAggregationCompletedSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountAggregationCompletedSource', 'BetaAccountAggregationCompletedSource'] 
slug: /tools/sdk/powershell/beta/models/account-aggregation-completed-source
tags: ['SDK', 'Software Development Kit', 'AccountAggregationCompletedSource', 'BetaAccountAggregationCompletedSource']
---


# AccountAggregationCompletedSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "SOURCE" ] | Source's DTO type. | [required]
**Id** | **String** | Source's unique ID. | [required]
**Name** | **String** | Source's name. | [required]

## Examples

- Prepare the resource
```powershell
$AccountAggregationCompletedSource = Initialize-PSSailpoint.BetaAccountAggregationCompletedSource  -Type SOURCE `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name HR Active Directory
```

- Convert the resource to JSON
```powershell
$AccountAggregationCompletedSource | ConvertTo-JSON
```


[[Back to top]](#) 

