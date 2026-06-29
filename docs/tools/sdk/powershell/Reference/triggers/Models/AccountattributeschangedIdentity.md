---
id: accountattributeschanged-identity
title: AccountattributeschangedIdentity
pagination_label: AccountattributeschangedIdentity
sidebar_label: AccountattributeschangedIdentity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountattributeschangedIdentity', 'AccountattributeschangedIdentity'] 
slug: /tools/sdk/powershell/triggers/models/accountattributeschanged-identity
tags: ['SDK', 'Software Development Kit', 'AccountattributeschangedIdentity', 'AccountattributeschangedIdentity']
---


# AccountattributeschangedIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | DTO type of the identity whose account attributes were updated. | [required]
**Id** | **String** | ID of the identity whose account attributes were updated. | [required]
**Name** | **String** | Display name of the identity whose account attributes were updated. | [required]

## Examples

- Prepare the resource
```powershell
$AccountattributeschangedIdentity = Initialize-AccountattributeschangedIdentity  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$AccountattributeschangedIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

