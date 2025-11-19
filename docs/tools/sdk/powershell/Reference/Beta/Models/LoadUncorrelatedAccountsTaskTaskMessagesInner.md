---
id: beta-load-uncorrelated-accounts-task-task-messages-inner
title: LoadUncorrelatedAccountsTaskTaskMessagesInner
pagination_label: LoadUncorrelatedAccountsTaskTaskMessagesInner
sidebar_label: LoadUncorrelatedAccountsTaskTaskMessagesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LoadUncorrelatedAccountsTaskTaskMessagesInner', 'BetaLoadUncorrelatedAccountsTaskTaskMessagesInner'] 
slug: /tools/sdk/powershell/beta/models/load-uncorrelated-accounts-task-task-messages-inner
tags: ['SDK', 'Software Development Kit', 'LoadUncorrelatedAccountsTaskTaskMessagesInner', 'BetaLoadUncorrelatedAccountsTaskTaskMessagesInner']
---


# LoadUncorrelatedAccountsTaskTaskMessagesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "INFO",    "WARN",    "ERROR" ] | Type of the message. | [optional] 
**VarError** | **Boolean** | Flag whether message is an error. | [optional] [default to $false]
**Warning** | **Boolean** | Flag whether message is a warning. | [optional] [default to $false]
**Key** | **String** | Message string identifier. | [optional] 
**LocalizedText** | **String** | Message context with the locale based language. | [optional] 

## Examples

- Prepare the resource
```powershell
$LoadUncorrelatedAccountsTaskTaskMessagesInner = Initialize-BetaLoadUncorrelatedAccountsTaskTaskMessagesInner  -Type WARN `
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

