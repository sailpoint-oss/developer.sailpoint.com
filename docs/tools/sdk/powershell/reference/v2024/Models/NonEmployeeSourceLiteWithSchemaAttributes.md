---
id: v2024-non-employee-source-lite-with-schema-attributes
title: NonEmployeeSourceLiteWithSchemaAttributes
pagination_label: NonEmployeeSourceLiteWithSchemaAttributes
sidebar_label: NonEmployeeSourceLiteWithSchemaAttributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NonEmployeeSourceLiteWithSchemaAttributes'] 
slug: /tools/sdk/powershell/v2024/models/non-employee-source-lite-with-schema-attributes
tags: ['SDK', 'Software Development Kit', 'NonEmployeeSourceLiteWithSchemaAttributes']
---


# NonEmployeeSourceLiteWithSchemaAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Non-Employee source id. | [optional] 
**SourceId** |  Pointer to **String** | Source Id associated with this non-employee source. | [optional] 
**Name** |  Pointer to **String** | Source name associated with this non-employee source. | [optional] 
**Description** |  Pointer to **String** | Source description associated with this non-employee source. | [optional] 
**SchemaAttributes** |  Pointer to [**[]NonEmployeeSchemaAttribute**](non-employee-schema-attribute) | List of schema attributes associated with this non-employee source. | [optional] 

## Examples

- Prepare the resource
```powershell
$NonEmployeeSourceLiteWithSchemaAttributes = Initialize-PSSailpoint.V2024NonEmployeeSourceLiteWithSchemaAttributes  -Id a0303682-5e4a-44f7-bdc2-6ce6112549c1 `
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

