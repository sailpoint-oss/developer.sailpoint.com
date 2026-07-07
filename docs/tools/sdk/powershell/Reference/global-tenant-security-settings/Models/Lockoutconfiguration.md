---
id: lockoutconfiguration
title: Lockoutconfiguration
pagination_label: Lockoutconfiguration
sidebar_label: Lockoutconfiguration
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Lockoutconfiguration', 'Lockoutconfiguration'] 
slug: /tools/sdk/powershell/globaltenantsecuritysettings/models/lockoutconfiguration
tags: ['SDK', 'Software Development Kit', 'Lockoutconfiguration', 'Lockoutconfiguration']
---


# Lockoutconfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MaximumAttempts** | **Int32** | The maximum attempts allowed before lockout occurs. | [optional] 
**LockoutDuration** | **Int32** | The total time in minutes a user will be locked out. | [optional] 
**LockoutWindow** | **Int32** | A rolling window where authentication attempts in a series count towards the maximum before lockout occurs. | [optional] 

## Examples

- Prepare the resource
```powershell
$Lockoutconfiguration = Initialize-Lockoutconfiguration  -MaximumAttempts 5 `
 -LockoutDuration 15 `
 -LockoutWindow 5
```

- Convert the resource to JSON
```powershell
$Lockoutconfiguration | ConvertTo-JSON
```


[[Back to top]](#) 

