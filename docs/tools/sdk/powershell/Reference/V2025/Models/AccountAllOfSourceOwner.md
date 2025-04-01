---
id: v2025-account-all-of-source-owner
title: AccountAllOfSourceOwner
pagination_label: AccountAllOfSourceOwner
sidebar_label: AccountAllOfSourceOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountAllOfSourceOwner', 'V2025AccountAllOfSourceOwner'] 
slug: /tools/sdk/powershell/v2025/models/account-all-of-source-owner
tags: ['SDK', 'Software Development Kit', 'AccountAllOfSourceOwner', 'V2025AccountAllOfSourceOwner']
---


# AccountAllOfSourceOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The ID of the identity | [optional] 
**Type** |  **Enum** [  "IDENTITY" ] | The type of object being referenced | [optional] 
**Name** | **String** | display name of identity | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountAllOfSourceOwner = Initialize-PSSailpoint.V2025AccountAllOfSourceOwner  -Id 2c918084660f45d6016617daa9210584 `
 -Type IDENTITY `
 -Name Adam Kennedy
```

- Convert the resource to JSON
```powershell
$AccountAllOfSourceOwner | ConvertTo-JSON
```


[[Back to top]](#) 

