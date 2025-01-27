---
id: v2024-client-log-configuration-duration-minutes
title: ClientLogConfigurationDurationMinutes
pagination_label: ClientLogConfigurationDurationMinutes
sidebar_label: ClientLogConfigurationDurationMinutes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ClientLogConfigurationDurationMinutes'] 
slug: /tools/sdk/powershell/v2024/models/client-log-configuration-duration-minutes
tags: ['SDK', 'Software Development Kit', 'ClientLogConfigurationDurationMinutes']
---


# ClientLogConfigurationDurationMinutes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClientId** |  Pointer to **String** | Log configuration's client ID | [optional] 
**DurationMinutes** |  Pointer to **Int32** | Duration in minutes for log configuration to remain in effect before resetting to defaults. | [optional] [default to 240]
**RootLevel** |  [**StandardLevel**](standard-level) |  | [required]
**LogLevels** |  Pointer to [**map[string]StandardLevel**](standard-level) | Mapping of identifiers to Standard Log Level values | [optional] 

## Examples

- Prepare the resource
```powershell
$ClientLogConfigurationDurationMinutes = Initialize-PSSailpoint.V2024ClientLogConfigurationDurationMinutes  -ClientId 3a38a51992e8445ab51a549c0a70ee66 `
 -DurationMinutes 120 `
 -RootLevel null `
 -LogLevels INFO
```

- Convert the resource to JSON
```powershell
$ClientLogConfigurationDurationMinutes | ConvertTo-JSON
```


[[Back to top]](#) 

