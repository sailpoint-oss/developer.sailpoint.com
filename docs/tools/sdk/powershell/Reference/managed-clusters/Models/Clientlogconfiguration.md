---
id: clientlogconfiguration
title: Clientlogconfiguration
pagination_label: Clientlogconfiguration
sidebar_label: Clientlogconfiguration
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Clientlogconfiguration', 'Clientlogconfiguration'] 
slug: /tools/sdk/powershell/managedclusters/models/clientlogconfiguration
tags: ['SDK', 'Software Development Kit', 'Clientlogconfiguration', 'Clientlogconfiguration']
---


# Clientlogconfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClientId** | **String** | Log configuration's client ID | [optional] 
**DurationMinutes** | **Int32** | Duration in minutes for log configuration to remain in effect before resetting to defaults. | [optional] [default to 240]
**Expiration** | **System.DateTime** | Expiration date-time of the log configuration request.  Can be no greater than 24 hours from current date-time. | [optional] 
**RootLevel** | [**Standardlevel**](standardlevel) |  | [required]
**LogLevels** | [**map[string]Standardlevel**](standardlevel) | Mapping of identifiers to Standard Log Level values | [optional] 

## Examples

- Prepare the resource
```powershell
$Clientlogconfiguration = Initialize-Clientlogconfiguration  -ClientId 3a38a51992e8445ab51a549c0a70ee66 `
 -DurationMinutes 120 `
 -Expiration 2024-11-06T01:31:08.013164Z `
 -RootLevel null `
 -LogLevels INFO
```

- Convert the resource to JSON
```powershell
$Clientlogconfiguration | ConvertTo-JSON
```


[[Back to top]](#) 

