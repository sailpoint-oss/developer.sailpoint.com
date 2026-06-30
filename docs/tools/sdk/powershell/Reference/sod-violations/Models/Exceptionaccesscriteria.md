---
id: exceptionaccesscriteria
title: Exceptionaccesscriteria
pagination_label: Exceptionaccesscriteria
sidebar_label: Exceptionaccesscriteria
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Exceptionaccesscriteria', 'Exceptionaccesscriteria'] 
slug: /tools/sdk/powershell/sodviolations/models/exceptionaccesscriteria
tags: ['SDK', 'Software Development Kit', 'Exceptionaccesscriteria', 'Exceptionaccesscriteria']
---


# Exceptionaccesscriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LeftCriteria** | [**Exceptioncriteria**](exceptioncriteria) |  | [optional] 
**RightCriteria** | [**Exceptioncriteria**](exceptioncriteria) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Exceptionaccesscriteria = Initialize-Exceptionaccesscriteria  -LeftCriteria null `
 -RightCriteria null
```

- Convert the resource to JSON
```powershell
$Exceptionaccesscriteria | ConvertTo-JSON
```


[[Back to top]](#) 

