---
id: attributemappings-all-of-transform-definition
title: AttributemappingsAllOfTransformDefinition
pagination_label: AttributemappingsAllOfTransformDefinition
sidebar_label: AttributemappingsAllOfTransformDefinition
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AttributemappingsAllOfTransformDefinition', 'AttributemappingsAllOfTransformDefinition'] 
slug: /tools/sdk/powershell/machineaccountmappings/models/attributemappings-all-of-transform-definition
tags: ['SDK', 'Software Development Kit', 'AttributemappingsAllOfTransformDefinition', 'AttributemappingsAllOfTransformDefinition']
---


# AttributemappingsAllOfTransformDefinition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | The type of transform | [optional] 
**Attributes** | [**AttributemappingsAllOfTransformDefinitionAttributes**](attributemappings-all-of-transform-definition-attributes) |  | [optional] 
**Id** | **String** | Transform Operation | [optional] 

## Examples

- Prepare the resource
```powershell
$AttributemappingsAllOfTransformDefinition = Initialize-AttributemappingsAllOfTransformDefinition  -Type reference `
 -Attributes null `
 -Id ToUpper
```

- Convert the resource to JSON
```powershell
$AttributemappingsAllOfTransformDefinition | ConvertTo-JSON
```


[[Back to top]](#) 

