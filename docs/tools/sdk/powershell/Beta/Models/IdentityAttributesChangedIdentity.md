---
id: identity-attributes-changed-identity
title: IdentityAttributesChangedIdentity
pagination_label: IdentityAttributesChangedIdentity
sidebar_label: IdentityAttributesChangedIdentity
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentityAttributesChangedIdentity'] 
slug: /tools/sdk/powershell/beta/models/identity-attributes-changed-identity
tags: ['SDK', 'Software Development Kit', 'IdentityAttributesChangedIdentity']
---


# IdentityAttributesChangedIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |   **Enum** [  "IDENTITY" ] | DTO type of identity whose attributes changed. | 
**Id** |  **String** | ID of identity whose attributes changed. | 
**Name** |  **String** | Display name of identity whose attributes changed. | 

## Examples

- Prepare the resource
```powershell
$IdentityAttributesChangedIdentity = Initialize-PSSailpointBetaIdentityAttributesChangedIdentity  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$IdentityAttributesChangedIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

