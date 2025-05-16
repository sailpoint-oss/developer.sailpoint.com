---
id: v2024-attribute-mappings-all-of-transform-definition-attributes-input
title: AttributeMappingsAllOfTransformDefinitionAttributesInput
pagination_label: AttributeMappingsAllOfTransformDefinitionAttributesInput
sidebar_label: AttributeMappingsAllOfTransformDefinitionAttributesInput
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AttributeMappingsAllOfTransformDefinitionAttributesInput', 'V2024AttributeMappingsAllOfTransformDefinitionAttributesInput'] 
slug: /tools/sdk/powershell/v2024/models/attribute-mappings-all-of-transform-definition-attributes-input
tags: ['SDK', 'Software Development Kit', 'AttributeMappingsAllOfTransformDefinitionAttributesInput', 'V2024AttributeMappingsAllOfTransformDefinitionAttributesInput']
---


# AttributeMappingsAllOfTransformDefinitionAttributesInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | The Type of Attribute | [optional] 
**Attributes** | [**AttributeMappingsAllOfTransformDefinitionAttributesInputAttributes**](attribute-mappings-all-of-transform-definition-attributes-input-attributes) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AttributeMappingsAllOfTransformDefinitionAttributesInput = Initialize-V2024AttributeMappingsAllOfTransformDefinitionAttributesInput  -Type accountAttribute `
 -Attributes null
```

- Convert the resource to JSON
```powershell
$AttributeMappingsAllOfTransformDefinitionAttributesInput | ConvertTo-JSON
```


[[Back to top]](#) 

