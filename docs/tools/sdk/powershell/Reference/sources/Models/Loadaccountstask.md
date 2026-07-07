---
id: loadaccountstask
title: Loadaccountstask
pagination_label: Loadaccountstask
sidebar_label: Loadaccountstask
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Loadaccountstask', 'Loadaccountstask'] 
slug: /tools/sdk/powershell/sources/models/loadaccountstask
tags: ['SDK', 'Software Development Kit', 'Loadaccountstask', 'Loadaccountstask']
---


# Loadaccountstask

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Success** | **Boolean** | The status of the result | [optional] [default to $true]
**Task** | [**LoadaccountstaskTask**](loadaccountstask-task) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Loadaccountstask = Initialize-Loadaccountstask  -Success true `
 -Task null
```

- Convert the resource to JSON
```powershell
$Loadaccountstask | ConvertTo-JSON
```


[[Back to top]](#) 

