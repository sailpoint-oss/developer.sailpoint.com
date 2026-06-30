---
id: put-client-log-configuration-v1-request
title: PutClientLogConfigurationV1Request
pagination_label: PutClientLogConfigurationV1Request
sidebar_label: PutClientLogConfigurationV1Request
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PutClientLogConfigurationV1Request', 'PutClientLogConfigurationV1Request'] 
slug: /tools/sdk/powershell/managedclusters/models/put-client-log-configuration-v1-request
tags: ['SDK', 'Software Development Kit', 'PutClientLogConfigurationV1Request', 'PutClientLogConfigurationV1Request']
---


# PutClientLogConfigurationV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClientId** | **String** | Log configuration's client ID | [optional] 
**DurationMinutes** | **Int32** | Duration in minutes for log configuration to remain in effect before resetting to defaults. | [optional] [default to 240]
**RootLevel** | [**Standardlevel**](standardlevel) |  | [required]
**LogLevels** | [**map[string]Standardlevel**](standardlevel) | Mapping of identifiers to Standard Log Level values | [optional] 
**Expiration** | **System.DateTime** | Expiration date-time of the log configuration request.  Can be no greater than 24 hours from current date-time. | [optional] 

## Examples

- Prepare the resource
```powershell
$PutClientLogConfigurationV1Request = Initialize-PutClientLogConfigurationV1Request  -ClientId 3a38a51992e8445ab51a549c0a70ee66 `
 -DurationMinutes 120 `
 -RootLevel null `
 -LogLevels INFO `
 -Expiration 2024-11-06T01:31:08.013164Z
```

- Convert the resource to JSON
```powershell
$PutClientLogConfigurationV1Request | ConvertTo-JSON
```


[[Back to top]](#) 

