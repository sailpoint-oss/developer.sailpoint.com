---
id: complete-invocation-input
title: CompleteInvocationInput
pagination_label: CompleteInvocationInput
sidebar_label: CompleteInvocationInput
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CompleteInvocationInput'] 
slug: /tools/sdk/powershell/beta/models/complete-invocation-input
tags: ['SDK', 'Software Development Kit', 'CompleteInvocationInput']
---


# CompleteInvocationInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LocalizedError** |  Pointer to [**LocalizedMessage**](localized-message) |  | [optional] 
**Output** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Trigger output that completed the invocation. Its schema is defined in the trigger definition. | [optional] 

## Examples

- Prepare the resource
```powershell
$CompleteInvocationInput = Initialize-PSSailpoint.BetaCompleteInvocationInput  -LocalizedError null `
 -Output {approved&#x3D;false}
```

- Convert the resource to JSON
```powershell
$CompleteInvocationInput | ConvertTo-JSON
```


[[Back to top]](#) 

