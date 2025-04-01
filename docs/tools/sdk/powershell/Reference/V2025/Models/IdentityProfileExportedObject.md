---
id: v2025-identity-profile-exported-object
title: IdentityProfileExportedObject
pagination_label: IdentityProfileExportedObject
sidebar_label: IdentityProfileExportedObject
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityProfileExportedObject', 'V2025IdentityProfileExportedObject'] 
slug: /tools/sdk/powershell/v2025/models/identity-profile-exported-object
tags: ['SDK', 'Software Development Kit', 'IdentityProfileExportedObject', 'V2025IdentityProfileExportedObject']
---


# IdentityProfileExportedObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | **Int32** | Version or object from the target service. | [optional] 
**Self** | [**IdentityProfileExportedObjectSelf**](identity-profile-exported-object-self) |  | [optional] 
**Object** | [**IdentityProfile**](identity-profile) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityProfileExportedObject = Initialize-PSSailpoint.V2025IdentityProfileExportedObject  -Version 1 `
 -Self null `
 -Object null
```

- Convert the resource to JSON
```powershell
$IdentityProfileExportedObject | ConvertTo-JSON
```


[[Back to top]](#) 

