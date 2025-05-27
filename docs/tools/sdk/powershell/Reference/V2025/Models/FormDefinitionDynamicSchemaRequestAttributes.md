---
id: v2025-form-definition-dynamic-schema-request-attributes
title: FormDefinitionDynamicSchemaRequestAttributes
pagination_label: FormDefinitionDynamicSchemaRequestAttributes
sidebar_label: FormDefinitionDynamicSchemaRequestAttributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FormDefinitionDynamicSchemaRequestAttributes', 'V2025FormDefinitionDynamicSchemaRequestAttributes'] 
slug: /tools/sdk/powershell/v2025/models/form-definition-dynamic-schema-request-attributes
tags: ['SDK', 'Software Development Kit', 'FormDefinitionDynamicSchemaRequestAttributes', 'V2025FormDefinitionDynamicSchemaRequestAttributes']
---


# FormDefinitionDynamicSchemaRequestAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FormDefinitionId** | **String** | FormDefinitionID is a unique guid identifying this form definition | [optional] 

## Examples

- Prepare the resource
```powershell
$FormDefinitionDynamicSchemaRequestAttributes = Initialize-V2025FormDefinitionDynamicSchemaRequestAttributes  -FormDefinitionId 00000000-0000-0000-0000-000000000000
```

- Convert the resource to JSON
```powershell
$FormDefinitionDynamicSchemaRequestAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

