---
id: v2025-complete-invocation-input
title: CompleteInvocationInput
pagination_label: CompleteInvocationInput
sidebar_label: CompleteInvocationInput
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CompleteInvocationInput', 'V2025CompleteInvocationInput'] 
slug: /tools/sdk/powershell/v2025/models/complete-invocation-input
tags: ['SDK', 'Software Development Kit', 'CompleteInvocationInput', 'V2025CompleteInvocationInput']
---


# CompleteInvocationInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LocalizedError** | [**LocalizedMessage**](localized-message) |  | [optional] 
**Output** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Trigger output that completed the invocation. Its schema is defined in the trigger definition. | [optional] 

## Examples

- Prepare the resource
```powershell
$CompleteInvocationInput = Initialize-V2025CompleteInvocationInput  -LocalizedError null `
 -Output {approved=false}
```

- Convert the resource to JSON
```powershell
$CompleteInvocationInput | ConvertTo-JSON
```


[[Back to top]](#) 

