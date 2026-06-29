---
id: set-lifecycle-state-v1429-response
title: SetLifecycleStateV1429Response
pagination_label: SetLifecycleStateV1429Response
sidebar_label: SetLifecycleStateV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SetLifecycleStateV1429Response', 'SetLifecycleStateV1429Response'] 
slug: /tools/sdk/powershell/lifecyclestates/models/set-lifecycle-state-v1429-response
tags: ['SDK', 'Software Development Kit', 'SetLifecycleStateV1429Response', 'SetLifecycleStateV1429Response']
---


# SetLifecycleStateV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$SetLifecycleStateV1429Response = Initialize-SetLifecycleStateV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$SetLifecycleStateV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

