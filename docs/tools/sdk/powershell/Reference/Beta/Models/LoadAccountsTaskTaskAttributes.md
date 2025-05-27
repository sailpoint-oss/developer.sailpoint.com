---
id: beta-load-accounts-task-task-attributes
title: LoadAccountsTaskTaskAttributes
pagination_label: LoadAccountsTaskTaskAttributes
sidebar_label: LoadAccountsTaskTaskAttributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LoadAccountsTaskTaskAttributes', 'BetaLoadAccountsTaskTaskAttributes'] 
slug: /tools/sdk/powershell/beta/models/load-accounts-task-task-attributes
tags: ['SDK', 'Software Development Kit', 'LoadAccountsTaskTaskAttributes', 'BetaLoadAccountsTaskTaskAttributes']
---


# LoadAccountsTaskTaskAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppId** | **String** | The id of the source | [optional] 
**OptimizedAggregation** | **String** | The indicator if the aggregation process was enabled/disabled for the aggregation job | [optional] 

## Examples

- Prepare the resource
```powershell
$LoadAccountsTaskTaskAttributes = Initialize-BetaLoadAccountsTaskTaskAttributes  -AppId c31386cb18bb403cbb6df4c86294ff82 `
 -OptimizedAggregation enabled
```

- Convert the resource to JSON
```powershell
$LoadAccountsTaskTaskAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

