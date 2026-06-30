---
id: loadaccountstask-task-messages-inner
title: LoadaccountstaskTaskMessagesInner
pagination_label: LoadaccountstaskTaskMessagesInner
sidebar_label: LoadaccountstaskTaskMessagesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'LoadaccountstaskTaskMessagesInner', 'LoadaccountstaskTaskMessagesInner'] 
slug: /tools/sdk/powershell/sources/models/loadaccountstask-task-messages-inner
tags: ['SDK', 'Software Development Kit', 'LoadaccountstaskTaskMessagesInner', 'LoadaccountstaskTaskMessagesInner']
---


# LoadaccountstaskTaskMessagesInner

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
$LoadaccountstaskTaskMessagesInner = Initialize-LoadaccountstaskTaskMessagesInner  -Type WARN `
 -VarError false `
 -Warning true `
 -Key This aggregation failed because the currently running aggregation must complete before the next one can start. `
 -LocalizedText This aggregation failed because the currently running aggregation must complete before the next one can start.
```

- Convert the resource to JSON
```powershell
$LoadaccountstaskTaskMessagesInner | ConvertTo-JSON
```


[[Back to top]](#) 

