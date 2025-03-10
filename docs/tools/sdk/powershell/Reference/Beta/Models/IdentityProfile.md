---
id: beta-identity-profile
title: IdentityProfile
pagination_label: IdentityProfile
sidebar_label: IdentityProfile
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityProfile', 'BetaIdentityProfile'] 
slug: /tools/sdk/powershell/beta/models/identity-profile
tags: ['SDK', 'Software Development Kit', 'IdentityProfile', 'BetaIdentityProfile']
---


# IdentityProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **String** | Name of the Object | [required]
**Created** | **System.DateTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | **System.DateTime** | Last modification date of the Object | [optional] [readonly] 
**Description** | **String** | Identity profile's description. | [optional] 
**Owner** | [**IdentityProfileAllOfOwner**](identity-profile-all-of-owner) |  | [optional] 
**Priority** | **Int64** | Identity profile's priority. | [optional] 
**AuthoritativeSource** | [**IdentityProfileAllOfAuthoritativeSource**](identity-profile-all-of-authoritative-source) |  | [required]
**IdentityRefreshRequired** | **Boolean** | Set this value to 'True' if an identity refresh is necessary. You would typically want to trigger an identity refresh when a change has been made on the source. | [optional] [default to $false]
**IdentityCount** | **Int32** | Number of identities belonging to the identity profile. | [optional] 
**IdentityAttributeConfig** | [**IdentityAttributeConfig**](identity-attribute-config) |  | [optional] 
**IdentityExceptionReportReference** | [**IdentityExceptionReportReference**](identity-exception-report-reference) |  | [optional] 
**HasTimeBasedAttr** | **Boolean** | Indicates the value of `requiresPeriodicRefresh` attribute for the identity profile. | [optional] [default to $true]

## Examples

- Prepare the resource
```powershell
$IdentityProfile = Initialize-PSSailpoint.BetaIdentityProfile  -Id id12345 `
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

