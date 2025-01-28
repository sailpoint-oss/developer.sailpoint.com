---
id: v2024-set-lifecycle-state-request
title: SetLifecycleStateRequest
pagination_label: SetLifecycleStateRequest
sidebar_label: SetLifecycleStateRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SetLifecycleStateRequest'] 
slug: /tools/sdk/powershell/v2024/models/set-lifecycle-state-request
tags: ['SDK', 'Software Development Kit', 'SetLifecycleStateRequest']
---


# SetLifecycleStateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LifecycleStateId** |  Pointer to **String** | ID of the lifecycle state to set. | [optional] 

## Examples

- Prepare the resource
```powershell
$SetLifecycleStateRequest = Initialize-PSSailpoint.V2024SetLifecycleStateRequest  -LifecycleStateId 2c9180877a86e408017a8c19fefe046c
```

- Convert the resource to JSON
```powershell
$SetLifecycleStateRequest | ConvertTo-JSON
```


[[Back to top]](#) 

