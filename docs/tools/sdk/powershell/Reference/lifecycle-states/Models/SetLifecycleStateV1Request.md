---
id: set-lifecycle-state-v1-request
title: SetLifecycleStateV1Request
pagination_label: SetLifecycleStateV1Request
sidebar_label: SetLifecycleStateV1Request
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SetLifecycleStateV1Request', 'SetLifecycleStateV1Request'] 
slug: /tools/sdk/powershell/lifecyclestates/models/set-lifecycle-state-v1-request
tags: ['SDK', 'Software Development Kit', 'SetLifecycleStateV1Request', 'SetLifecycleStateV1Request']
---


# SetLifecycleStateV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LifecycleStateId** | **String** | ID of the lifecycle state to set. | [optional] 

## Examples

- Prepare the resource
```powershell
$SetLifecycleStateV1Request = Initialize-SetLifecycleStateV1Request  -LifecycleStateId 2c9180877a86e408017a8c19fefe046c
```

- Convert the resource to JSON
```powershell
$SetLifecycleStateV1Request | ConvertTo-JSON
```


[[Back to top]](#) 

