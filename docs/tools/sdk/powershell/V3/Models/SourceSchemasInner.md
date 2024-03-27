---
id: source-schemas-inner
title: SourceSchemasInner
pagination_label: SourceSchemasInner
sidebar_label: SourceSchemasInner
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'SourceSchemasInner'] 
slug: /tools/sdk/powershell/v3/models/source-schemas-inner
tags: ['SDK', 'Software Development Kit', 'SourceSchemasInner']
---


# SourceSchemasInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "CONNECTOR_SCHEMA" ] | The type of object being referenced | [optional] 
**Id** |  Pointer to **String** | ID of the schema | [optional] 
**Name** |  Pointer to **String** | Human-readable display name of the schema | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceSchemasInner = Initialize-PSSailpointSourceSchemasInner  -Type CONNECTOR_SCHEMA `
 -Id 2c91808568c529c60168cca6f90c1777 `
 -Name MySchema
```

- Convert the resource to JSON
```powershell
$SourceSchemasInner | ConvertTo-JSON
```


[[Back to top]](#) 

