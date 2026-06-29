---
id: documentfields
title: Documentfields
pagination_label: Documentfields
sidebar_label: Documentfields
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Documentfields', 'Documentfields'] 
slug: /tools/sdk/powershell/search/models/documentfields
tags: ['SDK', 'Software Development Kit', 'Documentfields', 'Documentfields']
---


# Documentfields

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pod** | **String** | Name of the pod. | [optional] 
**Org** | **String** | Name of the tenant. | [optional] 
**Type** | [**Documenttype**](documenttype) |  | [optional] 
**Type** | [**Documenttype**](documenttype) |  | [optional] 
**Version** | **String** | Version number. | [optional] 

## Examples

- Prepare the resource
```powershell
$Documentfields = Initialize-Documentfields  -Pod pod01-useast1 `
 -Org org-name `
 -Type null `
 -Type null `
 -Version v2
```

- Convert the resource to JSON
```powershell
$Documentfields | ConvertTo-JSON
```


[[Back to top]](#) 

