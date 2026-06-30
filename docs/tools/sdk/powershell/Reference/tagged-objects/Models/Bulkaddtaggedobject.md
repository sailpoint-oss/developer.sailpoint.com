---
id: bulkaddtaggedobject
title: Bulkaddtaggedobject
pagination_label: Bulkaddtaggedobject
sidebar_label: Bulkaddtaggedobject
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Bulkaddtaggedobject', 'Bulkaddtaggedobject'] 
slug: /tools/sdk/powershell/taggedobjects/models/bulkaddtaggedobject
tags: ['SDK', 'Software Development Kit', 'Bulkaddtaggedobject', 'Bulkaddtaggedobject']
---


# Bulkaddtaggedobject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ObjectRefs** | [**[]Taggedobjectdto**](taggedobjectdto) |  | [optional] 
**Tags** | **[]String** | Label to be applied to an Object | [optional] 
**Operation** |  **Enum** [  "APPEND",    "MERGE" ] | If APPEND, tags are appended to the list of tags for the object. A 400 error is returned if this would add duplicate tags to the object.  If MERGE, tags are merged with the existing tags. Duplicate tags are silently ignored. | [optional] [default to "APPEND"]

## Examples

- Prepare the resource
```powershell
$Bulkaddtaggedobject = Initialize-Bulkaddtaggedobject  -ObjectRefs null `
 -Tags ["BU_FINANCE","PCI"] `
 -Operation MERGE
```

- Convert the resource to JSON
```powershell
$Bulkaddtaggedobject | ConvertTo-JSON
```


[[Back to top]](#) 

