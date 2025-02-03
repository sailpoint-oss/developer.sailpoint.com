---
id: v2024-start-invocation-input
title: StartInvocationInput
pagination_label: StartInvocationInput
sidebar_label: StartInvocationInput
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'StartInvocationInput', 'V2024StartInvocationInput'] 
slug: /tools/sdk/powershell/v2024/models/start-invocation-input
tags: ['SDK', 'Software Development Kit', 'StartInvocationInput', 'V2024StartInvocationInput']
---


# StartInvocationInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TriggerId** |  Pointer to **String** | Trigger ID | [optional] 
**VarInput** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Trigger input payload. Its schema is defined in the trigger definition. | [optional] 
**ContentJson** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | JSON map of invocation metadata | [optional] 

## Examples

- Prepare the resource
```powershell
$StartInvocationInput = Initialize-PSSailpoint.V2024StartInvocationInput  -TriggerId idn:access-requested `
 -VarInput {identityId&#x3D;201327fda1c44704ac01181e963d463c} `
 -ContentJson {workflowId&#x3D;1234}
```

- Convert the resource to JSON
```powershell
$StartInvocationInput | ConvertTo-JSON
```


[[Back to top]](#) 

