---
id: identity-preview-response-identity
title: IdentityPreviewResponseIdentity
pagination_label: IdentityPreviewResponseIdentity
sidebar_label: IdentityPreviewResponseIdentity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityPreviewResponseIdentity'] 
slug: /tools/sdk/powershell/beta/models/identity-preview-response-identity
tags: ['SDK', 'Software Development Kit', 'IdentityPreviewResponseIdentity']
---


# IdentityPreviewResponseIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "IDENTITY" ] | DTO type of identity's manager. | [optional] 
**Id** |  Pointer to **String** | ID of identity's manager. | [optional] 
**Name** |  Pointer to **String** | Human-readable display name of identity's manager. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityPreviewResponseIdentity = Initialize-PSSailpoint.BetaIdentityPreviewResponseIdentity  -Type IDENTITY `
 -Id 2c4180a46faadee4016fb4e018c20626 `
 -Name Robert Robinson
```

- Convert the resource to JSON
```powershell
$IdentityPreviewResponseIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

