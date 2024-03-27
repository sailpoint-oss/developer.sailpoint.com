---
id: account-correlated-identity
title: AccountCorrelatedIdentity
pagination_label: AccountCorrelatedIdentity
sidebar_label: AccountCorrelatedIdentity
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccountCorrelatedIdentity'] 
slug: /tools/sdk/powershell/beta/models/account-correlated-identity
tags: ['SDK', 'Software Development Kit', 'AccountCorrelatedIdentity']
---


# AccountCorrelatedIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |   **Enum** [  "IDENTITY" ] | DTO type of the identity the account is correlated with. | 
**Id** |  **String** | ID of the identity the account is correlated with. | 
**Name** |  **String** | Display name of the identity the account is correlated with. | 

## Examples

- Prepare the resource
```powershell
$AccountCorrelatedIdentity = Initialize-PSSailpointBetaAccountCorrelatedIdentity  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$AccountCorrelatedIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

