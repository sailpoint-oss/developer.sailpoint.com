---
id: attributemappings-all-of-transform-definition-attributes-input
title: AttributemappingsAllOfTransformDefinitionAttributesInput
pagination_label: AttributemappingsAllOfTransformDefinitionAttributesInput
sidebar_label: AttributemappingsAllOfTransformDefinitionAttributesInput
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AttributemappingsAllOfTransformDefinitionAttributesInput', 'AttributemappingsAllOfTransformDefinitionAttributesInput'] 
slug: /tools/sdk/powershell/machineaccountmappings/models/attributemappings-all-of-transform-definition-attributes-input
tags: ['SDK', 'Software Development Kit', 'AttributemappingsAllOfTransformDefinitionAttributesInput', 'AttributemappingsAllOfTransformDefinitionAttributesInput']
---


# AttributemappingsAllOfTransformDefinitionAttributesInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | The Type of Attribute | [optional] 
**Attributes** | [**AttributemappingsAllOfTransformDefinitionAttributesInputAttributes**](attributemappings-all-of-transform-definition-attributes-input-attributes) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AttributemappingsAllOfTransformDefinitionAttributesInput = Initialize-AttributemappingsAllOfTransformDefinitionAttributesInput  -Type accountAttribute `
 -Attributes null
```

- Convert the resource to JSON
```powershell
$AttributemappingsAllOfTransformDefinitionAttributesInput | ConvertTo-JSON
```


[[Back to top]](#) 

