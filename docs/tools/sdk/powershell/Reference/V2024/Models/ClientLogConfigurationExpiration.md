---
id: v2024-client-log-configuration-expiration
title: ClientLogConfigurationExpiration
pagination_label: ClientLogConfigurationExpiration
sidebar_label: ClientLogConfigurationExpiration
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ClientLogConfigurationExpiration', 'V2024ClientLogConfigurationExpiration'] 
slug: /tools/sdk/powershell/v2024/models/client-log-configuration-expiration
tags: ['SDK', 'Software Development Kit', 'ClientLogConfigurationExpiration', 'V2024ClientLogConfigurationExpiration']
---


# ClientLogConfigurationExpiration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClientId** | **String** | Log configuration's client ID | [optional] 
**Expiration** | **System.DateTime** | Expiration date-time of the log configuration request.  Can be no greater than 24 hours from current date-time. | [optional] 
**RootLevel** | [**StandardLevel**](standard-level) |  | [required]
**LogLevels** | [**map[string]StandardLevel**](standard-level) | Mapping of identifiers to Standard Log Level values | [optional] 

## Examples

- Prepare the resource
```powershell
$ClientLogConfigurationExpiration = Initialize-PSSailpoint.V2024ClientLogConfigurationExpiration  -ClientId 3a38a51992e8445ab51a549c0a70ee66 `
 -Expiration 2024-11-06T01:31:08.013164Z `
 -RootLevel null `
 -LogLevels INFO
```

- Convert the resource to JSON
```powershell
$ClientLogConfigurationExpiration | ConvertTo-JSON
```


[[Back to top]](#) 

