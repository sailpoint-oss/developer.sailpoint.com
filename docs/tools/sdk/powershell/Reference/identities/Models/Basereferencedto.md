---
id: basereferencedto
title: Basereferencedto
pagination_label: Basereferencedto
sidebar_label: Basereferencedto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Basereferencedto', 'Basereferencedto'] 
slug: /tools/sdk/powershell/identities/models/basereferencedto
tags: ['SDK', 'Software Development Kit', 'Basereferencedto', 'Basereferencedto']
---


# Basereferencedto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**Dtotype**](dtotype) |  | [optional] 
**Id** | **String** | ID of the object to which this reference applies | [optional] 
**Name** | **String** | Human-readable display name of the object to which this reference applies | [optional] 

## Examples

- Prepare the resource
```powershell
$Basereferencedto = Initialize-Basereferencedto  -Type null `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$Basereferencedto | ConvertTo-JSON
```


[[Back to top]](#) 

