---
id: rolematchdto
title: Rolematchdto
pagination_label: Rolematchdto
sidebar_label: Rolematchdto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Rolematchdto', 'Rolematchdto'] 
slug: /tools/sdk/powershell/identities/models/rolematchdto
tags: ['SDK', 'Software Development Kit', 'Rolematchdto', 'Rolematchdto']
---


# Rolematchdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoleRef** | [**Basereferencedto**](basereferencedto) |  | [optional] 
**MatchedAttributes** | [**[]Contextattributedto**](contextattributedto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Rolematchdto = Initialize-Rolematchdto  -RoleRef null `
 -MatchedAttributes null
```

- Convert the resource to JSON
```powershell
$Rolematchdto | ConvertTo-JSON
```


[[Back to top]](#) 

