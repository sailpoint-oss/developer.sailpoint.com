---
id: complete-invocation
title: CompleteInvocation
pagination_label: CompleteInvocation
sidebar_label: CompleteInvocation
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'CompleteInvocation'] 
slug: /tools/sdk/powershell/beta/models/complete-invocation
tags: ['SDK', 'Software Development Kit', 'CompleteInvocation']
---


# CompleteInvocation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Secret** |  **String** | Unique invocation secret that was generated when the invocation was created. Required to authenticate to the endpoint. | 
**VarError** |  Pointer to **String** | The error message to indicate a failed invocation or error if any. | [optional] 
**Output** |  [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-8.0 | Trigger output to complete the invocation. Its schema is defined in the trigger definition. | 

## Examples

- Prepare the resource
```powershell
$CompleteInvocation = Initialize-BetaCompleteInvocation  -Secret 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde `
 -VarError Access request is denied. `
 -Output {approved=false}
```

- Convert the resource to JSON
```powershell
$CompleteInvocation | ConvertTo-JSON
```


[[Back to top]](#) 

