---
id: form-definition-dynamic-schema-request
title: FormDefinitionDynamicSchemaRequest
pagination_label: FormDefinitionDynamicSchemaRequest
sidebar_label: FormDefinitionDynamicSchemaRequest
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'FormDefinitionDynamicSchemaRequest'] 
slug: /tools/sdk/powershell/beta/models/form-definition-dynamic-schema-request
tags: ['SDK', 'Software Development Kit', 'FormDefinitionDynamicSchemaRequest']
---


# FormDefinitionDynamicSchemaRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attributes** |  Pointer to [**FormDefinitionDynamicSchemaRequestAttributes**](form-definition-dynamic-schema-request-attributes) |  | [optional] 
**Description** |  Pointer to **String** | Description is the form definition dynamic schema description text | [optional] 
**Id** |  Pointer to **String** | ID is a unique identifier | [optional] 
**Type** |  Pointer to **String** | Type is the form definition dynamic schema type | [optional] 
**VersionNumber** |  Pointer to **Int64** | VersionNumber is the form definition dynamic schema version number | [optional] 

## Examples

- Prepare the resource
```powershell
$FormDefinitionDynamicSchemaRequest = Initialize-PSSailpointBetaFormDefinitionDynamicSchemaRequest  -Attributes null `
 -Description A description `
 -Id 00000000-0000-0000-0000-000000000000 `
 -Type action `
 -VersionNumber 1
```

- Convert the resource to JSON
```powershell
$FormDefinitionDynamicSchemaRequest | ConvertTo-JSON
```


[[Back to top]](#) 

