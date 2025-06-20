---
id: v2025-attribute-mappings
title: AttributeMappings
pagination_label: AttributeMappings
sidebar_label: AttributeMappings
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AttributeMappings', 'V2025AttributeMappings'] 
slug: /tools/sdk/powershell/v2025/models/attribute-mappings
tags: ['SDK', 'Software Development Kit', 'AttributeMappings', 'V2025AttributeMappings']
---


# AttributeMappings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Target** | [**AttributeMappingsAllOfTarget**](attribute-mappings-all-of-target) |  | [optional] 
**TransformDefinition** | [**AttributeMappingsAllOfTransformDefinition**](attribute-mappings-all-of-transform-definition) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AttributeMappings = Initialize-V2025AttributeMappings  -Target null `
 -TransformDefinition null
```

- Convert the resource to JSON
```powershell
$AttributeMappings | ConvertTo-JSON
```


[[Back to top]](#) 

