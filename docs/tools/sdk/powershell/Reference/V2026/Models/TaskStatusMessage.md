---
id: v2026-task-status-message
title: TaskStatusMessage
pagination_label: TaskStatusMessage
sidebar_label: TaskStatusMessage
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TaskStatusMessage', 'V2026TaskStatusMessage'] 
slug: /tools/sdk/powershell/v2026/models/task-status-message
tags: ['SDK', 'Software Development Kit', 'TaskStatusMessage', 'V2026TaskStatusMessage']
---


# TaskStatusMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "INFO",    "WARN",    "ERROR" ] | Type of the message | [required]
**LocalizedText** | [**LocalizedMessage**](localized-message) |  | [required]
**Key** | **String** | Key of the message | [required]
**Parameters** | [**[]TaskStatusMessageParametersInner**](task-status-message-parameters-inner) | Message parameters for internationalization | [required]

## Examples

- Prepare the resource
```powershell
$TaskStatusMessage = Initialize-V2026TaskStatusMessage  -Type INFO `
 -LocalizedText null `
 -Key akey `
 -Parameters [{name=value}]
```

- Convert the resource to JSON
```powershell
$TaskStatusMessage | ConvertTo-JSON
```


[[Back to top]](#) 

