---
id: role-propagation-status-response-launched-by
title: RolePropagationStatusResponseLaunchedBy
pagination_label: RolePropagationStatusResponseLaunchedBy
sidebar_label: RolePropagationStatusResponseLaunchedBy
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RolePropagationStatusResponseLaunchedBy', 'RolePropagationStatusResponseLaunchedBy'] 
slug: /tools/sdk/powershell/rolepropagation/models/role-propagation-status-response-launched-by
tags: ['SDK', 'Software Development Kit', 'RolePropagationStatusResponseLaunchedBy', 'RolePropagationStatusResponseLaunchedBy']
---


# RolePropagationStatusResponseLaunchedBy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | DTO type of the identity who launched the Role Propagation process. | [optional] 
**Id** | **String** | ID of the identity who launched the Role Propagation process. | [optional] 
**Name** | **String** | Name of the identity who launched the Role Propagation process. | [optional] 

## Examples

- Prepare the resource
```powershell
$RolePropagationStatusResponseLaunchedBy = Initialize-RolePropagationStatusResponseLaunchedBy  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20648 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$RolePropagationStatusResponseLaunchedBy | ConvertTo-JSON
```


[[Back to top]](#) 

