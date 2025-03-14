---
id: beta-identity-created-identity
title: IdentityCreatedIdentity
pagination_label: IdentityCreatedIdentity
sidebar_label: IdentityCreatedIdentity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityCreatedIdentity', 'BetaIdentityCreatedIdentity'] 
slug: /tools/sdk/powershell/beta/models/identity-created-identity
tags: ['SDK', 'Software Development Kit', 'IdentityCreatedIdentity', 'BetaIdentityCreatedIdentity']
---


# IdentityCreatedIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Identity's DTO type. | [required]
**Id** | **String** | Identity's unique ID. | [required]
**Name** | **String** | Identity's name. | [required]

## Examples

- Prepare the resource
```powershell
$IdentityCreatedIdentity = Initialize-PSSailpoint.BetaIdentityCreatedIdentity  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$IdentityCreatedIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

