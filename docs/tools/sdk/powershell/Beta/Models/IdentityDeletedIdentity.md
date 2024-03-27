---
id: identity-deleted-identity
title: IdentityDeletedIdentity
pagination_label: IdentityDeletedIdentity
sidebar_label: IdentityDeletedIdentity
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentityDeletedIdentity'] 
slug: /tools/sdk/powershell/beta/models/identity-deleted-identity
tags: ['SDK', 'Software Development Kit', 'IdentityDeletedIdentity']
---


# IdentityDeletedIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |   **Enum** [  "IDENTITY" ] | Deleted identity&#39;s DTO type. | 
**Id** |  **String** | Deleted identity ID. | 
**Name** |  **String** | Deleted identity&#39;s display name. | 

## Examples

- Prepare the resource
```powershell
$IdentityDeletedIdentity = Initialize-PSSailpointBetaIdentityDeletedIdentity  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$IdentityDeletedIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

