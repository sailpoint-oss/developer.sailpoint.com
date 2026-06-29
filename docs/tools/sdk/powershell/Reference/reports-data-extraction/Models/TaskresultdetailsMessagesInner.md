---
id: taskresultdetails-messages-inner
title: TaskresultdetailsMessagesInner
pagination_label: TaskresultdetailsMessagesInner
sidebar_label: TaskresultdetailsMessagesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TaskresultdetailsMessagesInner', 'TaskresultdetailsMessagesInner'] 
slug: /tools/sdk/powershell/reportsdataextraction/models/taskresultdetails-messages-inner
tags: ['SDK', 'Software Development Kit', 'TaskresultdetailsMessagesInner', 'TaskresultdetailsMessagesInner']
---


# TaskresultdetailsMessagesInner

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
$TaskresultdetailsMessagesInner = Initialize-TaskresultdetailsMessagesInner  -Type WARN `
 -VarError false `
 -Warning true `
 -Key The following account(s) failed to correlate: A,B,C `
 -LocalizedText The following account(s) failed to correlate: A,B,C
```

- Convert the resource to JSON
```powershell
$TaskresultdetailsMessagesInner | ConvertTo-JSON
```


[[Back to top]](#) 

