---
id: v2024-put-client-log-configuration-request
title: PutClientLogConfigurationRequest
pagination_label: PutClientLogConfigurationRequest
sidebar_label: PutClientLogConfigurationRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PutClientLogConfigurationRequest'] 
slug: /tools/sdk/powershell/v2024/models/put-client-log-configuration-request
tags: ['SDK', 'Software Development Kit', 'PutClientLogConfigurationRequest']
---


# PutClientLogConfigurationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClientId** |  Pointer to **String** | Log configuration's client ID | [optional] 
**DurationMinutes** |  Pointer to **Int32** | Duration in minutes for log configuration to remain in effect before resetting to defaults. | [optional] [default to 240]
**RootLevel** |  [**StandardLevel**](standard-level) |  | [required]
**LogLevels** |  Pointer to [**map[string]StandardLevel**](standard-level) | Mapping of identifiers to Standard Log Level values | [optional] 
**Expiration** |  Pointer to **System.DateTime** | Expiration date-time of the log configuration request.  Can be no greater than 24 hours from current date-time. | [optional] 

## Examples

- Prepare the resource
```powershell
$PutClientLogConfigurationRequest = Initialize-PSSailpoint.V2024PutClientLogConfigurationRequest  -ClientId 3a38a51992e8445ab51a549c0a70ee66 `
 -DurationMinutes 120 `
 -RootLevel null `
 -LogLevels INFO `
 -Expiration 2024-11-06T01:31:08.013164Z
```

- Convert the resource to JSON
```powershell
$PutClientLogConfigurationRequest | ConvertTo-JSON
```


[[Back to top]](#) 

