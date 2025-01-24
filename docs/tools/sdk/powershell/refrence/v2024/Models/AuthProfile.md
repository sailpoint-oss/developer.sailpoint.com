---
id: auth-profile
title: AuthProfile
pagination_label: AuthProfile
sidebar_label: AuthProfile
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AuthProfile'] 
slug: /tools/sdk/powershell/v2024/models/auth-profile
tags: ['SDK', 'Software Development Kit', 'AuthProfile']
---


# AuthProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  Pointer to **String** | Authentication Profile name. | [optional] 
**OffNetwork** |  Pointer to **Boolean** | Use it to block access from off network. | [optional] [default to $false]
**UntrustedGeography** |  Pointer to **Boolean** | Use it to block access from untrusted geoographies. | [optional] [default to $false]
**ApplicationId** |  Pointer to **String** | Application ID. | [optional] 
**ApplicationName** |  Pointer to **String** | Application name. | [optional] 
**Type** |  Pointer to  **Enum** [  "BLOCK",    "MFA",    "NON_PTA",    "PTA" ] | Type of the Authentication Profile. | [optional] 
**StrongAuthLogin** |  Pointer to **Boolean** | Use it to enable strong authentication. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$AuthProfile = Initialize-PSSailpoint.V2024AuthProfile  -Name EndToEnd-Profile `
 -OffNetwork true `
 -UntrustedGeography true `
 -ApplicationId 2c91808458ae7a4f0158b1bbf8af0628 `
 -ApplicationName EndToEnd-Source `
 -Type PTA `
 -StrongAuthLogin true
```

- Convert the resource to JSON
```powershell
$AuthProfile | ConvertTo-JSON
```


[[Back to top]](#) 

