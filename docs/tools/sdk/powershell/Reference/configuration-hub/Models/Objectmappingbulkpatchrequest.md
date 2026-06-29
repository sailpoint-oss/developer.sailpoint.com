---
id: objectmappingbulkpatchrequest
title: Objectmappingbulkpatchrequest
pagination_label: Objectmappingbulkpatchrequest
sidebar_label: Objectmappingbulkpatchrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Objectmappingbulkpatchrequest', 'Objectmappingbulkpatchrequest'] 
slug: /tools/sdk/powershell/configurationhub/models/objectmappingbulkpatchrequest
tags: ['SDK', 'Software Development Kit', 'Objectmappingbulkpatchrequest', 'Objectmappingbulkpatchrequest']
---


# Objectmappingbulkpatchrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Patches** | [**map[string]Jsonpatchoperation[]**](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_arrays?view=powershell-7.4) | Map of id of the object mapping to a JsonPatchOperation describing what to patch on that object mapping. | [required]

## Examples

- Prepare the resource
```powershell
$Objectmappingbulkpatchrequest = Initialize-Objectmappingbulkpatchrequest  -Patches {"603b1a61-d03d-4ed1-864f-a508fbd1995d":[{"op":"replace","path":"/enabled","value":true}],"00bece34-f50d-4227-8878-76f620b5a971":[{"op":"replace","path":"/targetValue","value":"New Target Value"}]}
```

- Convert the resource to JSON
```powershell
$Objectmappingbulkpatchrequest | ConvertTo-JSON
```


[[Back to top]](#) 

