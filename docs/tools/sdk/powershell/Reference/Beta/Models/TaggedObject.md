---
id: beta-tagged-object
title: TaggedObject
pagination_label: TaggedObject
sidebar_label: TaggedObject
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TaggedObject', 'BetaTaggedObject'] 
slug: /tools/sdk/powershell/beta/models/tagged-object
tags: ['SDK', 'Software Development Kit', 'TaggedObject', 'BetaTaggedObject']
---


# TaggedObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ObjectRef** | [**TaggedObjectObjectRef**](tagged-object-object-ref) |  | [optional] 
**Tags** | **[]String** | Labels to be applied to an Object | [optional] 

## Examples

- Prepare the resource
```powershell
$TaggedObject = Initialize-PSSailpoint.BetaTaggedObject  -ObjectRef null `
 -Tags [BU_FINANCE, PCI]
```

- Convert the resource to JSON
```powershell
$TaggedObject | ConvertTo-JSON
```


[[Back to top]](#) 

