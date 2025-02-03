---
id: beta-identity-lifecycle-state
title: IdentityLifecycleState
pagination_label: IdentityLifecycleState
sidebar_label: IdentityLifecycleState
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityLifecycleState', 'BetaIdentityLifecycleState'] 
slug: /tools/sdk/powershell/beta/models/identity-lifecycle-state
tags: ['SDK', 'Software Development Kit', 'IdentityLifecycleState', 'BetaIdentityLifecycleState']
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
$IdentityLifecycleState = Initialize-PSSailpoint.BetaIdentityLifecycleState  -StateName active `
 -ManuallyUpdated true
```

- Convert the resource to JSON
```powershell
$IdentityLifecycleState | ConvertTo-JSON
```


[[Back to top]](#) 

