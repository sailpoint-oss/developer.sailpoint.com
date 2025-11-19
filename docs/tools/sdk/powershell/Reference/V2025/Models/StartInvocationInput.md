---
id: v2025-start-invocation-input
title: StartInvocationInput
pagination_label: StartInvocationInput
sidebar_label: StartInvocationInput
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'StartInvocationInput', 'V2025StartInvocationInput'] 
slug: /tools/sdk/powershell/v2025/models/start-invocation-input
tags: ['SDK', 'Software Development Kit', 'StartInvocationInput', 'V2025StartInvocationInput']
---


# StartInvocationInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TriggerId** | **String** | Trigger ID | [optional] 
**VarInput** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Trigger input payload. Its schema is defined in the trigger definition. | [optional] 
**ContentJson** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | JSON map of invocation metadata | [optional] 

## Examples

- Prepare the resource
```powershell
$StartInvocationInput = Initialize-V2025StartInvocationInput  -TriggerId idn:access-requested `
 -VarInput {identityId=201327fda1c44704ac01181e963d463c} `
 -ContentJson {workflowId=1234}
```

- Convert the resource to JSON
```powershell
$StartInvocationInput | ConvertTo-JSON
```


[[Back to top]](#) 

