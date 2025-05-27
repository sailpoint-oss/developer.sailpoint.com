---
id: v2025-identity-profiles-connections
title: IdentityProfilesConnections
pagination_label: IdentityProfilesConnections
sidebar_label: IdentityProfilesConnections
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityProfilesConnections', 'V2025IdentityProfilesConnections'] 
slug: /tools/sdk/powershell/v2025/models/identity-profiles-connections
tags: ['SDK', 'Software Development Kit', 'IdentityProfilesConnections', 'V2025IdentityProfilesConnections']
---


# IdentityProfilesConnections

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the IdentityProfile this reference applies | [optional] 
**Name** | **String** | Human-readable display name of the IdentityProfile to which this reference applies | [optional] 
**IdentityCount** | **Int64** | The Number of Identities managed by this IdentityProfile | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityProfilesConnections = Initialize-V2025IdentityProfilesConnections  -Id 76cfddb62818416f816bc494410f46c4 `
 -Name ODS-Identity-Profile `
 -IdentityCount 100
```

- Convert the resource to JSON
```powershell
$IdentityProfilesConnections | ConvertTo-JSON
```


[[Back to top]](#) 

