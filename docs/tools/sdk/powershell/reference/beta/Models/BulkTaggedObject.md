---
id: beta-bulk-tagged-object
title: BulkTaggedObject
pagination_label: BulkTaggedObject
sidebar_label: BulkTaggedObject
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BulkTaggedObject'] 
slug: /tools/sdk/powershell/beta/models/bulk-tagged-object
tags: ['SDK', 'Software Development Kit', 'BulkTaggedObject']
---


# BulkTaggedObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ObjectRefs** |  Pointer to [**[]TaggedObjectDto**](tagged-object-dto) |  | [optional] 
**Tags** |  Pointer to **[]String** | Label to be applied to object. | [optional] 
**Operation** |  Pointer to  **Enum** [  "APPEND",    "MERGE" ] | If APPEND, tags are appended to the list of tags for the object. A 400 error is returned if this would add duplicate tags to the object.  If MERGE, tags are merged with the existing tags. Duplicate tags are silently ignored. | [optional] [default to "APPEND"]

## Examples

- Prepare the resource
```powershell
$BulkTaggedObject = Initialize-PSSailpoint.BetaBulkTaggedObject  -ObjectRefs null `
 -Tags [BU_FINANCE, PCI] `
 -Operation MERGE
```

- Convert the resource to JSON
```powershell
$BulkTaggedObject | ConvertTo-JSON
```


[[Back to top]](#) 

