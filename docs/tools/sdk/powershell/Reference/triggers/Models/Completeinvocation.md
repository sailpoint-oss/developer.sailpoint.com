---
id: completeinvocation
title: Completeinvocation
pagination_label: Completeinvocation
sidebar_label: Completeinvocation
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Completeinvocation', 'Completeinvocation'] 
slug: /tools/sdk/powershell/triggers/models/completeinvocation
tags: ['SDK', 'Software Development Kit', 'Completeinvocation', 'Completeinvocation']
---


# Completeinvocation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Secret** | **String** | Unique invocation secret that was generated when the invocation was created. Required to authenticate to the endpoint. | [required]
**VarError** | **String** | The error message to indicate a failed invocation or error if any. | [optional] 
**Output** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Trigger output to complete the invocation. Its schema is defined in the trigger definition. | [required]

## Examples

- Prepare the resource
```powershell
$Completeinvocation = Initialize-Completeinvocation  -Secret 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde `
 -VarError Access request is denied. `
 -Output {"approved":false}
```

- Convert the resource to JSON
```powershell
$Completeinvocation | ConvertTo-JSON
```


[[Back to top]](#) 

