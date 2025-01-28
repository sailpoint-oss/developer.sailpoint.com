---
id: bulk-tagged-object-response
title: BulkTaggedObjectResponse
pagination_label: BulkTaggedObjectResponse
sidebar_label: BulkTaggedObjectResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BulkTaggedObjectResponse'] 
slug: /tools/sdk/powershell/v3/models/bulk-tagged-object-response
tags: ['SDK', 'Software Development Kit', 'BulkTaggedObjectResponse']
---


# BulkTaggedObjectResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ObjectRefs** |  Pointer to [**[]TaggedObjectDto**](tagged-object-dto) |  | [optional] 
**Tags** |  Pointer to **[]String** | Label to be applied to an Object | [optional] 

## Examples

- Prepare the resource
```powershell
$BulkTaggedObjectResponse = Initialize-PSSailpoint.V3BulkTaggedObjectResponse  -ObjectRefs null `
 -Tags [BU_FINANCE, PCI]
```

- Convert the resource to JSON
```powershell
$BulkTaggedObjectResponse | ConvertTo-JSON
```


[[Back to top]](#) 

