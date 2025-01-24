---
id: identity-profile1
title: IdentityProfile1
pagination_label: IdentityProfile1
sidebar_label: IdentityProfile1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityProfile1'] 
slug: /tools/sdk/powershell/beta/models/identity-profile1
tags: ['SDK', 'Software Development Kit', 'IdentityProfile1']
---


# IdentityProfile1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** |  **String** | Name of the Object | [required]
**Created** |  Pointer to **System.DateTime** | Creation date of the Object | [optional] [readonly] 
**Modified** |  Pointer to **System.DateTime** | Last modification date of the Object | [optional] [readonly] 
**Description** |  Pointer to **String** | The description of the Identity Profile. | [optional] 
**Owner** |  Pointer to [**IdentityProfileAllOfOwner**](identity-profile-all-of-owner) |  | [optional] 
**Priority** |  Pointer to **Int64** | The priority for an Identity Profile. | [optional] 
**AuthoritativeSource** |  [**IdentityProfile1AllOfAuthoritativeSource**](identity-profile1-all-of-authoritative-source) |  | [required]
**IdentityRefreshRequired** |  Pointer to **Boolean** | True if a identity refresh is needed. Typically triggered when a change on the source has been made. | [optional] [default to $false]
**IdentityCount** |  Pointer to **Int32** | The number of identities that belong to the Identity Profile. | [optional] 
**IdentityAttributeConfig** |  Pointer to [**IdentityAttributeConfig1**](identity-attribute-config1) |  | [optional] 
**IdentityExceptionReportReference** |  Pointer to [**IdentityExceptionReportReference1**](identity-exception-report-reference1) |  | [optional] 
**HasTimeBasedAttr** |  Pointer to **Boolean** | Indicates the value of requiresPeriodicRefresh attribute for the Identity Profile. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$IdentityProfile1 = Initialize-PSSailpoint.BetaIdentityProfile1  -Id id12345 `
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

