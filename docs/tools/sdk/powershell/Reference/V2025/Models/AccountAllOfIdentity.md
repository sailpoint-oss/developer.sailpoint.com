---
id: v2025-account-all-of-identity
title: AccountAllOfIdentity
pagination_label: AccountAllOfIdentity
sidebar_label: AccountAllOfIdentity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountAllOfIdentity', 'V2025AccountAllOfIdentity'] 
slug: /tools/sdk/powershell/v2025/models/account-all-of-identity
tags: ['SDK', 'Software Development Kit', 'AccountAllOfIdentity', 'V2025AccountAllOfIdentity']
---


# AccountAllOfIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The ID of the identity | [optional] 
**Type** |  **Enum** [  "IDENTITY" ] | The type of object being referenced | [optional] 
**Name** | **String** | display name of identity | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountAllOfIdentity = Initialize-V2025AccountAllOfIdentity  -Id 2c918084660f45d6016617daa9210584 `
 -Type IDENTITY `
 -Name John Doe
```

- Convert the resource to JSON
```powershell
$AccountAllOfIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

