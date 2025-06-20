---
id: v2025-attribute-mappings-all-of-transform-definition
title: AttributeMappingsAllOfTransformDefinition
pagination_label: AttributeMappingsAllOfTransformDefinition
sidebar_label: AttributeMappingsAllOfTransformDefinition
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AttributeMappingsAllOfTransformDefinition', 'V2025AttributeMappingsAllOfTransformDefinition'] 
slug: /tools/sdk/powershell/v2025/models/attribute-mappings-all-of-transform-definition
tags: ['SDK', 'Software Development Kit', 'AttributeMappingsAllOfTransformDefinition', 'V2025AttributeMappingsAllOfTransformDefinition']
---


# AttributeMappingsAllOfTransformDefinition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | The type of transform | [optional] 
**Attributes** | [**AttributeMappingsAllOfTransformDefinitionAttributes**](attribute-mappings-all-of-transform-definition-attributes) |  | [optional] 
**Id** | **String** | Transform Operation | [optional] 

## Examples

- Prepare the resource
```powershell
$AttributeMappingsAllOfTransformDefinition = Initialize-V2025AttributeMappingsAllOfTransformDefinition  -Type reference `
 -Attributes null `
 -Id ToUpper
```

- Convert the resource to JSON
```powershell
$AttributeMappingsAllOfTransformDefinition | ConvertTo-JSON
```


[[Back to top]](#) 

