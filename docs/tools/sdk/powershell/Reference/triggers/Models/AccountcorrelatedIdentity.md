---
id: accountcorrelated-identity
title: AccountcorrelatedIdentity
pagination_label: AccountcorrelatedIdentity
sidebar_label: AccountcorrelatedIdentity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountcorrelatedIdentity', 'AccountcorrelatedIdentity'] 
slug: /tools/sdk/powershell/triggers/models/accountcorrelated-identity
tags: ['SDK', 'Software Development Kit', 'AccountcorrelatedIdentity', 'AccountcorrelatedIdentity']
---


# AccountcorrelatedIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | DTO type of the identity the account is correlated with. | [required]
**Id** | **String** | ID of the identity the account is correlated with. | [required]
**Name** | **String** | Display name of the identity the account is correlated with. | [required]

## Examples

- Prepare the resource
```powershell
$AccountcorrelatedIdentity = Initialize-AccountcorrelatedIdentity  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$AccountcorrelatedIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

