---
id: v2024-tagged-object
title: TaggedObject
pagination_label: TaggedObject
sidebar_label: TaggedObject
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TaggedObject', 'V2024TaggedObject'] 
slug: /tools/sdk/powershell/v2024/models/tagged-object
tags: ['SDK', 'Software Development Kit', 'TaggedObject', 'V2024TaggedObject']
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
$TaggedObject = Initialize-V2024TaggedObject  -ObjectRef null `
 -Tags [BU_FINANCE, PCI]
```

- Convert the resource to JSON
```powershell
$TaggedObject | ConvertTo-JSON
```


[[Back to top]](#) 

