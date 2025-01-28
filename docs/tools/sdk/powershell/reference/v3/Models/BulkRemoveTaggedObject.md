---
id: bulk-remove-tagged-object
title: BulkRemoveTaggedObject
pagination_label: BulkRemoveTaggedObject
sidebar_label: BulkRemoveTaggedObject
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BulkRemoveTaggedObject'] 
slug: /tools/sdk/powershell/v3/models/bulk-remove-tagged-object
tags: ['SDK', 'Software Development Kit', 'BulkRemoveTaggedObject']
---


# BulkRemoveTaggedObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ObjectRefs** |  Pointer to [**[]TaggedObjectDto**](tagged-object-dto) |  | [optional] 
**Tags** |  Pointer to **[]String** | Label to be applied to an Object | [optional] 

## Examples

- Prepare the resource
```powershell
$BulkRemoveTaggedObject = Initialize-PSSailpoint.V3BulkRemoveTaggedObject  -ObjectRefs null `
 -Tags [BU_FINANCE, PCI]
```

- Convert the resource to JSON
```powershell
$BulkRemoveTaggedObject | ConvertTo-JSON
```


[[Back to top]](#) 

