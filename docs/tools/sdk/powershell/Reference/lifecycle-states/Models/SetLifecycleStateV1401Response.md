---
id: set-lifecycle-state-v1401-response
title: SetLifecycleStateV1401Response
pagination_label: SetLifecycleStateV1401Response
sidebar_label: SetLifecycleStateV1401Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SetLifecycleStateV1401Response', 'SetLifecycleStateV1401Response'] 
slug: /tools/sdk/powershell/lifecyclestates/models/set-lifecycle-state-v1401-response
tags: ['SDK', 'Software Development Kit', 'SetLifecycleStateV1401Response', 'SetLifecycleStateV1401Response']
---


# SetLifecycleStateV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$SetLifecycleStateV1401Response = Initialize-SetLifecycleStateV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$SetLifecycleStateV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

