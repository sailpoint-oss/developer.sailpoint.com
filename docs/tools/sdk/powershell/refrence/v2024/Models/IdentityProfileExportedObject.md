---
id: identity-profile-exported-object
title: IdentityProfileExportedObject
pagination_label: IdentityProfileExportedObject
sidebar_label: IdentityProfileExportedObject
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityProfileExportedObject'] 
slug: /tools/sdk/powershell/v2024/models/identity-profile-exported-object
tags: ['SDK', 'Software Development Kit', 'IdentityProfileExportedObject']
---


# IdentityProfileExportedObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** |  Pointer to **Int32** | Version or object from the target service. | [optional] 
**Self** |  Pointer to [**IdentityProfileExportedObjectSelf**](identity-profile-exported-object-self) |  | [optional] 
**Object** |  Pointer to [**IdentityProfile**](identity-profile) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityProfileExportedObject = Initialize-PSSailpoint.V2024IdentityProfileExportedObject  -Version 1 `
 -Self null `
 -Object null
```

- Convert the resource to JSON
```powershell
$IdentityProfileExportedObject | ConvertTo-JSON
```


[[Back to top]](#) 

