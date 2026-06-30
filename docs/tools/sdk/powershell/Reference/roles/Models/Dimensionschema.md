---
id: dimensionschema
title: Dimensionschema
pagination_label: Dimensionschema
sidebar_label: Dimensionschema
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Dimensionschema', 'Dimensionschema'] 
slug: /tools/sdk/powershell/roles/models/dimensionschema
tags: ['SDK', 'Software Development Kit', 'Dimensionschema', 'Dimensionschema']
---


# Dimensionschema

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DimensionAttributes** | [**[]Dimensionattribute**](dimensionattribute) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Dimensionschema = Initialize-Dimensionschema  -DimensionAttributes null
```

- Convert the resource to JSON
```powershell
$Dimensionschema | ConvertTo-JSON
```


[[Back to top]](#) 

