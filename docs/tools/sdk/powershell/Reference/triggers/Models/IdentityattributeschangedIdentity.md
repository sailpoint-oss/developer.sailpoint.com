---
id: identityattributeschanged-identity
title: IdentityattributeschangedIdentity
pagination_label: IdentityattributeschangedIdentity
sidebar_label: IdentityattributeschangedIdentity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityattributeschangedIdentity', 'IdentityattributeschangedIdentity'] 
slug: /tools/sdk/powershell/triggers/models/identityattributeschanged-identity
tags: ['SDK', 'Software Development Kit', 'IdentityattributeschangedIdentity', 'IdentityattributeschangedIdentity']
---


# IdentityattributeschangedIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | DTO type of identity whose attributes changed. | [required]
**Id** | **String** | ID of identity whose attributes changed. | [required]
**Name** | **String** | Display name of identity whose attributes changed. | [required]

## Examples

- Prepare the resource
```powershell
$IdentityattributeschangedIdentity = Initialize-IdentityattributeschangedIdentity  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$IdentityattributeschangedIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

