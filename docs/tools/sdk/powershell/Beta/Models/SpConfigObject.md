---
id: sp-config-object
title: SpConfigObject
pagination_label: SpConfigObject
sidebar_label: SpConfigObject
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'SpConfigObject'] 
slug: /tools/sdk/powershell/beta/models/sp-config-object
tags: ['SDK', 'Software Development Kit', 'SpConfigObject']
---


# SpConfigObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ObjectType** |  Pointer to **String** | The object type this configuration is for. | [optional] 
**ResolveByIdUrl** |  Pointer to [**SpConfigUrl**](sp-config-url) |  | [optional] 
**ResolveByNameUrl** |  Pointer to [**[]SpConfigUrl**](sp-config-url) | Url and query parameters to be used to resolve this type of object by name. | [optional] 
**ExportUrl** |  Pointer to [**SpConfigUrl**](sp-config-url) |  | [optional] 
**ExportRight** |  Pointer to **String** | Rights needed by the invoker of sp-config/export in order to export this type of object. | [optional] 
**ExportLimit** |  Pointer to **Int32** | Pagination limit imposed by the target service for this object type. | [optional] 
**ImportUrl** |  Pointer to [**SpConfigUrl**](sp-config-url) |  | [optional] 
**ImportRight** |  Pointer to **String** | Rights needed by the invoker of sp-config/import in order to import this type of object. | [optional] 
**ImportLimit** |  Pointer to **Int32** | Pagination limit imposed by the target service for this object type. | [optional] 
**ReferenceExtractors** |  Pointer to **[]String** | List of json paths within an exported object of this type that represent references that need to be resolved. | [optional] 
**SignatureRequired** |  Pointer to **Boolean** | If true, this type of object will be JWS signed and cannot be modified before import. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$SpConfigObject = Initialize-BetaSpConfigObject  -ObjectType TRIGGER_SUBSCRIPTION `
 -ResolveByIdUrl null `
 -ResolveByNameUrl null `
 -ExportUrl null `
 -ExportRight idn:trigger-service-subscriptions:read `
 -ExportLimit 10 `
 -ImportUrl null `
 -ImportRight idn:trigger-service-subscriptions:create `
 -ImportLimit 10 `
 -ReferenceExtractors [$.owner] `
 -SignatureRequired false
```

- Convert the resource to JSON
```powershell
$SpConfigObject | ConvertTo-JSON
```


[[Back to top]](#) 

