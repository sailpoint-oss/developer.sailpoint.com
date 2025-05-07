---
id: object-mapping-bulk-create-request
title: ObjectMappingBulkCreateRequest
pagination_label: ObjectMappingBulkCreateRequest
sidebar_label: ObjectMappingBulkCreateRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ObjectMappingBulkCreateRequest', 'ObjectMappingBulkCreateRequest'] 
slug: /tools/sdk/powershell/v3/models/object-mapping-bulk-create-request
tags: ['SDK', 'Software Development Kit', 'ObjectMappingBulkCreateRequest', 'ObjectMappingBulkCreateRequest']
---


# ObjectMappingBulkCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NewObjectsMappings** | [**[]ObjectMappingRequest**](object-mapping-request) |  | [required]

## Examples

- Prepare the resource
```powershell
$ObjectMappingBulkCreateRequest = Initialize-ObjectMappingBulkCreateRequest  -NewObjectsMappings null
```

- Convert the resource to JSON
```powershell
$ObjectMappingBulkCreateRequest | ConvertTo-JSON
```


[[Back to top]](#) 

