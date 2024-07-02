---
id: object-mapping-bulk-create-response
title: ObjectMappingBulkCreateResponse
pagination_label: ObjectMappingBulkCreateResponse
sidebar_label: ObjectMappingBulkCreateResponse
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ObjectMappingBulkCreateResponse'] 
slug: /tools/sdk/powershell/v3/models/object-mapping-bulk-create-response
tags: ['SDK', 'Software Development Kit', 'ObjectMappingBulkCreateResponse']
---


# ObjectMappingBulkCreateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AddedObjects** |  Pointer to [**[]ObjectMappingResponse**](object-mapping-response) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ObjectMappingBulkCreateResponse = Initialize-ObjectMappingBulkCreateResponse  -AddedObjects null
```

- Convert the resource to JSON
```powershell
$ObjectMappingBulkCreateResponse | ConvertTo-JSON
```


[[Back to top]](#) 

