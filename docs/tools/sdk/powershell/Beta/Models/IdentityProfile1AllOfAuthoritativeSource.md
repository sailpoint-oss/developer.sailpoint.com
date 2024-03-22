---
id: identity-profile1-all-of-authoritative-source
title: IdentityProfile1AllOfAuthoritativeSource
pagination_label: IdentityProfile1AllOfAuthoritativeSource
sidebar_label: IdentityProfile1AllOfAuthoritativeSource
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentityProfile1AllOfAuthoritativeSource'] 
slug: /tools/sdk/powershell/beta/models/identity-profile1-all-of-authoritative-source
tags: ['SDK', 'Software Development Kit', 'IdentityProfile1AllOfAuthoritativeSource']
---


# IdentityProfile1AllOfAuthoritativeSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "SOURCE" ] | Type of the object to which this reference applies | [optional] 
**Id** |  Pointer to **String** | ID of the object to which this reference applies | [optional] 
**Name** |  Pointer to **String** | Human-readable display name of the object to which this reference applies | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityProfile1AllOfAuthoritativeSource = Initialize-PSSailpointBetaIdentityProfile1AllOfAuthoritativeSource  -Type SOURCE `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name HR Active Directory
```

- Convert the resource to JSON
```powershell
$IdentityProfile1AllOfAuthoritativeSource | ConvertTo-JSON
```


[[Back to top]](#) 

