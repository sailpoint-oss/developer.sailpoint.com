---
id: identity-dto-lifecycle-state
title: IdentityDtoLifecycleState
pagination_label: IdentityDtoLifecycleState
sidebar_label: IdentityDtoLifecycleState
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentityDtoLifecycleState'] 
slug: /tools/sdk/powershell/beta/models/identity-dto-lifecycle-state
tags: ['SDK', 'Software Development Kit', 'IdentityDtoLifecycleState']
---


# IdentityDtoLifecycleState

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StateName** |  **String** | The name of the lifecycle state | 
**ManuallyUpdated** |  **Boolean** | Whether the lifecycle state has been manually or automatically set | 

## Examples

- Prepare the resource
```powershell
$IdentityDtoLifecycleState = Initialize-BetaIdentityDtoLifecycleState  -StateName active `
 -ManuallyUpdated true
```

- Convert the resource to JSON
```powershell
$IdentityDtoLifecycleState | ConvertTo-JSON
```


[[Back to top]](#) 

