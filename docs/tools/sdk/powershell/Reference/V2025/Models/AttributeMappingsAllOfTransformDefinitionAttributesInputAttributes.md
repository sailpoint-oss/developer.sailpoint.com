---
id: v2025-attribute-mappings-all-of-transform-definition-attributes-input-attributes
title: AttributeMappingsAllOfTransformDefinitionAttributesInputAttributes
pagination_label: AttributeMappingsAllOfTransformDefinitionAttributesInputAttributes
sidebar_label: AttributeMappingsAllOfTransformDefinitionAttributesInputAttributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AttributeMappingsAllOfTransformDefinitionAttributesInputAttributes', 'V2025AttributeMappingsAllOfTransformDefinitionAttributesInputAttributes'] 
slug: /tools/sdk/powershell/v2025/models/attribute-mappings-all-of-transform-definition-attributes-input-attributes
tags: ['SDK', 'Software Development Kit', 'AttributeMappingsAllOfTransformDefinitionAttributesInputAttributes', 'V2025AttributeMappingsAllOfTransformDefinitionAttributesInputAttributes']
---


# AttributeMappingsAllOfTransformDefinitionAttributesInputAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeName** | **String** | The name of attribute | [optional] 
**SourceName** | **String** | Name of the Source | [optional] 
**Name** | **String** | ID of the Source | [optional] 

## Examples

- Prepare the resource
```powershell
$AttributeMappingsAllOfTransformDefinitionAttributesInputAttributes = Initialize-V2025AttributeMappingsAllOfTransformDefinitionAttributesInputAttributes  -AttributeName givenName `
 -SourceName delimited-src `
 -Name 8d3e0094e99445de98eef6c75e25jc04
```

- Convert the resource to JSON
```powershell
$AttributeMappingsAllOfTransformDefinitionAttributesInputAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

