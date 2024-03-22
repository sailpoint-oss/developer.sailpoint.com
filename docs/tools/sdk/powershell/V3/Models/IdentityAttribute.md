---
id: identity-attribute
title: IdentityAttribute
pagination_label: IdentityAttribute
sidebar_label: IdentityAttribute
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentityAttribute'] 
slug: /tools/sdk/powershell/v3/models/identity-attribute
tags: ['SDK', 'Software Development Kit', 'IdentityAttribute']
---


# IdentityAttribute

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  **String** | The system (camel-cased) name of the identity attribute to bring in | 
**RequiresPeriodicRefresh** |  Pointer to **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]
**VarInput** |  Pointer to [**map[string]AnyType**](any-type) | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityAttribute = Initialize-PSSailpointIdentityAttribute  -Name email `
 -RequiresPeriodicRefresh false `
 -VarInput {type&#x3D;accountAttribute, attributes&#x3D;{attributeName&#x3D;first_name, sourceName&#x3D;Source}}
```

- Convert the resource to JSON
```powershell
$IdentityAttribute | ConvertTo-JSON
```


[[Back to top]](#) 

