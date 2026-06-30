---
id: exportoptions
title: Exportoptions
pagination_label: Exportoptions
sidebar_label: Exportoptions
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Exportoptions', 'Exportoptions'] 
slug: /tools/sdk/powershell/spconfig/models/exportoptions
tags: ['SDK', 'Software Development Kit', 'Exportoptions', 'Exportoptions']
---


# Exportoptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExcludeTypes** | **[]String** | Object type names to be excluded from an sp-config export command. | [optional] 
**IncludeTypes** | **[]String** | Object type names to be included in an sp-config export command. IncludeTypes takes precedence over excludeTypes. | [optional] 
**ObjectOptions** | [**map[string]Objectexportimportoptions**](objectexportimportoptions) | Additional options targeting specific objects related to each item in the includeTypes field | [optional] 

## Examples

- Prepare the resource
```powershell
$Exportoptions = Initialize-Exportoptions  -ExcludeTypes null `
 -IncludeTypes null `
 -ObjectOptions {"TRIGGER_SUBSCRIPTION":{"includedIds":["be9e116d-08e1-49fc-ab7f-fa585e96c9e4"],"includedNames":["Test 2"]}}
```

- Convert the resource to JSON
```powershell
$Exportoptions | ConvertTo-JSON
```


[[Back to top]](#) 

