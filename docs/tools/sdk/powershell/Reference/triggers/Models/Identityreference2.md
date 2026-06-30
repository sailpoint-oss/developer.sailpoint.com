---
id: identityreference2
title: Identityreference2
pagination_label: Identityreference2
sidebar_label: Identityreference2
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Identityreference2', 'Identityreference2'] 
slug: /tools/sdk/powershell/triggers/models/identityreference2
tags: ['SDK', 'Software Development Kit', 'Identityreference2', 'Identityreference2']
---


# Identityreference2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The ID of the identity that is correlated with this account. | [required]
**Name** | **String** | The name of the identity that is correlated with this account. | [required]
**Alias** | **String** | The alias of the identity. | [required]
**Email** | **String** | The email of the identity. | [required]

## Examples

- Prepare the resource
```powershell
$Identityreference2 = Initialize-Identityreference2  -Id ee769173319b41d19ccec6c235423237b `
 -Name john.doe `
 -Alias jdoe `
 -Email john.doe@email.com
```

- Convert the resource to JSON
```powershell
$Identityreference2 | ConvertTo-JSON
```


[[Back to top]](#) 

