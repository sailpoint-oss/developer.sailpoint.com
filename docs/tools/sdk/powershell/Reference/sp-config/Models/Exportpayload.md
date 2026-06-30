---
id: exportpayload
title: Exportpayload
pagination_label: Exportpayload
sidebar_label: Exportpayload
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Exportpayload', 'Exportpayload'] 
slug: /tools/sdk/powershell/spconfig/models/exportpayload
tags: ['SDK', 'Software Development Kit', 'Exportpayload', 'Exportpayload']
---


# Exportpayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | **String** | Optional user defined description/name for export job. | [optional] 
**ExcludeTypes** | **[]String** | Object type names to be excluded from an sp-config export command. | [optional] 
**IncludeTypes** | **[]String** | Object type names to be included in an sp-config export command. IncludeTypes takes precedence over excludeTypes. | [optional] 
**ObjectOptions** | [**map[string]Objectexportimportoptions**](objectexportimportoptions) | Additional options targeting specific objects related to each item in the includeTypes field | [optional] 

## Examples

- Prepare the resource
```powershell
$Exportpayload = Initialize-Exportpayload  -Description Export Job 1 Test `
 -ExcludeTypes null `
 -IncludeTypes null `
 -ObjectOptions {TRIGGER_SUBSCRIPTION={includedIds=[be9e116d-08e1-49fc-ab7f-fa585e96c9e4], includedNames=[Test 2]}}
```

- Convert the resource to JSON
```powershell
$Exportpayload | ConvertTo-JSON
```


[[Back to top]](#) 

