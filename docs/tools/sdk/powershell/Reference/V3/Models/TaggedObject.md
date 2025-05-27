---
id: tagged-object
title: TaggedObject
pagination_label: TaggedObject
sidebar_label: TaggedObject
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TaggedObject', 'TaggedObject'] 
slug: /tools/sdk/powershell/v3/models/tagged-object
tags: ['SDK', 'Software Development Kit', 'TaggedObject', 'TaggedObject']
---


# TaggedObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ObjectRef** | [**TaggedObjectDto**](tagged-object-dto) |  | [optional] 
**Tags** | **[]String** | Labels to be applied to an Object | [optional] 

## Examples

- Prepare the resource
```powershell
$TaggedObject = Initialize-TaggedObject  -ObjectRef null `
 -Tags [BU_FINANCE, PCI]
```

- Convert the resource to JSON
```powershell
$TaggedObject | ConvertTo-JSON
```


[[Back to top]](#) 

