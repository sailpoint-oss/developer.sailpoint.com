---
id: object-mapping-bulk-create-request
title: ObjectMappingBulkCreateRequest
pagination_label: ObjectMappingBulkCreateRequest
sidebar_label: ObjectMappingBulkCreateRequest
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ObjectMappingBulkCreateRequest'] 
slug: /tools/sdk/powershell/v3/models/object-mapping-bulk-create-request
tags: ['SDK', 'Software Development Kit', 'ObjectMappingBulkCreateRequest']
---


# ObjectMappingBulkCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NewObjectMappings** |  [**[]ObjectMappingRequest**](object-mapping-request) |  | 

## Examples

- Prepare the resource
```powershell
$ObjectMappingBulkCreateRequest = Initialize-ObjectMappingBulkCreateRequest  -NewObjectMappings null
```

- Convert the resource to JSON
```powershell
$ObjectMappingBulkCreateRequest | ConvertTo-JSON
```


[[Back to top]](#) 

