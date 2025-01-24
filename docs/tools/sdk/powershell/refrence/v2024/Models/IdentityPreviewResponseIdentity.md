---
id: identity-preview-response-identity
title: IdentityPreviewResponseIdentity
pagination_label: IdentityPreviewResponseIdentity
sidebar_label: IdentityPreviewResponseIdentity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityPreviewResponseIdentity'] 
slug: /tools/sdk/powershell/v2024/models/identity-preview-response-identity
tags: ['SDK', 'Software Development Kit', 'IdentityPreviewResponseIdentity']
---


# IdentityPreviewResponseIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "IDENTITY" ] | Identity's DTO type. | [optional] 
**Id** |  Pointer to **String** | Identity ID. | [optional] 
**Name** |  Pointer to **String** | Identity's display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityPreviewResponseIdentity = Initialize-PSSailpoint.V2024IdentityPreviewResponseIdentity  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$IdentityPreviewResponseIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

