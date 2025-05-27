---
id: v2024-load-accounts-task-task-returns-inner
title: LoadAccountsTaskTaskReturnsInner
pagination_label: LoadAccountsTaskTaskReturnsInner
sidebar_label: LoadAccountsTaskTaskReturnsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LoadAccountsTaskTaskReturnsInner', 'V2024LoadAccountsTaskTaskReturnsInner'] 
slug: /tools/sdk/powershell/v2024/models/load-accounts-task-task-returns-inner
tags: ['SDK', 'Software Development Kit', 'LoadAccountsTaskTaskReturnsInner', 'V2024LoadAccountsTaskTaskReturnsInner']
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
$LoadAccountsTaskTaskReturnsInner = Initialize-V2024LoadAccountsTaskTaskReturnsInner  -DisplayLabel TASK_OUT_ACCOUNT_AGGREGATION_APPLICATIONS `
 -AttributeName applications
```

- Convert the resource to JSON
```powershell
$LoadAccountsTaskTaskReturnsInner | ConvertTo-JSON
```


[[Back to top]](#) 

