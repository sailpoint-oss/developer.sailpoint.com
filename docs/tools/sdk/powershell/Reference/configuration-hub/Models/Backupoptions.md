---
id: backupoptions
title: Backupoptions
pagination_label: Backupoptions
sidebar_label: Backupoptions
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Backupoptions', 'Backupoptions'] 
slug: /tools/sdk/powershell/configurationhub/models/backupoptions
tags: ['SDK', 'Software Development Kit', 'Backupoptions', 'Backupoptions']
---


# Backupoptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IncludeTypes** | **[]String** | Object type names to be included in a Configuration Hub backup command. | [optional] 
**ObjectOptions** | [**map[string]Objectexportimportnames**](objectexportimportnames) | Additional options targeting specific objects related to each item in the includeTypes field. | [optional] 

## Examples

- Prepare the resource
```powershell
$Backupoptions = Initialize-Backupoptions  -IncludeTypes null `
 -ObjectOptions {"TRIGGER_SUBSCRIPTION":{"includedNames":["Trigger Subscription name"]}}
```

- Convert the resource to JSON
```powershell
$Backupoptions | ConvertTo-JSON
```


[[Back to top]](#) 

