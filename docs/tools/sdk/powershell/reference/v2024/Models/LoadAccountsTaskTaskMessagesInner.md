---
id: v2024-load-accounts-task-task-messages-inner
title: LoadAccountsTaskTaskMessagesInner
pagination_label: LoadAccountsTaskTaskMessagesInner
sidebar_label: LoadAccountsTaskTaskMessagesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LoadAccountsTaskTaskMessagesInner'] 
slug: /tools/sdk/powershell/v2024/models/load-accounts-task-task-messages-inner
tags: ['SDK', 'Software Development Kit', 'LoadAccountsTaskTaskMessagesInner']
---


# LoadAccountsTaskTaskMessagesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "INFO",    "WARN",    "ERROR" ] | Type of the message. | [optional] 
**VarError** |  Pointer to **Boolean** | Flag whether message is an error. | [optional] [default to $false]
**Warning** |  Pointer to **Boolean** | Flag whether message is a warning. | [optional] [default to $false]
**Key** |  Pointer to **String** | Message string identifier. | [optional] 
**LocalizedText** |  Pointer to **String** | Message context with the locale based language. | [optional] 

## Examples

- Prepare the resource
```powershell
$LoadAccountsTaskTaskMessagesInner = Initialize-PSSailpoint.V2024LoadAccountsTaskTaskMessagesInner  -Type WARN `
 -VarError false `
 -Warning true `
 -Key This aggregation failed because the currently running aggregation must complete before the next one can start. `
 -LocalizedText This aggregation failed because the currently running aggregation must complete before the next one can start.
```

- Convert the resource to JSON
```powershell
$LoadAccountsTaskTaskMessagesInner | ConvertTo-JSON
```


[[Back to top]](#) 

