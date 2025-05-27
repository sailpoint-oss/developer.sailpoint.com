---
id: v2025-account-attributes-changed-identity
title: AccountAttributesChangedIdentity
pagination_label: AccountAttributesChangedIdentity
sidebar_label: AccountAttributesChangedIdentity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountAttributesChangedIdentity', 'V2025AccountAttributesChangedIdentity'] 
slug: /tools/sdk/powershell/v2025/models/account-attributes-changed-identity
tags: ['SDK', 'Software Development Kit', 'AccountAttributesChangedIdentity', 'V2025AccountAttributesChangedIdentity']
---


# AccountAttributesChangedIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | DTO type of the identity whose account attributes were updated. | [required]
**Id** | **String** | ID of the identity whose account attributes were updated. | [required]
**Name** | **String** | Display name of the identity whose account attributes were updated. | [required]

## Examples

- Prepare the resource
```powershell
$AccountAttributesChangedIdentity = Initialize-V2025AccountAttributesChangedIdentity  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$AccountAttributesChangedIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

