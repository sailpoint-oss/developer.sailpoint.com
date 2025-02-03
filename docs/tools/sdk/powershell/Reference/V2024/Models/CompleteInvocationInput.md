---
id: v2024-complete-invocation-input
title: CompleteInvocationInput
pagination_label: CompleteInvocationInput
sidebar_label: CompleteInvocationInput
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CompleteInvocationInput', 'V2024CompleteInvocationInput'] 
slug: /tools/sdk/powershell/v2024/models/complete-invocation-input
tags: ['SDK', 'Software Development Kit', 'CompleteInvocationInput', 'V2024CompleteInvocationInput']
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
$CompleteInvocationInput = Initialize-PSSailpoint.V2024CompleteInvocationInput  -LocalizedError null `
 -Output {approved&#x3D;false}
```

- Convert the resource to JSON
```powershell
$CompleteInvocationInput | ConvertTo-JSON
```


[[Back to top]](#) 

