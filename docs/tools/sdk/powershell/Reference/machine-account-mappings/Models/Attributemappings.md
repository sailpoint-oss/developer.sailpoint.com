---
id: attributemappings
title: Attributemappings
pagination_label: Attributemappings
sidebar_label: Attributemappings
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Attributemappings', 'Attributemappings'] 
slug: /tools/sdk/powershell/machineaccountmappings/models/attributemappings
tags: ['SDK', 'Software Development Kit', 'Attributemappings', 'Attributemappings']
---


# Attributemappings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Target** | [**AttributemappingsAllOfTarget**](attributemappings-all-of-target) |  | [optional] 
**TransformDefinition** | [**AttributemappingsAllOfTransformDefinition**](attributemappings-all-of-transform-definition) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Attributemappings = Initialize-Attributemappings  -Target null `
 -TransformDefinition null
```

- Convert the resource to JSON
```powershell
$Attributemappings | ConvertTo-JSON
```


[[Back to top]](#) 

