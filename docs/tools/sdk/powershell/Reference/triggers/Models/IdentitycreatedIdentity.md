---
id: identitycreated-identity
title: IdentitycreatedIdentity
pagination_label: IdentitycreatedIdentity
sidebar_label: IdentitycreatedIdentity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentitycreatedIdentity', 'IdentitycreatedIdentity'] 
slug: /tools/sdk/powershell/triggers/models/identitycreated-identity
tags: ['SDK', 'Software Development Kit', 'IdentitycreatedIdentity', 'IdentitycreatedIdentity']
---


# IdentitycreatedIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Created identity's DTO type. | [required]
**Id** | **String** | Created identity ID. | [required]
**Name** | **String** | Created identity's display name. | [required]

## Examples

- Prepare the resource
```powershell
$IdentitycreatedIdentity = Initialize-IdentitycreatedIdentity  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$IdentitycreatedIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

