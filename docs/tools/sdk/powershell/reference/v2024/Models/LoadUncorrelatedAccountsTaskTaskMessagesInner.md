---
id: v2024-load-uncorrelated-accounts-task-task-messages-inner
title: LoadUncorrelatedAccountsTaskTaskMessagesInner
pagination_label: LoadUncorrelatedAccountsTaskTaskMessagesInner
sidebar_label: LoadUncorrelatedAccountsTaskTaskMessagesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LoadUncorrelatedAccountsTaskTaskMessagesInner', 'V2024LoadUncorrelatedAccountsTaskTaskMessagesInner'] 
slug: /tools/sdk/powershell/v2024/models/load-uncorrelated-accounts-task-task-messages-inner
tags: ['SDK', 'Software Development Kit', 'LoadUncorrelatedAccountsTaskTaskMessagesInner', 'V2024LoadUncorrelatedAccountsTaskTaskMessagesInner']
---


# LoadUncorrelatedAccountsTaskTaskMessagesInner

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
$LoadUncorrelatedAccountsTaskTaskMessagesInner = Initialize-PSSailpoint.V2024LoadUncorrelatedAccountsTaskTaskMessagesInner  -Type WARN `
 -VarError false `
 -Warning true `
 -Key This correlation failed because the currently running correlation must complete before the next one can start. `
 -LocalizedText This correlation failed because the currently running correlation must complete before the next one can start.
```

- Convert the resource to JSON
```powershell
$LoadUncorrelatedAccountsTaskTaskMessagesInner | ConvertTo-JSON
```


[[Back to top]](#) 

