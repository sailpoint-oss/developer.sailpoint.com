---
id: object-mapping-bulk-patch-response
title: ObjectMappingBulkPatchResponse
pagination_label: ObjectMappingBulkPatchResponse
sidebar_label: ObjectMappingBulkPatchResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ObjectMappingBulkPatchResponse', 'ObjectMappingBulkPatchResponse'] 
slug: /tools/sdk/powershell/v3/models/object-mapping-bulk-patch-response
tags: ['SDK', 'Software Development Kit', 'ObjectMappingBulkPatchResponse', 'ObjectMappingBulkPatchResponse']
---


# ObjectMappingBulkPatchResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PatchedObjects** | [**[]ObjectMappingResponse**](object-mapping-response) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ObjectMappingBulkPatchResponse = Initialize-ObjectMappingBulkPatchResponse  -PatchedObjects null
```

- Convert the resource to JSON
```powershell
$ObjectMappingBulkPatchResponse | ConvertTo-JSON
```


[[Back to top]](#) 

