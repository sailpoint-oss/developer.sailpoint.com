---
id: attributedefinition-schema
title: AttributedefinitionSchema
pagination_label: AttributedefinitionSchema
sidebar_label: AttributedefinitionSchema
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AttributedefinitionSchema', 'AttributedefinitionSchema'] 
slug: /tools/sdk/powershell/sources/models/attributedefinition-schema
tags: ['SDK', 'Software Development Kit', 'AttributedefinitionSchema', 'AttributedefinitionSchema']
---


# AttributedefinitionSchema

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "CONNECTOR_SCHEMA" ] | The type of object being referenced | [optional] 
**Id** | **String** | The object ID this reference applies to. | [optional] 
**Name** | **String** | The human-readable display name of the object. | [optional] 

## Examples

- Prepare the resource
```powershell
$AttributedefinitionSchema = Initialize-AttributedefinitionSchema  -Type CONNECTOR_SCHEMA `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name group
```

- Convert the resource to JSON
```powershell
$AttributedefinitionSchema | ConvertTo-JSON
```


[[Back to top]](#) 

