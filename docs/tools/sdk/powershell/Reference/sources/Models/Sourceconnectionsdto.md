---
id: sourceconnectionsdto
title: Sourceconnectionsdto
pagination_label: Sourceconnectionsdto
sidebar_label: Sourceconnectionsdto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sourceconnectionsdto', 'Sourceconnectionsdto'] 
slug: /tools/sdk/powershell/sources/models/sourceconnectionsdto
tags: ['SDK', 'Software Development Kit', 'Sourceconnectionsdto', 'Sourceconnectionsdto']
---


# Sourceconnectionsdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityProfiles** | [**[]Identityprofilesconnections**](identityprofilesconnections) | The IdentityProfile attached to this source | [optional] 
**CredentialProfiles** | **[]String** | Name of the CredentialProfile attached to this source | [optional] 
**SourceAttributes** | **[]String** | The attributes attached to this source | [optional] 
**MappingProfiles** | **[]String** | The profiles attached to this source | [optional] 
**DependentCustomTransforms** | [**[]Transformread**](transformread) | A list of custom transforms associated with this source. A transform will be considered associated with a source if any attributes of the transform specify the source as the sourceName. | [optional] 
**DependentApps** | [**[]Dependantappconnections**](dependantappconnections) |  | [optional] 
**MissingDependents** | [**[]Dependantconnectionsmissingdto**](dependantconnectionsmissingdto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Sourceconnectionsdto = Initialize-Sourceconnectionsdto  -IdentityProfiles null `
 -CredentialProfiles null `
 -SourceAttributes null `
 -MappingProfiles ["ODS-AD-Profile","ODS-Profile2"] `
 -DependentCustomTransforms [{"id":"61190eae-290b-4335-aeb8-7335f1fd99cb","name":"Split Transform","type":"split","attributes":{"delimiter":"-","index":1,"input":{"attributes":{"sourceName":"Example CSV Source","attributeName":"last_name"},"type":"accountAttribute"}},"internal":false}] `
 -DependentApps null `
 -MissingDependents null
```

- Convert the resource to JSON
```powershell
$Sourceconnectionsdto | ConvertTo-JSON
```


[[Back to top]](#) 

