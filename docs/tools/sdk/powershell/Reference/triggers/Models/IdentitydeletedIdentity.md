---
id: identitydeleted-identity
title: IdentitydeletedIdentity
pagination_label: IdentitydeletedIdentity
sidebar_label: IdentitydeletedIdentity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentitydeletedIdentity', 'IdentitydeletedIdentity'] 
slug: /tools/sdk/powershell/triggers/models/identitydeleted-identity
tags: ['SDK', 'Software Development Kit', 'IdentitydeletedIdentity', 'IdentitydeletedIdentity']
---


# IdentitydeletedIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Deleted identity's DTO type. | [required]
**Id** | **String** | Deleted identity ID. | [required]
**Name** | **String** | Deleted identity's display name. | [required]

## Examples

- Prepare the resource
```powershell
$IdentitydeletedIdentity = Initialize-IdentitydeletedIdentity  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$IdentitydeletedIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

