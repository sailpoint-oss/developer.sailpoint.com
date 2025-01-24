---
id: client-log-configuration
title: ClientLogConfiguration
pagination_label: ClientLogConfiguration
sidebar_label: ClientLogConfiguration
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ClientLogConfiguration'] 
slug: /tools/sdk/powershell/v2024/models/client-log-configuration
tags: ['SDK', 'Software Development Kit', 'ClientLogConfiguration']
---


# ClientLogConfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClientId** |  Pointer to **String** | Log configuration's client ID | [optional] 
**DurationMinutes** |  Pointer to **Int32** | Duration in minutes for log configuration to remain in effect before resetting to defaults. | [optional] [default to 240]
**Expiration** |  Pointer to **System.DateTime** | Expiration date-time of the log configuration request.  Can be no greater than 24 hours from current date-time. | [optional] 
**RootLevel** |  [**StandardLevel**](standard-level) |  | [required]
**LogLevels** |  Pointer to [**map[string]StandardLevel**](standard-level) | Mapping of identifiers to Standard Log Level values | [optional] 

## Examples

- Prepare the resource
```powershell
$ClientLogConfiguration = Initialize-PSSailpoint.V2024ClientLogConfiguration  -ClientId 3a38a51992e8445ab51a549c0a70ee66 `
 -DurationMinutes 120 `
 -Expiration 2024-11-06T01:31:08.013164Z `
 -RootLevel null `
 -LogLevels INFO
```

- Convert the resource to JSON
```powershell
$ClientLogConfiguration | ConvertTo-JSON
```


[[Back to top]](#) 

