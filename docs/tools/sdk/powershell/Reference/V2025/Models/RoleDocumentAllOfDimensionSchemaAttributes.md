---
id: v2025-role-document-all-of-dimension-schema-attributes
title: RoleDocumentAllOfDimensionSchemaAttributes
pagination_label: RoleDocumentAllOfDimensionSchemaAttributes
sidebar_label: RoleDocumentAllOfDimensionSchemaAttributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleDocumentAllOfDimensionSchemaAttributes', 'V2025RoleDocumentAllOfDimensionSchemaAttributes'] 
slug: /tools/sdk/powershell/v2025/models/role-document-all-of-dimension-schema-attributes
tags: ['SDK', 'Software Development Kit', 'RoleDocumentAllOfDimensionSchemaAttributes', 'V2025RoleDocumentAllOfDimensionSchemaAttributes']
---


# RoleDocumentAllOfDimensionSchemaAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Derived** | **Boolean** |  | [optional] [default to $true]
**DisplayName** | **String** | Displayname of the dimension attribute. | [optional] 
**Name** | **String** | Name of the dimension attribute. | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleDocumentAllOfDimensionSchemaAttributes = Initialize-PSSailpoint.V2025RoleDocumentAllOfDimensionSchemaAttributes  -Derived true `
 -DisplayName Department `
 -Name department
```

- Convert the resource to JSON
```powershell
$RoleDocumentAllOfDimensionSchemaAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

