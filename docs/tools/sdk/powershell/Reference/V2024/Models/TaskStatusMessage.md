---
id: v2024-task-status-message
title: TaskStatusMessage
pagination_label: TaskStatusMessage
sidebar_label: TaskStatusMessage
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TaskStatusMessage', 'V2024TaskStatusMessage'] 
slug: /tools/sdk/powershell/v2024/models/task-status-message
tags: ['SDK', 'Software Development Kit', 'TaskStatusMessage', 'V2024TaskStatusMessage']
---


# TaskStatusMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |   **Enum** [  "INFO",    "WARN",    "ERROR" ] | Type of the message | [required]
**LocalizedText** |  [**LocalizedMessage**](localized-message) |  | [required]
**Key** |  **String** | Key of the message | [required]
**Parameters** |  [**[]TaskStatusMessageParametersInner**](task-status-message-parameters-inner) | Message parameters for internationalization | [required]

## Examples

- Prepare the resource
```powershell
$TaskStatusMessage = Initialize-PSSailpoint.V2024TaskStatusMessage  -Type INFO `
 -LocalizedText null `
 -Key akey `
 -Parameters [{name&#x3D;value}]
```

- Convert the resource to JSON
```powershell
$TaskStatusMessage | ConvertTo-JSON
```


[[Back to top]](#) 

