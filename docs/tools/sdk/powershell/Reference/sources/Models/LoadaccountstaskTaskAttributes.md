---
id: loadaccountstask-task-attributes
title: LoadaccountstaskTaskAttributes
pagination_label: LoadaccountstaskTaskAttributes
sidebar_label: LoadaccountstaskTaskAttributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LoadaccountstaskTaskAttributes', 'LoadaccountstaskTaskAttributes'] 
slug: /tools/sdk/powershell/sources/models/loadaccountstask-task-attributes
tags: ['SDK', 'Software Development Kit', 'LoadaccountstaskTaskAttributes', 'LoadaccountstaskTaskAttributes']
---


# LoadaccountstaskTaskAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppId** | **String** | The id of the source | [optional] 
**OptimizedAggregation** | **String** | The indicator if the aggregation process was enabled/disabled for the aggregation job | [optional] 

## Examples

- Prepare the resource
```powershell
$LoadaccountstaskTaskAttributes = Initialize-LoadaccountstaskTaskAttributes  -AppId c31386cb18bb403cbb6df4c86294ff82 `
 -OptimizedAggregation enabled
```

- Convert the resource to JSON
```powershell
$LoadaccountstaskTaskAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

