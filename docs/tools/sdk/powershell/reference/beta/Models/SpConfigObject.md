---
id: sp-config-object
title: SpConfigObject
pagination_label: SpConfigObject
sidebar_label: SpConfigObject
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SpConfigObject'] 
slug: /tools/sdk/powershell/beta/models/sp-config-object
tags: ['SDK', 'Software Development Kit', 'SpConfigObject']
---


# SpConfigObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ObjectType** |  Pointer to **String** | The object type this configuration is for. | [optional] 
**ReferenceExtractors** |  Pointer to **[]String** | List of json paths within an exported object of this type that represent references that need to be resolved. | [optional] 
**SignatureRequired** |  Pointer to **Boolean** | If true, this type of object will be JWS signed and cannot be modified before import. | [optional] [default to $false]
**LegacyObject** |  Pointer to **Boolean** | Whether this is a legacy object | [optional] [default to $false]
**OnePerTenant** |  Pointer to **Boolean** | Whether there is only one object of this type | [optional] [default to $false]
**Exportable** |  Pointer to **Boolean** | Whether this object can be exported or it is just a reference object | [optional] [default to $false]
**Rules** |  Pointer to [**SpConfigRules**](sp-config-rules) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SpConfigObject = Initialize-PSSailpoint.BetaSpConfigObject  -ObjectType TRIGGER_SUBSCRIPTION `
 -ReferenceExtractors [$.owner] `
 -SignatureRequired false `
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

