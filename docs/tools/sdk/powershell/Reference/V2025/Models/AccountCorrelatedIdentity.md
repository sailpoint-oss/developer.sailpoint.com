---
id: v2025-account-correlated-identity
title: AccountCorrelatedIdentity
pagination_label: AccountCorrelatedIdentity
sidebar_label: AccountCorrelatedIdentity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountCorrelatedIdentity', 'V2025AccountCorrelatedIdentity'] 
slug: /tools/sdk/powershell/v2025/models/account-correlated-identity
tags: ['SDK', 'Software Development Kit', 'AccountCorrelatedIdentity', 'V2025AccountCorrelatedIdentity']
---


# AccountCorrelatedIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | DTO type of the identity the account is correlated with. | [required]
**Id** | **String** | ID of the identity the account is correlated with. | [required]
**Name** | **String** | Display name of the identity the account is correlated with. | [required]

## Examples

- Prepare the resource
```powershell
$AccountCorrelatedIdentity = Initialize-V2025AccountCorrelatedIdentity  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$AccountCorrelatedIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

