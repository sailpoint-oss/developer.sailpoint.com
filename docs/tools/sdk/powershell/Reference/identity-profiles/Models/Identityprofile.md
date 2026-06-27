---
id: identityprofile
title: Identityprofile
pagination_label: Identityprofile
sidebar_label: Identityprofile
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Identityprofile', 'Identityprofile'] 
slug: /tools/sdk/powershell/identityprofiles/models/identityprofile
tags: ['SDK', 'Software Development Kit', 'Identityprofile', 'Identityprofile']
---


# Identityprofile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **String** | Name of the Object | [required]
**Created** | **System.DateTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | **System.DateTime** | Last modification date of the Object | [optional] [readonly] 
**Description** | **String** | Identity profile's description. | [optional] 
**Owner** | [**IdentityprofileAllOfOwner**](identityprofile-all-of-owner) |  | [optional] 
**Priority** | **Int64** | Identity profile's priority. | [optional] 
**AuthoritativeSource** | [**IdentityprofileAllOfAuthoritativeSource**](identityprofile-all-of-authoritative-source) |  | [required]
**IdentityRefreshRequired** | **Boolean** | Set this value to 'True' if an identity refresh is necessary. You would typically want to trigger an identity refresh when a change has been made on the source. | [optional] [default to $false]
**IdentityCount** | **Int32** | Number of identities belonging to the identity profile. | [optional] 
**IdentityAttributeConfig** | [**Identityattributeconfig**](identityattributeconfig) |  | [optional] 
**IdentityExceptionReportReference** | [**Identityexceptionreportreference**](identityexceptionreportreference) |  | [optional] 
**HasTimeBasedAttr** | **Boolean** | Indicates the value of `requiresPeriodicRefresh` attribute for the identity profile. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$Identityprofile = Initialize-Identityprofile  -Id id12345 `
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
$Identityprofile | ConvertTo-JSON
```


[[Back to top]](#) 

