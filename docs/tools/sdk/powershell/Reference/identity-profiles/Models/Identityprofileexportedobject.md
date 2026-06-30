---
id: identityprofileexportedobject
title: Identityprofileexportedobject
pagination_label: Identityprofileexportedobject
sidebar_label: Identityprofileexportedobject
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Identityprofileexportedobject', 'Identityprofileexportedobject'] 
slug: /tools/sdk/powershell/identityprofiles/models/identityprofileexportedobject
tags: ['SDK', 'Software Development Kit', 'Identityprofileexportedobject', 'Identityprofileexportedobject']
---


# Identityprofileexportedobject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | **Int32** | Version or object from the target service. | [optional] 
**Self** | [**IdentityprofileexportedobjectSelf**](identityprofileexportedobject-self) |  | [optional] 
**Object** | [**Identityprofile**](identityprofile) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Identityprofileexportedobject = Initialize-Identityprofileexportedobject  -Version 1 `
 -Self null `
 -Object null
```

- Convert the resource to JSON
```powershell
$Identityprofileexportedobject | ConvertTo-JSON
```


[[Back to top]](#) 

