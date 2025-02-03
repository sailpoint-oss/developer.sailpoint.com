---
id: v2024-bulk-add-tagged-object
title: BulkAddTaggedObject
pagination_label: BulkAddTaggedObject
sidebar_label: BulkAddTaggedObject
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BulkAddTaggedObject', 'V2024BulkAddTaggedObject'] 
slug: /tools/sdk/powershell/v2024/models/bulk-add-tagged-object
tags: ['SDK', 'Software Development Kit', 'BulkAddTaggedObject', 'V2024BulkAddTaggedObject']
---


# BulkAddTaggedObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ObjectRefs** | [**[]TaggedObjectDto**](tagged-object-dto) |  | [optional] 
**Tags** | **[]String** | Label to be applied to an Object | [optional] 
**Operation** |  **Enum** [  "APPEND",    "MERGE" ] | If APPEND, tags are appended to the list of tags for the object. A 400 error is returned if this would add duplicate tags to the object.  If MERGE, tags are merged with the existing tags. Duplicate tags are silently ignored. | [optional] [default to "APPEND"]

## Examples

- Prepare the resource
```powershell
$BulkAddTaggedObject = Initialize-PSSailpoint.V2024BulkAddTaggedObject  -ObjectRefs null `
 -Tags [BU_FINANCE, PCI] `
 -Operation MERGE
```

- Convert the resource to JSON
```powershell
$BulkAddTaggedObject | ConvertTo-JSON
```


[[Back to top]](#) 

