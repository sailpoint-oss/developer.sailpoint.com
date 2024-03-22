---
id: reference
title: Reference
pagination_label: Reference
sidebar_label: Reference
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'Reference'] 
slug: /tools/sdk/powershell/v3/models/reference
tags: ['SDK', 'Software Development Kit', 'Reference']
---


# Reference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | This ID specifies the name of the pre-existing transform which you want to use within your current transform | 
**RequiresPeriodicRefresh** |  Pointer to **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]
**VarInput** |  Pointer to [**map[string]AnyType**](any-type) | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] 

## Examples

- Prepare the resource
```powershell
$Reference = Initialize-PSSailpointReference  -Id Existing Transform `
 -RequiresPeriodicRefresh false `
 -VarInput {type&#x3D;accountAttribute, attributes&#x3D;{attributeName&#x3D;first_name, sourceName&#x3D;Source}}
```

- Convert the resource to JSON
```powershell
$Reference | ConvertTo-JSON
```


[[Back to top]](#) 

