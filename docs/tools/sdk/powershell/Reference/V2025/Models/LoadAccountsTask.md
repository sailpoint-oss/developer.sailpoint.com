---
id: v2025-load-accounts-task
title: LoadAccountsTask
pagination_label: LoadAccountsTask
sidebar_label: LoadAccountsTask
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LoadAccountsTask', 'V2025LoadAccountsTask'] 
slug: /tools/sdk/powershell/v2025/models/load-accounts-task
tags: ['SDK', 'Software Development Kit', 'LoadAccountsTask', 'V2025LoadAccountsTask']
---


# LoadAccountsTask

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Success** | **Boolean** | The status of the result | [optional] [default to $true]
**Task** | [**LoadAccountsTaskTask**](load-accounts-task-task) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$LoadAccountsTask = Initialize-V2025LoadAccountsTask  -Success true `
 -Task null
```

- Convert the resource to JSON
```powershell
$LoadAccountsTask | ConvertTo-JSON
```


[[Back to top]](#) 

