---
id: identity-created-identity
title: IdentityCreatedIdentity
pagination_label: IdentityCreatedIdentity
sidebar_label: IdentityCreatedIdentity
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentityCreatedIdentity'] 
slug: /tools/sdk/powershell/beta/models/identity-created-identity
tags: ['SDK', 'Software Development Kit', 'IdentityCreatedIdentity']
---


# IdentityCreatedIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |   **Enum** [  "IDENTITY" ] | Created identity&#39;s DTO type. | 
**Id** |  **String** | Created identity ID. | 
**Name** |  **String** | Created identity&#39;s display name. | 

## Examples

- Prepare the resource
```powershell
$IdentityCreatedIdentity = Initialize-PSSailpointBetaIdentityCreatedIdentity  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$IdentityCreatedIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

