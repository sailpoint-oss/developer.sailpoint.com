---
id: v2024-task-result-details-messages-inner
title: TaskResultDetailsMessagesInner
pagination_label: TaskResultDetailsMessagesInner
sidebar_label: TaskResultDetailsMessagesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TaskResultDetailsMessagesInner'] 
slug: /tools/sdk/powershell/v2024/models/task-result-details-messages-inner
tags: ['SDK', 'Software Development Kit', 'TaskResultDetailsMessagesInner']
---


# TaskResultDetailsMessagesInner

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
$TaskResultDetailsMessagesInner = Initialize-PSSailpoint.V2024TaskResultDetailsMessagesInner  -Type WARN `
 -VarError false `
 -Warning true `
 -Key The following account(s) failed to correlate: A,B,C `
 -LocalizedText The following account(s) failed to correlate: A,B,C
```

- Convert the resource to JSON
```powershell
$TaskResultDetailsMessagesInner | ConvertTo-JSON
```


[[Back to top]](#) 

