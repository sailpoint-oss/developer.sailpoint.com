---
id: roleinsightsidentities
title: Roleinsightsidentities
pagination_label: Roleinsightsidentities
sidebar_label: Roleinsightsidentities
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Roleinsightsidentities', 'Roleinsightsidentities'] 
slug: /tools/sdk/powershell/roleinsights/models/roleinsightsidentities
tags: ['SDK', 'Software Development Kit', 'Roleinsightsidentities', 'Roleinsightsidentities']
---


# Roleinsightsidentities

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Id for identity | [optional] 
**Name** | **String** | Name for identity | [optional] 
**Attributes** | **map[string]String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Roleinsightsidentities = Initialize-Roleinsightsidentities  -Id null `
 -Name null `
 -Attributes null
```

- Convert the resource to JSON
```powershell
$Roleinsightsidentities | ConvertTo-JSON
```


[[Back to top]](#) 

