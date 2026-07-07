---
id: identityprofilesconnections
title: Identityprofilesconnections
pagination_label: Identityprofilesconnections
sidebar_label: Identityprofilesconnections
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Identityprofilesconnections', 'Identityprofilesconnections'] 
slug: /tools/sdk/powershell/sources/models/identityprofilesconnections
tags: ['SDK', 'Software Development Kit', 'Identityprofilesconnections', 'Identityprofilesconnections']
---


# Identityprofilesconnections

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the IdentityProfile this reference applies | [optional] 
**Name** | **String** | Human-readable display name of the IdentityProfile to which this reference applies | [optional] 
**IdentityCount** | **Int64** | The Number of Identities managed by this IdentityProfile | [optional] 

## Examples

- Prepare the resource
```powershell
$Identityprofilesconnections = Initialize-Identityprofilesconnections  -Id 76cfddb62818416f816bc494410f46c4 `
 -Name ODS-Identity-Profile `
 -IdentityCount 100
```

- Convert the resource to JSON
```powershell
$Identityprofilesconnections | ConvertTo-JSON
```


[[Back to top]](#) 

