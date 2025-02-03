---
id: v2024-bulk-remove-tagged-object
title: BulkRemoveTaggedObject
pagination_label: BulkRemoveTaggedObject
sidebar_label: BulkRemoveTaggedObject
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BulkRemoveTaggedObject', 'V2024BulkRemoveTaggedObject'] 
slug: /tools/sdk/powershell/v2024/models/bulk-remove-tagged-object
tags: ['SDK', 'Software Development Kit', 'BulkRemoveTaggedObject', 'V2024BulkRemoveTaggedObject']
---


# BulkRemoveTaggedObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ObjectRefs** | [**[]TaggedObjectDto**](tagged-object-dto) |  | [optional] 
**Tags** | **[]String** | Label to be applied to an Object | [optional] 

## Examples

- Prepare the resource
```powershell
$BulkRemoveTaggedObject = Initialize-PSSailpoint.V2024BulkRemoveTaggedObject  -ObjectRefs null `
 -Tags [BU_FINANCE, PCI]
```

- Convert the resource to JSON
```powershell
$BulkRemoveTaggedObject | ConvertTo-JSON
```


[[Back to top]](#) 

