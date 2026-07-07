---
id: dimensioncriteriakey
title: Dimensioncriteriakey
pagination_label: Dimensioncriteriakey
sidebar_label: Dimensioncriteriakey
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Dimensioncriteriakey', 'Dimensioncriteriakey'] 
slug: /tools/sdk/powershell/dimensions/models/dimensioncriteriakey
tags: ['SDK', 'Software Development Kit', 'Dimensioncriteriakey', 'Dimensioncriteriakey']
---


# Dimensioncriteriakey

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**Dimensioncriteriakeytype**](dimensioncriteriakeytype) |  | [required]
**Property** | **String** | The name of the identity attribute to which the associated criteria applies. | [required]

## Examples

- Prepare the resource
```powershell
$Dimensioncriteriakey = Initialize-Dimensioncriteriakey  -Type null `
 -Property attribute.email
```

- Convert the resource to JSON
```powershell
$Dimensioncriteriakey | ConvertTo-JSON
```


[[Back to top]](#) 

