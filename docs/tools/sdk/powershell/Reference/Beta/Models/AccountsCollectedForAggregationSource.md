---
id: beta-accounts-collected-for-aggregation-source
title: AccountsCollectedForAggregationSource
pagination_label: AccountsCollectedForAggregationSource
sidebar_label: AccountsCollectedForAggregationSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountsCollectedForAggregationSource', 'BetaAccountsCollectedForAggregationSource'] 
slug: /tools/sdk/powershell/beta/models/accounts-collected-for-aggregation-source
tags: ['SDK', 'Software Development Kit', 'AccountsCollectedForAggregationSource', 'BetaAccountsCollectedForAggregationSource']
---


# AccountsCollectedForAggregationSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the object to which this reference applies | [required]
**Type** |  **Enum** [  "SOURCE" ] | The type of object that is referenced | [required]
**Name** | **String** | Human-readable display name of the object to which this reference applies | [required]

## Examples

- Prepare the resource
```powershell
$AccountsCollectedForAggregationSource = Initialize-PSSailpoint.BetaAccountsCollectedForAggregationSource  -Id 4e4d982dddff4267ab12f0f1e72b5a6d `
 -Type SOURCE `
 -Name Corporate Active Directory
```

- Convert the resource to JSON
```powershell
$AccountsCollectedForAggregationSource | ConvertTo-JSON
```


[[Back to top]](#) 

