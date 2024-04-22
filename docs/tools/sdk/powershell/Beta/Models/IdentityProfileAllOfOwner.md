---
id: identity-profile-all-of-owner
title: IdentityProfileAllOfOwner
pagination_label: IdentityProfileAllOfOwner
sidebar_label: IdentityProfileAllOfOwner
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentityProfileAllOfOwner'] 
slug: /tools/sdk/powershell/beta/models/identity-profile-all-of-owner
tags: ['SDK', 'Software Development Kit', 'IdentityProfileAllOfOwner']
---


# IdentityProfileAllOfOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "IDENTITY" ] | Type of the object to which this reference applies | [optional] 
**Id** |  Pointer to **String** | ID of the object to which this reference applies | [optional] 
**Name** |  Pointer to **String** | Human-readable display name of the object to which this reference applies | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityProfileAllOfOwner = Initialize-BetaIdentityProfileAllOfOwner  -Type IDENTITY `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$IdentityProfileAllOfOwner | ConvertTo-JSON
```


[[Back to top]](#) 

