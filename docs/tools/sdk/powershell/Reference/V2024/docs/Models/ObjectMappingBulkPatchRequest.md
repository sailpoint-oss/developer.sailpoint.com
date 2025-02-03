---
id: v2024-object-mapping-bulk-patch-request
title: ObjectMappingBulkPatchRequest
pagination_label: ObjectMappingBulkPatchRequest
sidebar_label: ObjectMappingBulkPatchRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ObjectMappingBulkPatchRequest', 'V2024ObjectMappingBulkPatchRequest'] 
slug: /tools/sdk/powershell/v2024/models/object-mapping-bulk-patch-request
tags: ['SDK', 'Software Development Kit', 'ObjectMappingBulkPatchRequest', 'V2024ObjectMappingBulkPatchRequest']
---


# ObjectMappingBulkPatchRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Patches** |  [**map[string]JsonPatchOperation[]**](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_arrays?view=powershell-7.4) | Map of id of the object mapping to a JsonPatchOperation describing what to patch on that object mapping. | [required]

## Examples

- Prepare the resource
```powershell
$ObjectMappingBulkPatchRequest = Initialize-PSSailpoint.V2024ObjectMappingBulkPatchRequest  -Patches {603b1a61-d03d-4ed1-864f-a508fbd1995d&#x3D;[{op&#x3D;replace, path&#x3D;/enabled, value&#x3D;true}], 00bece34-f50d-4227-8878-76f620b5a971&#x3D;[{op&#x3D;replace, path&#x3D;/targetValue, value&#x3D;New Target Value}]}
```

- Convert the resource to JSON
```powershell
$ObjectMappingBulkPatchRequest | ConvertTo-JSON
```


[[Back to top]](#) 

