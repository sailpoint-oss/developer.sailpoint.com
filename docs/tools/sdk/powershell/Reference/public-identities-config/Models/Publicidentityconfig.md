---
id: publicidentityconfig
title: Publicidentityconfig
pagination_label: Publicidentityconfig
sidebar_label: Publicidentityconfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Publicidentityconfig', 'Publicidentityconfig'] 
slug: /tools/sdk/powershell/publicidentitiesconfig/models/publicidentityconfig
tags: ['SDK', 'Software Development Kit', 'Publicidentityconfig', 'Publicidentityconfig']
---


# Publicidentityconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attributes** | [**[]Publicidentityattributeconfig**](publicidentityattributeconfig) | Up to 5 identity attributes that will be available to everyone in the org for all users in the org. | [optional] 
**Modified** | **System.DateTime** | When this configuration was last modified. | [optional] 
**ModifiedBy** | [**Identityreference**](identityreference) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Publicidentityconfig = Initialize-Publicidentityconfig  -Attributes null `
 -Modified 2018-06-25T20:22:28.104Z `
 -ModifiedBy null
```

- Convert the resource to JSON
```powershell
$Publicidentityconfig | ConvertTo-JSON
```


[[Back to top]](#) 

