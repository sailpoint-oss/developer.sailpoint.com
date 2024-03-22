---
id: lifecycle-state-dto
title: LifecycleStateDto
pagination_label: LifecycleStateDto
sidebar_label: LifecycleStateDto
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'LifecycleStateDto'] 
slug: /tools/sdk/powershell/beta/models/lifecycle-state-dto
tags: ['SDK', 'Software Development Kit', 'LifecycleStateDto']
---


# LifecycleStateDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StateName** |  **String** | The name of the lifecycle state | 
**ManuallyUpdated** |  **Boolean** | Whether the lifecycle state has been manually or automatically set | 

## Examples

- Prepare the resource
```powershell
$LifecycleStateDto = Initialize-PSSailpointBetaLifecycleStateDto  -StateName active `
 -ManuallyUpdated true
```

- Convert the resource to JSON
```powershell
$LifecycleStateDto | ConvertTo-JSON
```


[[Back to top]](#) 

