---
id: identity-profile
title: IdentityProfile
pagination_label: IdentityProfile
sidebar_label: IdentityProfile
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentityProfile'] 
slug: /tools/sdk/powershell/beta/models/identity-profile
tags: ['SDK', 'Software Development Kit', 'IdentityProfile']
---


# IdentityProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** |  **String** | Name of the Object | 
**Created** |  Pointer to **System.DateTime** | Creation date of the Object | [optional] [readonly] 
**Modified** |  Pointer to **System.DateTime** | Last modification date of the Object | [optional] [readonly] 
**Description** |  Pointer to **String** | The description of the Identity Profile. | [optional] 
**Owner** |  Pointer to [**IdentityProfileAllOfOwner**](identity-profile-all-of-owner) |  | [optional] 
**Priority** |  Pointer to **Int64** | The priority for an Identity Profile. | [optional] 
**AuthoritativeSource** |  [**IdentityProfileAllOfAuthoritativeSource**](identity-profile-all-of-authoritative-source) |  | 
**IdentityRefreshRequired** |  Pointer to **Boolean** | True if a identity refresh is needed. Typically triggered when a change on the source has been made | [optional] [default to $false]
**IdentityCount** |  Pointer to **Int32** | The number of identities that belong to the Identity Profile. | [optional] 
**IdentityAttributeConfig** |  Pointer to [**IdentityAttributeConfig**](identity-attribute-config) |  | [optional] 
**IdentityExceptionReportReference** |  Pointer to [**IdentityExceptionReportReference**](identity-exception-report-reference) |  | [optional] 
**HasTimeBasedAttr** |  Pointer to **Boolean** | Indicates the value of requiresPeriodicRefresh attribute for the Identity Profile. | [optional] [default to $true]

## Examples

- Prepare the resource
```powershell
$IdentityProfile = Initialize-BetaIdentityProfile  -Id id12345 `
 -Name aName `
 -Created 2023-01-03T21:16:22.432Z `
 -Modified 2023-01-03T21:16:22.432Z `
 -Description My custom flat file profile `
 -Owner null `
 -Priority 10 `
 -AuthoritativeSource null `
 -IdentityRefreshRequired true `
 -IdentityCount 8 `
 -IdentityAttributeConfig null `
 -IdentityExceptionReportReference null `
 -HasTimeBasedAttr true
```

- Convert the resource to JSON
```powershell
$IdentityProfile | ConvertTo-JSON
```


[[Back to top]](#) 

