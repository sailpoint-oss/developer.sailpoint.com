---
id: beta-identity-profile-all-of-owner
title: IdentityProfileAllOfOwner
pagination_label: IdentityProfileAllOfOwner
sidebar_label: IdentityProfileAllOfOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityProfileAllOfOwner', 'BetaIdentityProfileAllOfOwner'] 
slug: /tools/sdk/powershell/beta/models/identity-profile-all-of-owner
tags: ['SDK', 'Software Development Kit', 'IdentityProfileAllOfOwner', 'BetaIdentityProfileAllOfOwner']
---


# IdentityProfileAllOfOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Owner's object type. | [optional] 
**Id** | **String** | Owner's ID. | [optional] 
**Name** | **String** | Owner's name. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityProfileAllOfOwner = Initialize-PSSailpoint.BetaIdentityProfileAllOfOwner  -Type IDENTITY `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$IdentityProfileAllOfOwner | ConvertTo-JSON
```


[[Back to top]](#) 

