---
id: beta-identity-preview-response-identity
title: IdentityPreviewResponseIdentity
pagination_label: IdentityPreviewResponseIdentity
sidebar_label: IdentityPreviewResponseIdentity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityPreviewResponseIdentity', 'BetaIdentityPreviewResponseIdentity'] 
slug: /tools/sdk/powershell/beta/models/identity-preview-response-identity
tags: ['SDK', 'Software Development Kit', 'IdentityPreviewResponseIdentity', 'BetaIdentityPreviewResponseIdentity']
---


# IdentityPreviewResponseIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | DTO type of identity's manager. | [optional] 
**Id** | **String** | ID of identity's manager. | [optional] 
**Name** | **String** | Human-readable display name of identity's manager. | [optional] 

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

