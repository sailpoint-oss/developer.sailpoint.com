---
id: attributemappings-all-of-transform-definition-attributes-input-attributes
title: AttributemappingsAllOfTransformDefinitionAttributesInputAttributes
pagination_label: AttributemappingsAllOfTransformDefinitionAttributesInputAttributes
sidebar_label: AttributemappingsAllOfTransformDefinitionAttributesInputAttributes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AttributemappingsAllOfTransformDefinitionAttributesInputAttributes', 'AttributemappingsAllOfTransformDefinitionAttributesInputAttributes'] 
slug: /tools/sdk/powershell/machineaccountmappings/models/attributemappings-all-of-transform-definition-attributes-input-attributes
tags: ['SDK', 'Software Development Kit', 'AttributemappingsAllOfTransformDefinitionAttributesInputAttributes', 'AttributemappingsAllOfTransformDefinitionAttributesInputAttributes']
---


# AttributemappingsAllOfTransformDefinitionAttributesInputAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeName** | **String** | The name of attribute | [optional] 
**SourceName** | **String** | Name of the Source | [optional] 
**Name** | **String** | ID of the Source | [optional] 

## Examples

- Prepare the resource
```powershell
$AttributemappingsAllOfTransformDefinitionAttributesInputAttributes = Initialize-AttributemappingsAllOfTransformDefinitionAttributesInputAttributes  -AttributeName givenName `
 -SourceName delimited-src `
 -Name 8d3e0094e99445de98eef6c75e25jc04
```

- Convert the resource to JSON
```powershell
$AttributemappingsAllOfTransformDefinitionAttributesInputAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

