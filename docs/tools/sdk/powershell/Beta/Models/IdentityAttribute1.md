---
id: identity-attribute1
title: IdentityAttribute1
pagination_label: IdentityAttribute1
sidebar_label: IdentityAttribute1
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentityAttribute1'] 
slug: /tools/sdk/powershell/beta/models/identity-attribute1
tags: ['SDK', 'Software Development Kit', 'IdentityAttribute1']
---


# IdentityAttribute1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  **String** | The system (camel-cased) name of the identity attribute to bring in | 
**RequiresPeriodicRefresh** |  Pointer to **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]
**VarInput** |  Pointer to [map[string] **Any**] | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityAttribute1 = Initialize-PSSailpointBetaIdentityAttribute1  -Name email `
 -RequiresPeriodicRefresh false `
 -VarInput {type&#x3D;accountAttribute, attributes&#x3D;{attributeName&#x3D;first_name, sourceName&#x3D;Source}}
```

- Convert the resource to JSON
```powershell
$IdentityAttribute1 | ConvertTo-JSON
```


[[Back to top]](#) 

