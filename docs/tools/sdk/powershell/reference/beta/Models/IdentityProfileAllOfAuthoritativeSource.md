---
id: identity-profile-all-of-authoritative-source
title: IdentityProfileAllOfAuthoritativeSource
pagination_label: IdentityProfileAllOfAuthoritativeSource
sidebar_label: IdentityProfileAllOfAuthoritativeSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityProfileAllOfAuthoritativeSource'] 
slug: /tools/sdk/powershell/beta/models/identity-profile-all-of-authoritative-source
tags: ['SDK', 'Software Development Kit', 'IdentityProfileAllOfAuthoritativeSource']
---


# IdentityProfileAllOfAuthoritativeSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "SOURCE" ] | Type of the object to which this reference applies | [optional] 
**Id** |  Pointer to **String** | ID of the object to which this reference applies | [optional] 
**Name** |  Pointer to **String** | Human-readable display name of the object to which this reference applies | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityProfileAllOfAuthoritativeSource = Initialize-PSSailpoint.BetaIdentityProfileAllOfAuthoritativeSource  -Type SOURCE `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name HR Active Directory
```

- Convert the resource to JSON
```powershell
$IdentityProfileAllOfAuthoritativeSource | ConvertTo-JSON
```


[[Back to top]](#) 

