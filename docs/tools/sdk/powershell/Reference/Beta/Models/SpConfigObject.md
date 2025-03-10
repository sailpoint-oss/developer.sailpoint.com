---
id: beta-sp-config-object
title: SpConfigObject
pagination_label: SpConfigObject
sidebar_label: SpConfigObject
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SpConfigObject', 'BetaSpConfigObject'] 
slug: /tools/sdk/powershell/beta/models/sp-config-object
tags: ['SDK', 'Software Development Kit', 'SpConfigObject', 'BetaSpConfigObject']
---


# SpConfigObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ObjectType** | **String** | The object type this configuration is for. | [optional] 
**ReferenceExtractors** | **[]String** | List of json paths within an exported object of this type that represent references that need to be resolved. | [optional] 
**SignatureRequired** | **Boolean** | If true, this type of object will be JWS signed and cannot be modified before import. | [optional] [default to $false]
**AlwaysResolveById** | **Boolean** | Whether this object type has to be resolved always by ID | [optional] [default to $false]
**LegacyObject** | **Boolean** | Whether this is a legacy object | [optional] [default to $false]
**OnePerTenant** | **Boolean** | Whether there is only one object of this type | [optional] [default to $false]
**Exportable** | **Boolean** | Whether this object can be exported or it is just a reference object | [optional] [default to $false]
**Rules** | [**SpConfigRules**](sp-config-rules) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SpConfigObject = Initialize-PSSailpoint.BetaSpConfigObject  -ObjectType TRIGGER_SUBSCRIPTION `
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

