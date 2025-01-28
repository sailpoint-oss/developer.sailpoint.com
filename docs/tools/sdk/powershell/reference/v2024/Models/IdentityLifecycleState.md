---
id: v2024-identity-lifecycle-state
title: IdentityLifecycleState
pagination_label: IdentityLifecycleState
sidebar_label: IdentityLifecycleState
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityLifecycleState', 'V2024IdentityLifecycleState'] 
slug: /tools/sdk/powershell/v2024/models/identity-lifecycle-state
tags: ['SDK', 'Software Development Kit', 'IdentityLifecycleState', 'V2024IdentityLifecycleState']
---


# IdentityLifecycleState

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StateName** |  **String** | The name of the lifecycle state | [required]
**ManuallyUpdated** |  **Boolean** | Whether the lifecycle state has been manually or automatically set | [required]

## Examples

- Prepare the resource
```powershell
$IdentityLifecycleState = Initialize-PSSailpoint.V2024IdentityLifecycleState  -StateName active `
 -ManuallyUpdated true
```

- Convert the resource to JSON
```powershell
$IdentityLifecycleState | ConvertTo-JSON
```


[[Back to top]](#) 

