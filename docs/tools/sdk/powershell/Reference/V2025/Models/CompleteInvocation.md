---
id: v2025-complete-invocation
title: CompleteInvocation
pagination_label: CompleteInvocation
sidebar_label: CompleteInvocation
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CompleteInvocation', 'V2025CompleteInvocation'] 
slug: /tools/sdk/powershell/v2025/models/complete-invocation
tags: ['SDK', 'Software Development Kit', 'CompleteInvocation', 'V2025CompleteInvocation']
---


# CompleteInvocation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Secret** | **String** | Unique invocation secret that was generated when the invocation was created. Required to authenticate to the endpoint. | [required]
**VarError** | **String** | The error message to indicate a failed invocation or error if any. | [optional] 
**Output** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Trigger output to complete the invocation. Its schema is defined in the trigger definition. | [required]

## Examples

- Prepare the resource
```powershell
$CompleteInvocation = Initialize-PSSailpoint.V2025CompleteInvocation  -Secret 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde `
 -VarError Access request is denied. `
 -Output {approved=false}
```

- Convert the resource to JSON
```powershell
$CompleteInvocation | ConvertTo-JSON
```


[[Back to top]](#) 

