---
id: v2024-attribute-mappings-all-of-transform-definition
title: AttributeMappingsAllOfTransformDefinition
pagination_label: AttributeMappingsAllOfTransformDefinition
sidebar_label: AttributeMappingsAllOfTransformDefinition
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AttributeMappingsAllOfTransformDefinition', 'V2024AttributeMappingsAllOfTransformDefinition'] 
slug: /tools/sdk/powershell/v2024/models/attribute-mappings-all-of-transform-definition
tags: ['SDK', 'Software Development Kit', 'AttributeMappingsAllOfTransformDefinition', 'V2024AttributeMappingsAllOfTransformDefinition']
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
$AttributeMappingsAllOfTransformDefinition = Initialize-PSSailpoint.V2024AttributeMappingsAllOfTransformDefinition  -Type reference `
 -Attributes null `
 -Id ToUpper
```

- Convert the resource to JSON
```powershell
$AttributeMappingsAllOfTransformDefinition | ConvertTo-JSON
```


[[Back to top]](#) 

