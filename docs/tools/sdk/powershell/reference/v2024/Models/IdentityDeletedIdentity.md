---
id: v2024-identity-deleted-identity
title: IdentityDeletedIdentity
pagination_label: IdentityDeletedIdentity
sidebar_label: IdentityDeletedIdentity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityDeletedIdentity'] 
slug: /tools/sdk/powershell/v2024/models/identity-deleted-identity
tags: ['SDK', 'Software Development Kit', 'IdentityDeletedIdentity']
---


# IdentityDeletedIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |   **Enum** [  "IDENTITY" ] | Deleted identity's DTO type. | [required]
**Id** |  **String** | Deleted identity ID. | [required]
**Name** |  **String** | Deleted identity's display name. | [required]

## Examples

- Prepare the resource
```powershell
$IdentityDeletedIdentity = Initialize-PSSailpoint.V2024IdentityDeletedIdentity  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$IdentityDeletedIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

