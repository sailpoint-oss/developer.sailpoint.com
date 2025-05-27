---
id: beta-account-uncorrelated-identity
title: AccountUncorrelatedIdentity
pagination_label: AccountUncorrelatedIdentity
sidebar_label: AccountUncorrelatedIdentity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountUncorrelatedIdentity', 'BetaAccountUncorrelatedIdentity'] 
slug: /tools/sdk/powershell/beta/models/account-uncorrelated-identity
tags: ['SDK', 'Software Development Kit', 'AccountUncorrelatedIdentity', 'BetaAccountUncorrelatedIdentity']
---


# AccountUncorrelatedIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | DTO type of the identity the account is uncorrelated with. | [required]
**Id** | **String** | ID of the identity the account is uncorrelated with. | [required]
**Name** | **String** | Display name of the identity the account is uncorrelated with. | [required]

## Examples

- Prepare the resource
```powershell
$AccountUncorrelatedIdentity = Initialize-BetaAccountUncorrelatedIdentity  -Type IDENTITY `
 -Id 2c3780a46faadee4016fb4e018c20652 `
 -Name Allen Albertson
```

- Convert the resource to JSON
```powershell
$AccountUncorrelatedIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

