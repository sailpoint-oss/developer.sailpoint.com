---
id: beta-identity-profile1
title: IdentityProfile1
pagination_label: IdentityProfile1
sidebar_label: IdentityProfile1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityProfile1', 'BetaIdentityProfile1'] 
slug: /tools/sdk/powershell/beta/models/identity-profile1
tags: ['SDK', 'Software Development Kit', 'IdentityProfile1', 'BetaIdentityProfile1']
---


# IdentityProfile1

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
**AuthoritativeSource** | [**IdentityProfile1AllOfAuthoritativeSource**](identity-profile1-all-of-authoritative-source) |  | [required]
**IdentityRefreshRequired** | **Boolean** | Set this value to 'True' if an identity refresh is necessary. You would typically want to trigger an identity refresh when a change has been made on the source. | [optional] [default to $false]
**IdentityCount** | **Int32** | Number of identities belonging to the identity profile. | [optional] 
**IdentityAttributeConfig** | [**IdentityAttributeConfig1**](identity-attribute-config1) |  | [optional] 
**IdentityExceptionReportReference** | [**IdentityExceptionReportReference1**](identity-exception-report-reference1) |  | [optional] 
**HasTimeBasedAttr** | **Boolean** | Indicates the value of `requiresPeriodicRefresh` attribute for the identity profile. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$IdentityProfile1 = Initialize-BetaIdentityProfile1  -Id id12345 `
 -Name aName `
 -Created 2015-05-28T14:07:17Z `
 -Modified 2015-05-28T14:07:17Z `
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
$IdentityProfile1 | ConvertTo-JSON
```


[[Back to top]](#) 

