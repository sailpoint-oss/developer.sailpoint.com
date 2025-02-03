---
id: v2024-identity-profile
title: IdentityProfile
pagination_label: IdentityProfile
sidebar_label: IdentityProfile
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityProfile', 'V2024IdentityProfile'] 
slug: /tools/sdk/powershell/v2024/models/identity-profile
tags: ['SDK', 'Software Development Kit', 'IdentityProfile', 'V2024IdentityProfile']
---


# IdentityProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **String** | Name of the Object | [required]
**Created** | **System.DateTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | **System.DateTime** | Last modification date of the Object | [optional] [readonly] 
**Description** | **String** | The description of the Identity Profile. | [optional] 
**Owner** | [**IdentityProfileAllOfOwner**](identity-profile-all-of-owner) |  | [optional] 
**Priority** | **Int64** | The priority for an Identity Profile. | [optional] 
**AuthoritativeSource** | [**IdentityProfileAllOfAuthoritativeSource**](identity-profile-all-of-authoritative-source) |  | [required]
**IdentityRefreshRequired** | **Boolean** | True if a identity refresh is needed. Typically triggered when a change on the source has been made. | [optional] [default to $false]
**IdentityCount** | **Int32** | The number of identities that belong to the Identity Profile. | [optional] 
**IdentityAttributeConfig** | [**IdentityAttributeConfig**](identity-attribute-config) |  | [optional] 
**IdentityExceptionReportReference** | [**IdentityExceptionReportReference**](identity-exception-report-reference) |  | [optional] 
**HasTimeBasedAttr** | **Boolean** | Indicates the value of requiresPeriodicRefresh attribute for the Identity Profile. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$IdentityProfile = Initialize-PSSailpoint.V2024IdentityProfile  -Id id12345 `
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
$IdentityProfile | ConvertTo-JSON
```


[[Back to top]](#) 

