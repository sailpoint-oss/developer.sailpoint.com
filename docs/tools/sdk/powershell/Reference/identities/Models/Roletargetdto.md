---
id: roletargetdto
title: Roletargetdto
pagination_label: Roletargetdto
sidebar_label: Roletargetdto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Roletargetdto', 'Roletargetdto'] 
slug: /tools/sdk/powershell/identities/models/roletargetdto
tags: ['SDK', 'Software Development Kit', 'Roletargetdto', 'Roletargetdto']
---


# Roletargetdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Source** | [**Basereferencedto**](basereferencedto) |  | [optional] 
**AccountInfo** | [**Accountinfodto**](accountinfodto) |  | [optional] 
**Role** | [**Basereferencedto**](basereferencedto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Roletargetdto = Initialize-Roletargetdto  -Source null `
 -AccountInfo null `
 -Role null
```

- Convert the resource to JSON
```powershell
$Roletargetdto | ConvertTo-JSON
```


[[Back to top]](#) 

