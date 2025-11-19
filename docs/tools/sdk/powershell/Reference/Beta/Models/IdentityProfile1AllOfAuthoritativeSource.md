---
id: beta-identity-profile1-all-of-authoritative-source
title: IdentityProfile1AllOfAuthoritativeSource
pagination_label: IdentityProfile1AllOfAuthoritativeSource
sidebar_label: IdentityProfile1AllOfAuthoritativeSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityProfile1AllOfAuthoritativeSource', 'BetaIdentityProfile1AllOfAuthoritativeSource'] 
slug: /tools/sdk/powershell/beta/models/identity-profile1-all-of-authoritative-source
tags: ['SDK', 'Software Development Kit', 'IdentityProfile1AllOfAuthoritativeSource', 'BetaIdentityProfile1AllOfAuthoritativeSource']
---


# IdentityProfile1AllOfAuthoritativeSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "SOURCE" ] | Authoritative source's object type. | [optional] 
**Id** | **String** | Authoritative source's ID. | [optional] 
**Name** | **String** | Authoritative source's name. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityProfile1AllOfAuthoritativeSource = Initialize-BetaIdentityProfile1AllOfAuthoritativeSource  -Type SOURCE `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name HR Active Directory
```

- Convert the resource to JSON
```powershell
$IdentityProfile1AllOfAuthoritativeSource | ConvertTo-JSON
```


[[Back to top]](#) 

