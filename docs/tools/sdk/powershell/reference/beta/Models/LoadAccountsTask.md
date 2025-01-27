---
id: load-accounts-task
title: LoadAccountsTask
pagination_label: LoadAccountsTask
sidebar_label: LoadAccountsTask
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LoadAccountsTask'] 
slug: /tools/sdk/powershell/beta/models/load-accounts-task
tags: ['SDK', 'Software Development Kit', 'LoadAccountsTask']
---


# LoadAccountsTask

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Success** |  Pointer to **Boolean** | The status of the result | [optional] [default to $true]
**Task** |  Pointer to [**LoadAccountsTaskTask**](load-accounts-task-task) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$LoadAccountsTask = Initialize-PSSailpoint.BetaLoadAccountsTask  -Success true `
 -Task null
```

- Convert the resource to JSON
```powershell
$LoadAccountsTask | ConvertTo-JSON
```


[[Back to top]](#) 

