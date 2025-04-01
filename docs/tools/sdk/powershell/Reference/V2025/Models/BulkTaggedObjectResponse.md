---
id: v2025-bulk-tagged-object-response
title: BulkTaggedObjectResponse
pagination_label: BulkTaggedObjectResponse
sidebar_label: BulkTaggedObjectResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BulkTaggedObjectResponse', 'V2025BulkTaggedObjectResponse'] 
slug: /tools/sdk/powershell/v2025/models/bulk-tagged-object-response
tags: ['SDK', 'Software Development Kit', 'BulkTaggedObjectResponse', 'V2025BulkTaggedObjectResponse']
---


# BulkTaggedObjectResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ObjectRefs** | [**[]TaggedObjectDto**](tagged-object-dto) |  | [optional] 
**Tags** | **[]String** | Label to be applied to an Object | [optional] 

## Examples

- Prepare the resource
```powershell
$BulkTaggedObjectResponse = Initialize-PSSailpoint.V2025BulkTaggedObjectResponse  -ObjectRefs null `
 -Tags [BU_FINANCE, PCI]
```

- Convert the resource to JSON
```powershell
$BulkTaggedObjectResponse | ConvertTo-JSON
```


[[Back to top]](#) 

