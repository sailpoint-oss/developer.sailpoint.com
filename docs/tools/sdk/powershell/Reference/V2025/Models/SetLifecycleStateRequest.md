---
id: v2025-set-lifecycle-state-request
title: SetLifecycleStateRequest
pagination_label: SetLifecycleStateRequest
sidebar_label: SetLifecycleStateRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SetLifecycleStateRequest', 'V2025SetLifecycleStateRequest'] 
slug: /tools/sdk/powershell/v2025/models/set-lifecycle-state-request
tags: ['SDK', 'Software Development Kit', 'SetLifecycleStateRequest', 'V2025SetLifecycleStateRequest']
---


# SetLifecycleStateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LifecycleStateId** | **String** | ID of the lifecycle state to set. | [optional] 

## Examples

- Prepare the resource
```powershell
$SetLifecycleStateRequest = Initialize-V2025SetLifecycleStateRequest  -LifecycleStateId 2c9180877a86e408017a8c19fefe046c
```

- Convert the resource to JSON
```powershell
$SetLifecycleStateRequest | ConvertTo-JSON
```


[[Back to top]](#) 

