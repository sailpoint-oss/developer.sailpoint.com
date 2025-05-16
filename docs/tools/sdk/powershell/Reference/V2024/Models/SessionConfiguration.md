---
id: v2024-session-configuration
title: SessionConfiguration
pagination_label: SessionConfiguration
sidebar_label: SessionConfiguration
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SessionConfiguration', 'V2024SessionConfiguration'] 
slug: /tools/sdk/powershell/v2024/models/session-configuration
tags: ['SDK', 'Software Development Kit', 'SessionConfiguration', 'V2024SessionConfiguration']
---


# SessionConfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MaxIdleTime** | **Int32** | The maximum time in minutes a session can be idle. | [optional] 
**RememberMe** | **Boolean** | Denotes if 'remember me' is enabled. | [optional] [default to $false]
**MaxSessionTime** | **Int32** | The maximum allowable session time in minutes. | [optional] 

## Examples

- Prepare the resource
```powershell
$SessionConfiguration = Initialize-V2024SessionConfiguration  -MaxIdleTime 15 `
 -RememberMe true `
 -MaxSessionTime 45
```

- Convert the resource to JSON
```powershell
$SessionConfiguration | ConvertTo-JSON
```


[[Back to top]](#) 

