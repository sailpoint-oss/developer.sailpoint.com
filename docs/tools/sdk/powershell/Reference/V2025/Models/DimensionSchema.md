---
id: v2025-dimension-schema
title: DimensionSchema
pagination_label: DimensionSchema
sidebar_label: DimensionSchema
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DimensionSchema', 'V2025DimensionSchema'] 
slug: /tools/sdk/powershell/v2025/models/dimension-schema
tags: ['SDK', 'Software Development Kit', 'DimensionSchema', 'V2025DimensionSchema']
---


# DimensionSchema

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DimensionAttributes** | [**[]DimensionAttribute**](dimension-attribute) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$DimensionSchema = Initialize-V2025DimensionSchema  -DimensionAttributes null
```

- Convert the resource to JSON
```powershell
$DimensionSchema | ConvertTo-JSON
```


[[Back to top]](#) 

