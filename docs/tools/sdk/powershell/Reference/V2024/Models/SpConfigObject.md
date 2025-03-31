---
id: v2024-sp-config-object
title: SpConfigObject
pagination_label: SpConfigObject
sidebar_label: SpConfigObject
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SpConfigObject', 'V2024SpConfigObject'] 
slug: /tools/sdk/powershell/v2024/models/sp-config-object
tags: ['SDK', 'Software Development Kit', 'SpConfigObject', 'V2024SpConfigObject']
---


# SpConfigObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ObjectType** | **String** | Object type the configuration is for. | [optional] 
**ReferenceExtractors** | **[]String** | List of JSON paths within an exported object of this type, representing references that must be resolved. | [optional] 
**SignatureRequired** | **Boolean** | Indicates whether this type of object will be JWS signed and cannot be modified before import. | [optional] [default to $false]
**AlwaysResolveById** | **Boolean** | Indicates whether this object type must be always be resolved by ID. | [optional] [default to $false]
**LegacyObject** | **Boolean** | Indicates whether this is a legacy object. | [optional] [default to $false]
**OnePerTenant** | **Boolean** | Indicates whether there is only one object of this type. | [optional] [default to $false]
**Exportable** | **Boolean** | Indicates whether the object can be exported or is just a reference object. | [optional] [default to $false]
**Rules** | [**SpConfigRules**](sp-config-rules) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SpConfigObject = Initialize-PSSailpoint.V2024SpConfigObject  -ObjectType TRIGGER_SUBSCRIPTION `
 -ReferenceExtractors [$.owner] `
 -SignatureRequired false `
 -AlwaysResolveById true `
 -LegacyObject false `
 -OnePerTenant false `
 -Exportable true `
 -Rules null
```

- Convert the resource to JSON
```powershell
$SpConfigObject | ConvertTo-JSON
```


[[Back to top]](#) 

