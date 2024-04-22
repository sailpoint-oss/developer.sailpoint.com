---
id: accounts-collected-for-aggregation-source
title: AccountsCollectedForAggregationSource
pagination_label: AccountsCollectedForAggregationSource
sidebar_label: AccountsCollectedForAggregationSource
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccountsCollectedForAggregationSource'] 
slug: /tools/sdk/powershell/beta/models/accounts-collected-for-aggregation-source
tags: ['SDK', 'Software Development Kit', 'AccountsCollectedForAggregationSource']
---


# AccountsCollectedForAggregationSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | ID of the object to which this reference applies | 
**Type** |   **Enum** [  "SOURCE" ] | The type of object that is referenced | 
**Name** |  **String** | Human-readable display name of the object to which this reference applies | 

## Examples

- Prepare the resource
```powershell
$AccountsCollectedForAggregationSource = Initialize-BetaAccountsCollectedForAggregationSource  -Id 4e4d982dddff4267ab12f0f1e72b5a6d `
 -Type SOURCE `
 -Name Corporate Active Directory
```

- Convert the resource to JSON
```powershell
$AccountsCollectedForAggregationSource | ConvertTo-JSON
```


[[Back to top]](#) 

