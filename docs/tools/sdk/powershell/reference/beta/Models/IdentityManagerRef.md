---
id: beta-identity-manager-ref
title: IdentityManagerRef
pagination_label: IdentityManagerRef
sidebar_label: IdentityManagerRef
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityManagerRef', 'BetaIdentityManagerRef'] 
slug: /tools/sdk/powershell/beta/models/identity-manager-ref
tags: ['SDK', 'Software Development Kit', 'IdentityManagerRef', 'BetaIdentityManagerRef']
---


# IdentityManagerRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "IDENTITY" ] | DTO type of identity's manager | [optional] 
**Id** |  Pointer to **String** | ID of identity's manager | [optional] 
**Name** |  Pointer to **String** | Human-readable display name of identity's manager | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityManagerRef = Initialize-PSSailpoint.BetaIdentityManagerRef  -Type IDENTITY `
 -Id 2c4180a46faadee4016fb4e018c20626 `
 -Name Robert Robinson
```

- Convert the resource to JSON
```powershell
$IdentityManagerRef | ConvertTo-JSON
```


[[Back to top]](#) 

