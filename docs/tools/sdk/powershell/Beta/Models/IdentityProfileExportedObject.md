---
id: identity-profile-exported-object
title: IdentityProfileExportedObject
pagination_label: IdentityProfileExportedObject
sidebar_label: IdentityProfileExportedObject
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentityProfileExportedObject'] 
slug: /tools/sdk/powershell/beta/models/identity-profile-exported-object
tags: ['SDK', 'Software Development Kit', 'IdentityProfileExportedObject']
---


# IdentityProfileExportedObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** |  Pointer to **Int32** | Version or object from the target service. | [optional] 
**Self** |  Pointer to [**SelfImportExportDto**](self-import-export-dto) |  | [optional] 
**Object** |  Pointer to [**IdentityProfile1**](identity-profile1) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityProfileExportedObject = Initialize-BetaIdentityProfileExportedObject  -Version 1 `
 -Self null `
 -Object null
```

- Convert the resource to JSON
```powershell
$IdentityProfileExportedObject | ConvertTo-JSON
```


[[Back to top]](#) 

