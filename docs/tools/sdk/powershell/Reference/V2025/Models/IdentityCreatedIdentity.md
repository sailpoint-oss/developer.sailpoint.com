---
id: v2025-identity-created-identity
title: IdentityCreatedIdentity
pagination_label: IdentityCreatedIdentity
sidebar_label: IdentityCreatedIdentity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityCreatedIdentity', 'V2025IdentityCreatedIdentity'] 
slug: /tools/sdk/powershell/v2025/models/identity-created-identity
tags: ['SDK', 'Software Development Kit', 'IdentityCreatedIdentity', 'V2025IdentityCreatedIdentity']
---


# IdentityCreatedIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Created identity's DTO type. | [required]
**Id** | **String** | Created identity ID. | [required]
**Name** | **String** | Created identity's display name. | [required]

## Examples

- Prepare the resource
```powershell
$IdentityCreatedIdentity = Initialize-PSSailpoint.V2025IdentityCreatedIdentity  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$IdentityCreatedIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

