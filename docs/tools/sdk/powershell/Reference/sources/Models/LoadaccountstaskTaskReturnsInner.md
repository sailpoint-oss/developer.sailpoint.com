---
id: loadaccountstask-task-returns-inner
title: LoadaccountstaskTaskReturnsInner
pagination_label: LoadaccountstaskTaskReturnsInner
sidebar_label: LoadaccountstaskTaskReturnsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LoadaccountstaskTaskReturnsInner', 'LoadaccountstaskTaskReturnsInner'] 
slug: /tools/sdk/powershell/sources/models/loadaccountstask-task-returns-inner
tags: ['SDK', 'Software Development Kit', 'LoadaccountstaskTaskReturnsInner', 'LoadaccountstaskTaskReturnsInner']
---


# LoadaccountstaskTaskReturnsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DisplayLabel** | **String** | The display label of the return value | [optional] 
**AttributeName** | **String** | The attribute name of the return value | [optional] 

## Examples

- Prepare the resource
```powershell
$LoadaccountstaskTaskReturnsInner = Initialize-LoadaccountstaskTaskReturnsInner  -DisplayLabel TASK_OUT_ACCOUNT_AGGREGATION_APPLICATIONS `
 -AttributeName applications
```

- Convert the resource to JSON
```powershell
$LoadaccountstaskTaskReturnsInner | ConvertTo-JSON
```


[[Back to top]](#) 

