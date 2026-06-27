---
id: clientlogconfigurationdurationminutes
title: Clientlogconfigurationdurationminutes
pagination_label: Clientlogconfigurationdurationminutes
sidebar_label: Clientlogconfigurationdurationminutes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Clientlogconfigurationdurationminutes', 'Clientlogconfigurationdurationminutes'] 
slug: /tools/sdk/powershell/managedclusters/models/clientlogconfigurationdurationminutes
tags: ['SDK', 'Software Development Kit', 'Clientlogconfigurationdurationminutes', 'Clientlogconfigurationdurationminutes']
---


# Clientlogconfigurationdurationminutes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClientId** | **String** | Log configuration's client ID | [optional] 
**DurationMinutes** | **Int32** | Duration in minutes for log configuration to remain in effect before resetting to defaults. | [optional] [default to 240]
**RootLevel** | [**Standardlevel**](standardlevel) |  | [required]
**LogLevels** | [**map[string]Standardlevel**](standardlevel) | Mapping of identifiers to Standard Log Level values | [optional] 

## Examples

- Prepare the resource
```powershell
$Clientlogconfigurationdurationminutes = Initialize-Clientlogconfigurationdurationminutes  -ClientId 3a38a51992e8445ab51a549c0a70ee66 `
 -DurationMinutes 120 `
 -RootLevel null `
 -LogLevels INFO
```

- Convert the resource to JSON
```powershell
$Clientlogconfigurationdurationminutes | ConvertTo-JSON
```


[[Back to top]](#) 

