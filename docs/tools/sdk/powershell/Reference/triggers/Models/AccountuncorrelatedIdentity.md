---
id: accountuncorrelated-identity
title: AccountuncorrelatedIdentity
pagination_label: AccountuncorrelatedIdentity
sidebar_label: AccountuncorrelatedIdentity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountuncorrelatedIdentity', 'AccountuncorrelatedIdentity'] 
slug: /tools/sdk/powershell/triggers/models/accountuncorrelated-identity
tags: ['SDK', 'Software Development Kit', 'AccountuncorrelatedIdentity', 'AccountuncorrelatedIdentity']
---


# AccountuncorrelatedIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | DTO type of the identity the account is uncorrelated with. | [required]
**Id** | **String** | ID of the identity the account is uncorrelated with. | [required]
**Name** | **String** | Display name of the identity the account is uncorrelated with. | [required]

## Examples

- Prepare the resource
```powershell
$AccountuncorrelatedIdentity = Initialize-AccountuncorrelatedIdentity  -Type IDENTITY `
 -Id 2c3780a46faadee4016fb4e018c20652 `
 -Name Allen Albertson
```

- Convert the resource to JSON
```powershell
$AccountuncorrelatedIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

