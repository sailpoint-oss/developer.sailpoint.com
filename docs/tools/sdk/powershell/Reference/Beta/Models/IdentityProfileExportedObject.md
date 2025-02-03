---
id: beta-identity-profile-exported-object
title: IdentityProfileExportedObject
pagination_label: IdentityProfileExportedObject
sidebar_label: IdentityProfileExportedObject
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityProfileExportedObject', 'BetaIdentityProfileExportedObject'] 
slug: /tools/sdk/powershell/beta/models/identity-profile-exported-object
tags: ['SDK', 'Software Development Kit', 'IdentityProfileExportedObject', 'BetaIdentityProfileExportedObject']
---


# IdentityProfileExportedObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | **Int32** | Version or object from the target service. | [optional] 
**Self** | [**SelfImportExportDto**](self-import-export-dto) |  | [optional] 
**Object** | [**IdentityProfile1**](identity-profile1) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityProfileExportedObject = Initialize-PSSailpoint.BetaIdentityProfileExportedObject  -Version 1 `
 -Self null `
 -Object null
```

- Convert the resource to JSON
```powershell
$IdentityProfileExportedObject | ConvertTo-JSON
```


[[Back to top]](#) 

