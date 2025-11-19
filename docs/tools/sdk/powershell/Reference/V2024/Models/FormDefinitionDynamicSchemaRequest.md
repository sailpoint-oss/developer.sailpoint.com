---
id: v2024-form-definition-dynamic-schema-request
title: FormDefinitionDynamicSchemaRequest
pagination_label: FormDefinitionDynamicSchemaRequest
sidebar_label: FormDefinitionDynamicSchemaRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FormDefinitionDynamicSchemaRequest', 'V2024FormDefinitionDynamicSchemaRequest'] 
slug: /tools/sdk/powershell/v2024/models/form-definition-dynamic-schema-request
tags: ['SDK', 'Software Development Kit', 'FormDefinitionDynamicSchemaRequest', 'V2024FormDefinitionDynamicSchemaRequest']
---


# FormDefinitionDynamicSchemaRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attributes** | [**FormDefinitionDynamicSchemaRequestAttributes**](form-definition-dynamic-schema-request-attributes) |  | [optional] 
**Description** | **String** | Description is the form definition dynamic schema description text | [optional] 
**Id** | **String** | ID is a unique identifier | [optional] 
**Type** | **String** | Type is the form definition dynamic schema type | [optional] 
**VersionNumber** | **Int64** | VersionNumber is the form definition dynamic schema version number | [optional] 

## Examples

- Prepare the resource
```powershell
$FormDefinitionDynamicSchemaRequest = Initialize-V2024FormDefinitionDynamicSchemaRequest  -Attributes null `
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

