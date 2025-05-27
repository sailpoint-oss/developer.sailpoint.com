---
id: v2024-object-mapping-bulk-patch-response
title: ObjectMappingBulkPatchResponse
pagination_label: ObjectMappingBulkPatchResponse
sidebar_label: ObjectMappingBulkPatchResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ObjectMappingBulkPatchResponse', 'V2024ObjectMappingBulkPatchResponse'] 
slug: /tools/sdk/powershell/v2024/models/object-mapping-bulk-patch-response
tags: ['SDK', 'Software Development Kit', 'ObjectMappingBulkPatchResponse', 'V2024ObjectMappingBulkPatchResponse']
---


# ObjectMappingBulkPatchResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PatchedObjects** | [**[]ObjectMappingResponse**](object-mapping-response) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ObjectMappingBulkPatchResponse = Initialize-V2024ObjectMappingBulkPatchResponse  -PatchedObjects null
```

- Convert the resource to JSON
```powershell
$ObjectMappingBulkPatchResponse | ConvertTo-JSON
```


[[Back to top]](#) 

