---
id: session-configuration
title: SessionConfiguration
pagination_label: SessionConfiguration
sidebar_label: SessionConfiguration
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SessionConfiguration'] 
slug: /tools/sdk/powershell/v3/models/session-configuration
tags: ['SDK', 'Software Development Kit', 'SessionConfiguration']
---


# SessionConfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MaxIdleTime** |  Pointer to **Int32** | The maximum time in minutes a session can be idle. | [optional] 
**RememberMe** |  Pointer to **Boolean** | Denotes if 'remember me' is enabled. | [optional] [default to $false]
**MaxSessionTime** |  Pointer to **Int32** | The maximum allowable session time in minutes. | [optional] 

## Examples

- Prepare the resource
```powershell
$SessionConfiguration = Initialize-PSSailpoint.V3SessionConfiguration  -MaxIdleTime 15 `
 -RememberMe true `
 -MaxSessionTime 45
```

- Convert the resource to JSON
```powershell
$SessionConfiguration | ConvertTo-JSON
```


[[Back to top]](#) 

