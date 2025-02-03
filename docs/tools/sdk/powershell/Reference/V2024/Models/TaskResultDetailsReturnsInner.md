---
id: v2024-task-result-details-returns-inner
title: TaskResultDetailsReturnsInner
pagination_label: TaskResultDetailsReturnsInner
sidebar_label: TaskResultDetailsReturnsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TaskResultDetailsReturnsInner', 'V2024TaskResultDetailsReturnsInner'] 
slug: /tools/sdk/powershell/v2024/models/task-result-details-returns-inner
tags: ['SDK', 'Software Development Kit', 'TaskResultDetailsReturnsInner', 'V2024TaskResultDetailsReturnsInner']
---


# TaskResultDetailsReturnsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DisplayLabel** | **String** | Attribute description. | [optional] 
**AttributeName** | **String** | System or database attribute name. | [optional] 

## Examples

- Prepare the resource
```powershell
$TaskResultDetailsReturnsInner = Initialize-PSSailpoint.V2024TaskResultDetailsReturnsInner  -DisplayLabel   `
 -AttributeName  
```

- Convert the resource to JSON
```powershell
$TaskResultDetailsReturnsInner | ConvertTo-JSON
```


[[Back to top]](#) 

