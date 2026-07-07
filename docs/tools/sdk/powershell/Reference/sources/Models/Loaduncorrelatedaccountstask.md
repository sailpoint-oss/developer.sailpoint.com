---
id: loaduncorrelatedaccountstask
title: Loaduncorrelatedaccountstask
pagination_label: Loaduncorrelatedaccountstask
sidebar_label: Loaduncorrelatedaccountstask
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Loaduncorrelatedaccountstask', 'Loaduncorrelatedaccountstask'] 
slug: /tools/sdk/powershell/sources/models/loaduncorrelatedaccountstask
tags: ['SDK', 'Software Development Kit', 'Loaduncorrelatedaccountstask', 'Loaduncorrelatedaccountstask']
---


# Loaduncorrelatedaccountstask

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Success** | **Boolean** | The status of the result | [optional] [default to $true]
**Task** | [**LoaduncorrelatedaccountstaskTask**](loaduncorrelatedaccountstask-task) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Loaduncorrelatedaccountstask = Initialize-Loaduncorrelatedaccountstask  -Success true `
 -Task null
```

- Convert the resource to JSON
```powershell
$Loaduncorrelatedaccountstask | ConvertTo-JSON
```


[[Back to top]](#) 

