---
id: completeinvocationinput
title: Completeinvocationinput
pagination_label: Completeinvocationinput
sidebar_label: Completeinvocationinput
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Completeinvocationinput', 'Completeinvocationinput'] 
slug: /tools/sdk/powershell/triggers/models/completeinvocationinput
tags: ['SDK', 'Software Development Kit', 'Completeinvocationinput', 'Completeinvocationinput']
---


# Completeinvocationinput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LocalizedError** | [**Localizedmessage**](localizedmessage) |  | [optional] 
**Output** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Trigger output that completed the invocation. Its schema is defined in the trigger definition. | [optional] 

## Examples

- Prepare the resource
```powershell
$Completeinvocationinput = Initialize-Completeinvocationinput  -LocalizedError null `
 -Output {"approved":false}
```

- Convert the resource to JSON
```powershell
$Completeinvocationinput | ConvertTo-JSON
```


[[Back to top]](#) 

