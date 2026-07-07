---
id: clientlogconfigurationexpiration
title: Clientlogconfigurationexpiration
pagination_label: Clientlogconfigurationexpiration
sidebar_label: Clientlogconfigurationexpiration
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Clientlogconfigurationexpiration', 'Clientlogconfigurationexpiration'] 
slug: /tools/sdk/powershell/managedclusters/models/clientlogconfigurationexpiration
tags: ['SDK', 'Software Development Kit', 'Clientlogconfigurationexpiration', 'Clientlogconfigurationexpiration']
---


# Clientlogconfigurationexpiration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClientId** | **String** | Log configuration's client ID | [optional] 
**Expiration** | **System.DateTime** | Expiration date-time of the log configuration request.  Can be no greater than 24 hours from current date-time. | [optional] 
**RootLevel** | [**Standardlevel**](standardlevel) |  | [required]
**LogLevels** | [**map[string]Standardlevel**](standardlevel) | Mapping of identifiers to Standard Log Level values | [optional] 

## Examples

- Prepare the resource
```powershell
$Clientlogconfigurationexpiration = Initialize-Clientlogconfigurationexpiration  -ClientId 3a38a51992e8445ab51a549c0a70ee66 `
 -Expiration 2024-11-06T01:31:08.013164Z `
 -RootLevel null `
 -LogLevels INFO
```

- Convert the resource to JSON
```powershell
$Clientlogconfigurationexpiration | ConvertTo-JSON
```


[[Back to top]](#) 

