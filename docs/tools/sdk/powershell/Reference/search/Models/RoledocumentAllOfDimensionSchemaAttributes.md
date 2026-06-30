---
id: roledocument-all-of-dimension-schema-attributes
title: RoledocumentAllOfDimensionSchemaAttributes
pagination_label: RoledocumentAllOfDimensionSchemaAttributes
sidebar_label: RoledocumentAllOfDimensionSchemaAttributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoledocumentAllOfDimensionSchemaAttributes', 'RoledocumentAllOfDimensionSchemaAttributes'] 
slug: /tools/sdk/powershell/search/models/roledocument-all-of-dimension-schema-attributes
tags: ['SDK', 'Software Development Kit', 'RoledocumentAllOfDimensionSchemaAttributes', 'RoledocumentAllOfDimensionSchemaAttributes']
---


# RoledocumentAllOfDimensionSchemaAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Derived** | **Boolean** |  | [optional] [default to $true]
**DisplayName** | **String** | Displayname of the dimension attribute. | [optional] 
**Name** | **String** | Name of the dimension attribute. | [optional] 

## Examples

- Prepare the resource
```powershell
$RoledocumentAllOfDimensionSchemaAttributes = Initialize-RoledocumentAllOfDimensionSchemaAttributes  -Derived true `
 -DisplayName Department `
 -Name department
```

- Convert the resource to JSON
```powershell
$RoledocumentAllOfDimensionSchemaAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

