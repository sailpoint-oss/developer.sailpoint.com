---
id: beta-load-accounts-task-task-attributes
title: LoadAccountsTaskTaskAttributes
pagination_label: LoadAccountsTaskTaskAttributes
sidebar_label: LoadAccountsTaskTaskAttributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LoadAccountsTaskTaskAttributes'] 
slug: /tools/sdk/powershell/beta/models/load-accounts-task-task-attributes
tags: ['SDK', 'Software Development Kit', 'LoadAccountsTaskTaskAttributes']
---


# LoadAccountsTaskTaskAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppId** |  Pointer to **String** | The id of the source | [optional] 
**OptimizedAggregation** |  Pointer to **String** | The indicator if the aggregation process was enabled/disabled for the aggregation job | [optional] 

## Examples

- Prepare the resource
```powershell
$LoadAccountsTaskTaskAttributes = Initialize-PSSailpoint.BetaLoadAccountsTaskTaskAttributes  -AppId c31386cb18bb403cbb6df4c86294ff82 `
 -OptimizedAggregation enabled
```

- Convert the resource to JSON
```powershell
$LoadAccountsTaskTaskAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

