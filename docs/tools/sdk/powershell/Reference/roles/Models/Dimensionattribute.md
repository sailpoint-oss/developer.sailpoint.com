---
id: dimensionattribute
title: Dimensionattribute
pagination_label: Dimensionattribute
sidebar_label: Dimensionattribute
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Dimensionattribute', 'Dimensionattribute'] 
slug: /tools/sdk/powershell/roles/models/dimensionattribute
tags: ['SDK', 'Software Development Kit', 'Dimensionattribute', 'Dimensionattribute']
---


# Dimensionattribute

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Name of the attribute | [optional] 
**DisplayName** | **String** | Display name of the attribute | [optional] 
**Derived** | **Boolean** | If an attribute is derived, its value comes from the identity. Otherwise, it can be provided with access request | [optional] [default to $true]

## Examples

- Prepare the resource
```powershell
$Dimensionattribute = Initialize-Dimensionattribute  -Name city `
 -DisplayName City `
 -Derived true
```

- Convert the resource to JSON
```powershell
$Dimensionattribute | ConvertTo-JSON
```


[[Back to top]](#) 

