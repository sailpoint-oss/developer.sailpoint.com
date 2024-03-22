---
id: complete-invocation-input
title: CompleteInvocationInput
pagination_label: CompleteInvocationInput
sidebar_label: CompleteInvocationInput
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'CompleteInvocationInput'] 
slug: /tools/sdk/powershell/beta/models/complete-invocation-input
tags: ['SDK', 'Software Development Kit', 'CompleteInvocationInput']
---


# CompleteInvocationInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LocalizedError** |  Pointer to [**LocalizedMessage**](localized-message) |  | [optional] 
**Output** |  Pointer to [**SystemCollectionsHashtable**](system-collections-hashtable) | Trigger output that completed the invocation. Its schema is defined in the trigger definition. | [optional] 

## Examples

- Prepare the resource
```powershell
$CompleteInvocationInput = Initialize-PSSailpointBetaCompleteInvocationInput  -LocalizedError null `
 -Output {approved&#x3D;false}
```

- Convert the resource to JSON
```powershell
$CompleteInvocationInput | ConvertTo-JSON
```


[[Back to top]](#) 

