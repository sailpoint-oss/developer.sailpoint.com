---
id: v2024-source-schemas-inner
title: SourceSchemasInner
pagination_label: SourceSchemasInner
sidebar_label: SourceSchemasInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceSchemasInner', 'V2024SourceSchemasInner'] 
slug: /tools/sdk/powershell/v2024/models/source-schemas-inner
tags: ['SDK', 'Software Development Kit', 'SourceSchemasInner', 'V2024SourceSchemasInner']
---


# SourceSchemasInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "CONNECTOR_SCHEMA" ] | Type of object being referenced. | [optional] 
**Id** | **String** | Schema ID. | [optional] 
**Name** | **String** | Schema's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceSchemasInner = Initialize-V2024SourceSchemasInner  -Type CONNECTOR_SCHEMA `
 -Id 2c91808568c529c60168cca6f90c1777 `
 -Name MySchema
```

- Convert the resource to JSON
```powershell
$SourceSchemasInner | ConvertTo-JSON
```


[[Back to top]](#) 

