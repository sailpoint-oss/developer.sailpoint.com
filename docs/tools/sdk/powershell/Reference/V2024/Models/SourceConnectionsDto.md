---
id: v2024-source-connections-dto
title: SourceConnectionsDto
pagination_label: SourceConnectionsDto
sidebar_label: SourceConnectionsDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceConnectionsDto', 'V2024SourceConnectionsDto'] 
slug: /tools/sdk/powershell/v2024/models/source-connections-dto
tags: ['SDK', 'Software Development Kit', 'SourceConnectionsDto', 'V2024SourceConnectionsDto']
---


# SourceConnectionsDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityProfiles** | [**[]IdentityProfilesConnections**](identity-profiles-connections) | The IdentityProfile attached to this source | [optional] 
**CredentialProfiles** | **[]String** | Name of the CredentialProfile attached to this source | [optional] 
**SourceAttributes** | **[]String** | The attributes attached to this source | [optional] 
**MappingProfiles** | **[]String** | The profiles attached to this source | [optional] 
**DependentCustomTransforms** | [**[]TransformRead**](transform-read) | A list of custom transforms associated with this source. A transform will be considered associated with a source if any attributes of the transform specify the source as the sourceName. | [optional] 
**DependentApps** | [**[]DependantAppConnections**](dependant-app-connections) |  | [optional] 
**MissingDependents** | [**[]DependantConnectionsMissingDto**](dependant-connections-missing-dto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceConnectionsDto = Initialize-V2024SourceConnectionsDto  -IdentityProfiles null `
 -CredentialProfiles null `
 -SourceAttributes null `
 -MappingProfiles [ODS-AD-Profile, ODS-Profile2] `
 -DependentCustomTransforms [{id=61190eae-290b-4335-aeb8-7335f1fd99cb, name=Split Transform, type=split, attributes={delimiter=-, index=1, input={attributes={sourceName=Example CSV Source, attributeName=last_name}, type=accountAttribute}}, internal=false}] `
 -DependentApps null `
 -MissingDependents null
```

- Convert the resource to JSON
```powershell
$SourceConnectionsDto | ConvertTo-JSON
```


[[Back to top]](#) 

