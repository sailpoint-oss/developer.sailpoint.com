---
id: source-connections-dto
title: SourceConnectionsDto
pagination_label: SourceConnectionsDto
sidebar_label: SourceConnectionsDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceConnectionsDto', 'SourceConnectionsDto'] 
slug: /tools/sdk/powershell/v3/models/source-connections-dto
tags: ['SDK', 'Software Development Kit', 'SourceConnectionsDto', 'SourceConnectionsDto']
---


# SourceConnectionsDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityProfiles** |  Pointer to [**[]IdentityProfilesConnections**](identity-profiles-connections) | The IdentityProfile attached to this source | [optional] 
**CredentialProfiles** |  Pointer to **[]String** | Name of the CredentialProfile attached to this source | [optional] 
**SourceAttributes** |  Pointer to **[]String** | The attributes attached to this source | [optional] 
**MappingProfiles** |  Pointer to **[]String** | The profiles attached to this source | [optional] 
**DependentCustomTransforms** |  Pointer to [**[]Transform**](transform) |  | [optional] 
**DependentApps** |  Pointer to [**[]DependantAppConnections**](dependant-app-connections) |  | [optional] 
**MissingDependents** |  Pointer to [**[]DependantConnectionsMissingDto**](dependant-connections-missing-dto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceConnectionsDto = Initialize-PSSailpoint.V3SourceConnectionsDto  -IdentityProfiles null `
 -CredentialProfiles null `
 -SourceAttributes null `
 -MappingProfiles [ODS-AD-Profile, ODS-Profile2] `
 -DependentCustomTransforms null `
 -DependentApps null `
 -MissingDependents null
```

- Convert the resource to JSON
```powershell
$SourceConnectionsDto | ConvertTo-JSON
```


[[Back to top]](#) 

