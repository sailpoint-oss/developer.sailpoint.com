---
id: beta-identity-attributes-changed-identity
title: IdentityAttributesChangedIdentity
pagination_label: IdentityAttributesChangedIdentity
sidebar_label: IdentityAttributesChangedIdentity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityAttributesChangedIdentity', 'BetaIdentityAttributesChangedIdentity'] 
slug: /tools/sdk/powershell/beta/models/identity-attributes-changed-identity
tags: ['SDK', 'Software Development Kit', 'IdentityAttributesChangedIdentity', 'BetaIdentityAttributesChangedIdentity']
---


# IdentityAttributesChangedIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | DTO type of identity whose attributes changed. | [required]
**Id** | **String** | ID of identity whose attributes changed. | [required]
**Name** | **String** | Name of identity whose attributes changed. | [required]

## Examples

- Prepare the resource
```powershell
$IdentityAttributesChangedIdentity = Initialize-PSSailpoint.BetaIdentityAttributesChangedIdentity  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$IdentityAttributesChangedIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

