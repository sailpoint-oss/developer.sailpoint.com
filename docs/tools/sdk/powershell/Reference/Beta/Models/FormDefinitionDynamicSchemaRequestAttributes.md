---
id: beta-form-definition-dynamic-schema-request-attributes
title: FormDefinitionDynamicSchemaRequestAttributes
pagination_label: FormDefinitionDynamicSchemaRequestAttributes
sidebar_label: FormDefinitionDynamicSchemaRequestAttributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FormDefinitionDynamicSchemaRequestAttributes', 'BetaFormDefinitionDynamicSchemaRequestAttributes'] 
slug: /tools/sdk/powershell/beta/models/form-definition-dynamic-schema-request-attributes
tags: ['SDK', 'Software Development Kit', 'FormDefinitionDynamicSchemaRequestAttributes', 'BetaFormDefinitionDynamicSchemaRequestAttributes']
---


# FormDefinitionDynamicSchemaRequestAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FormDefinitionId** | **String** | FormDefinitionID is a unique guid identifying this form definition | [optional] 

## Examples

- Prepare the resource
```powershell
$FormDefinitionDynamicSchemaRequestAttributes = Initialize-BetaFormDefinitionDynamicSchemaRequestAttributes  -FormDefinitionId 00000000-0000-0000-0000-000000000000
```

- Convert the resource to JSON
```powershell
$FormDefinitionDynamicSchemaRequestAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

