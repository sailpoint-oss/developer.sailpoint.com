---
id: lower
title: Lower
pagination_label: Lower
sidebar_label: Lower
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'Lower'] 
slug: /tools/sdk/powershell/v3/models/lower
tags: ['SDK', 'Software Development Kit', 'Lower']
---


# Lower

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequiresPeriodicRefresh** |  Pointer to **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]
**VarInput** |  Pointer to [**map[string]AnyType**](any-type) | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] 

## Examples

- Prepare the resource
```powershell
$Lower = Initialize-PSSailpointLower  -RequiresPeriodicRefresh false `
 -VarInput {type&#x3D;accountAttribute, attributes&#x3D;{attributeName&#x3D;first_name, sourceName&#x3D;Source}}
```

- Convert the resource to JSON
```powershell
$Lower | ConvertTo-JSON
```


[[Back to top]](#) 

