---
id: beta-load-accounts-task-task-returns-inner
title: LoadAccountsTaskTaskReturnsInner
pagination_label: LoadAccountsTaskTaskReturnsInner
sidebar_label: LoadAccountsTaskTaskReturnsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LoadAccountsTaskTaskReturnsInner', 'BetaLoadAccountsTaskTaskReturnsInner'] 
slug: /tools/sdk/powershell/beta/models/load-accounts-task-task-returns-inner
tags: ['SDK', 'Software Development Kit', 'LoadAccountsTaskTaskReturnsInner', 'BetaLoadAccountsTaskTaskReturnsInner']
---


# LoadAccountsTaskTaskReturnsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DisplayLabel** | **String** | The display label of the return value | [optional] 
**AttributeName** | **String** | The attribute name of the return value | [optional] 

## Examples

- Prepare the resource
```powershell
$LoadAccountsTaskTaskReturnsInner = Initialize-BetaLoadAccountsTaskTaskReturnsInner  -DisplayLabel TASK_OUT_ACCOUNT_AGGREGATION_APPLICATIONS `
 -AttributeName applications
```

- Convert the resource to JSON
```powershell
$LoadAccountsTaskTaskReturnsInner | ConvertTo-JSON
```


[[Back to top]](#) 

