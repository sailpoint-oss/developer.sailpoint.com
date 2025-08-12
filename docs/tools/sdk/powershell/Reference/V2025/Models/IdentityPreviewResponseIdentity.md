---
id: v2025-identity-preview-response-identity
title: IdentityPreviewResponseIdentity
pagination_label: IdentityPreviewResponseIdentity
sidebar_label: IdentityPreviewResponseIdentity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityPreviewResponseIdentity', 'V2025IdentityPreviewResponseIdentity'] 
slug: /tools/sdk/powershell/v2025/models/identity-preview-response-identity
tags: ['SDK', 'Software Development Kit', 'IdentityPreviewResponseIdentity', 'V2025IdentityPreviewResponseIdentity']
---


# IdentityPreviewResponseIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Identity's DTO type. | [optional] 
**Id** | **String** | Identity ID. | [optional] 
**Name** | **String** | Identity's display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityPreviewResponseIdentity = Initialize-V2025IdentityPreviewResponseIdentity  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$IdentityPreviewResponseIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

