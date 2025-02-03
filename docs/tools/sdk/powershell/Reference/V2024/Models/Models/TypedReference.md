---
id: v2024-typed-reference
title: TypedReference
pagination_label: TypedReference
sidebar_label: TypedReference
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TypedReference', 'V2024TypedReference'] 
slug: /tools/sdk/powershell/v2024/models/typed-reference
tags: ['SDK', 'Software Development Kit', 'TypedReference', 'V2024TypedReference']
---


# TypedReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  [**DtoType**](dto-type) |  | [required]
**Id** |  **String** | The id of the object.  | [required]

## Examples

- Prepare the resource
```powershell
$TypedReference = Initialize-PSSailpoint.V2024TypedReference  -Type null `
 -Id 2c91808568c529c60168cca6f90c1313
```

- Convert the resource to JSON
```powershell
$TypedReference | ConvertTo-JSON
```


[[Back to top]](#) 

