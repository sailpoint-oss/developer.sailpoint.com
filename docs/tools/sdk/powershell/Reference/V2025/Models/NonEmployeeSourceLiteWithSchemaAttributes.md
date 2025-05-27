---
id: v2025-non-employee-source-lite-with-schema-attributes
title: NonEmployeeSourceLiteWithSchemaAttributes
pagination_label: NonEmployeeSourceLiteWithSchemaAttributes
sidebar_label: NonEmployeeSourceLiteWithSchemaAttributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NonEmployeeSourceLiteWithSchemaAttributes', 'V2025NonEmployeeSourceLiteWithSchemaAttributes'] 
slug: /tools/sdk/powershell/v2025/models/non-employee-source-lite-with-schema-attributes
tags: ['SDK', 'Software Development Kit', 'NonEmployeeSourceLiteWithSchemaAttributes', 'V2025NonEmployeeSourceLiteWithSchemaAttributes']
---


# NonEmployeeSourceLiteWithSchemaAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Non-Employee source id. | [optional] 
**SourceId** | **String** | Source Id associated with this non-employee source. | [optional] 
**Name** | **String** | Source name associated with this non-employee source. | [optional] 
**Description** | **String** | Source description associated with this non-employee source. | [optional] 
**SchemaAttributes** | [**[]NonEmployeeSchemaAttribute**](non-employee-schema-attribute) | List of schema attributes associated with this non-employee source. | [optional] 

## Examples

- Prepare the resource
```powershell
$NonEmployeeSourceLiteWithSchemaAttributes = Initialize-V2025NonEmployeeSourceLiteWithSchemaAttributes  -Id a0303682-5e4a-44f7-bdc2-6ce6112549c1 `
 -SourceId 2c91808568c529c60168cca6f90c1313 `
 -Name Retail `
 -Description Source description `
 -SchemaAttributes null
```

- Convert the resource to JSON
```powershell
$NonEmployeeSourceLiteWithSchemaAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

