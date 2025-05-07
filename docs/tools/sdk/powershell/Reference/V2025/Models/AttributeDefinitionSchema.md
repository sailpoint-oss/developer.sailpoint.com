---
id: v2025-attribute-definition-schema
title: AttributeDefinitionSchema
pagination_label: AttributeDefinitionSchema
sidebar_label: AttributeDefinitionSchema
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AttributeDefinitionSchema', 'V2025AttributeDefinitionSchema'] 
slug: /tools/sdk/powershell/v2025/models/attribute-definition-schema
tags: ['SDK', 'Software Development Kit', 'AttributeDefinitionSchema', 'V2025AttributeDefinitionSchema']
---


# AttributeDefinitionSchema

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "CONNECTOR_SCHEMA" ] | The type of object being referenced | [optional] 
**Id** | **String** | The object ID this reference applies to. | [optional] 
**Name** | **String** | The human-readable display name of the object. | [optional] 

## Examples

- Prepare the resource
```powershell
$AttributeDefinitionSchema = Initialize-V2025AttributeDefinitionSchema  -Type CONNECTOR_SCHEMA `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name group
```

- Convert the resource to JSON
```powershell
$AttributeDefinitionSchema | ConvertTo-JSON
```


[[Back to top]](#) 

