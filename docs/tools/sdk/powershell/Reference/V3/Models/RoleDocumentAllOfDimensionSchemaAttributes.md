---
id: role-document-all-of-dimension-schema-attributes
title: RoleDocumentAllOfDimensionSchemaAttributes
pagination_label: RoleDocumentAllOfDimensionSchemaAttributes
sidebar_label: RoleDocumentAllOfDimensionSchemaAttributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleDocumentAllOfDimensionSchemaAttributes', 'RoleDocumentAllOfDimensionSchemaAttributes'] 
slug: /tools/sdk/powershell/v3/models/role-document-all-of-dimension-schema-attributes
tags: ['SDK', 'Software Development Kit', 'RoleDocumentAllOfDimensionSchemaAttributes', 'RoleDocumentAllOfDimensionSchemaAttributes']
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
$RoleDocumentAllOfDimensionSchemaAttributes = Initialize-PSSailpoint.V3RoleDocumentAllOfDimensionSchemaAttributes  -Derived true `
 -DisplayName Department `
 -Name department
```

- Convert the resource to JSON
```powershell
$RoleDocumentAllOfDimensionSchemaAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

