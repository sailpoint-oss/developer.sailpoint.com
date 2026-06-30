---
id: identityprofile-all-of-authoritative-source
title: IdentityprofileAllOfAuthoritativeSource
pagination_label: IdentityprofileAllOfAuthoritativeSource
sidebar_label: IdentityprofileAllOfAuthoritativeSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityprofileAllOfAuthoritativeSource', 'IdentityprofileAllOfAuthoritativeSource'] 
slug: /tools/sdk/powershell/identityprofiles/models/identityprofile-all-of-authoritative-source
tags: ['SDK', 'Software Development Kit', 'IdentityprofileAllOfAuthoritativeSource', 'IdentityprofileAllOfAuthoritativeSource']
---


# IdentityprofileAllOfAuthoritativeSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "SOURCE" ] | Authoritative source's object type. | [optional] 
**Id** | **String** | Authoritative source's ID. | [optional] 
**Name** | **String** | Authoritative source's name. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityprofileAllOfAuthoritativeSource = Initialize-IdentityprofileAllOfAuthoritativeSource  -Type SOURCE `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name HR Active Directory
```

- Convert the resource to JSON
```powershell
$IdentityprofileAllOfAuthoritativeSource | ConvertTo-JSON
```


[[Back to top]](#) 

