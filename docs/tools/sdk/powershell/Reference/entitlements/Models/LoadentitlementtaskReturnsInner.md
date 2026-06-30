---
id: loadentitlementtask-returns-inner
title: LoadentitlementtaskReturnsInner
pagination_label: LoadentitlementtaskReturnsInner
sidebar_label: LoadentitlementtaskReturnsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LoadentitlementtaskReturnsInner', 'LoadentitlementtaskReturnsInner'] 
slug: /tools/sdk/powershell/entitlements/models/loadentitlementtask-returns-inner
tags: ['SDK', 'Software Development Kit', 'LoadentitlementtaskReturnsInner', 'LoadentitlementtaskReturnsInner']
---


# LoadentitlementtaskReturnsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DisplayLabel** | **String** | The display label for the return value | [optional] 
**AttributeName** | **String** | The attribute name for the return value | [optional] 

## Examples

- Prepare the resource
```powershell
$LoadentitlementtaskReturnsInner = Initialize-LoadentitlementtaskReturnsInner  -DisplayLabel TASK_OUT_ACCOUNT_GROUP_AGGREGATION_APPLICATIONS `
 -AttributeName applications
```

- Convert the resource to JSON
```powershell
$LoadentitlementtaskReturnsInner | ConvertTo-JSON
```


[[Back to top]](#) 

