---
id: loaduncorrelatedaccountstask-task-messages-inner
title: LoaduncorrelatedaccountstaskTaskMessagesInner
pagination_label: LoaduncorrelatedaccountstaskTaskMessagesInner
sidebar_label: LoaduncorrelatedaccountstaskTaskMessagesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LoaduncorrelatedaccountstaskTaskMessagesInner', 'LoaduncorrelatedaccountstaskTaskMessagesInner'] 
slug: /tools/sdk/powershell/sources/models/loaduncorrelatedaccountstask-task-messages-inner
tags: ['SDK', 'Software Development Kit', 'LoaduncorrelatedaccountstaskTaskMessagesInner', 'LoaduncorrelatedaccountstaskTaskMessagesInner']
---


# LoaduncorrelatedaccountstaskTaskMessagesInner

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
$LoaduncorrelatedaccountstaskTaskMessagesInner = Initialize-LoaduncorrelatedaccountstaskTaskMessagesInner  -Type WARN `
 -VarError false `
 -Warning true `
 -Key This correlation failed because the currently running correlation must complete before the next one can start. `
 -LocalizedText This correlation failed because the currently running correlation must complete before the next one can start.
```

- Convert the resource to JSON
```powershell
$LoaduncorrelatedaccountstaskTaskMessagesInner | ConvertTo-JSON
```


[[Back to top]](#) 

