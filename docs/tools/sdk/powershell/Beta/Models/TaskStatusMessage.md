---
id: task-status-message
title: TaskStatusMessage
pagination_label: TaskStatusMessage
sidebar_label: TaskStatusMessage
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'TaskStatusMessage'] 
slug: /tools/sdk/powershell/beta/models/task-status-message
tags: ['SDK', 'Software Development Kit', 'TaskStatusMessage']
---


# TaskStatusMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |   **Enum** [  "INFO",    "WARN",    "ERROR" ] | Type of the message | 
**LocalizedText** |  [**LocalizedMessage**](localized-message) |  | 
**Key** |  **String** | Key of the message | 
**Parameters** |  [**[]SystemCollectionsHashtable**](system-collections-hashtable) | Message parameters for internationalization | 

## Examples

- Prepare the resource
```powershell
$TaskStatusMessage = Initialize-PSSailpointBetaTaskStatusMessage  -Type INFO `
 -LocalizedText null `
 -Key akey `
 -Parameters [{name&#x3D;value}]
```

- Convert the resource to JSON
```powershell
$TaskStatusMessage | ConvertTo-JSON
```


[[Back to top]](#) 

