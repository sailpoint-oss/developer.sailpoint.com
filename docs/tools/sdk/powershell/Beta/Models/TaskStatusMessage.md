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
**Parameters** |  [**[]SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-8.0 | Message parameters for internationalization | 

## Examples

- Prepare the resource
```powershell
$TaskStatusMessage = Initialize-BetaTaskStatusMessage  -Type INFO `
 -LocalizedText null `
 -Key akey `
 -Parameters [{name=value}]
```

- Convert the resource to JSON
```powershell
$TaskStatusMessage | ConvertTo-JSON
```


[[Back to top]](#) 

