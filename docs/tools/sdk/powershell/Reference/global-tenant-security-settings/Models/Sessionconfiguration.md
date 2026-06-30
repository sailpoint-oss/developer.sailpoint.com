---
id: sessionconfiguration
title: Sessionconfiguration
pagination_label: Sessionconfiguration
sidebar_label: Sessionconfiguration
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sessionconfiguration', 'Sessionconfiguration'] 
slug: /tools/sdk/powershell/globaltenantsecuritysettings/models/sessionconfiguration
tags: ['SDK', 'Software Development Kit', 'Sessionconfiguration', 'Sessionconfiguration']
---


# Sessionconfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MaxIdleTime** | **Int32** | The maximum time in minutes a session can be idle. | [optional] 
**RememberMe** | **Boolean** | Denotes if 'remember me' is enabled. | [optional] [default to $false]
**MaxSessionTime** | **Int32** | The maximum allowable session time in minutes. | [optional] 

## Examples

- Prepare the resource
```powershell
$Sessionconfiguration = Initialize-Sessionconfiguration  -MaxIdleTime 15 `
 -RememberMe true `
 -MaxSessionTime 45
```

- Convert the resource to JSON
```powershell
$Sessionconfiguration | ConvertTo-JSON
```


[[Back to top]](#) 

