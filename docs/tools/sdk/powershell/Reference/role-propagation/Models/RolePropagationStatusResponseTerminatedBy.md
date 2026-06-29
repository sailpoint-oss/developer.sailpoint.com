---
id: role-propagation-status-response-terminated-by
title: RolePropagationStatusResponseTerminatedBy
pagination_label: RolePropagationStatusResponseTerminatedBy
sidebar_label: RolePropagationStatusResponseTerminatedBy
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RolePropagationStatusResponseTerminatedBy', 'RolePropagationStatusResponseTerminatedBy'] 
slug: /tools/sdk/powershell/rolepropagation/models/role-propagation-status-response-terminated-by
tags: ['SDK', 'Software Development Kit', 'RolePropagationStatusResponseTerminatedBy', 'RolePropagationStatusResponseTerminatedBy']
---


# RolePropagationStatusResponseTerminatedBy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | DTO type of the Identity who terminated the Role Propagation process. | [optional] 
**Id** | **String** | ID of the Identity who terminated the Role Propagation process. | [optional] 
**Name** | **String** | Name of the Identity who terminated the Role Propagation process. | [optional] 

## Examples

- Prepare the resource
```powershell
$RolePropagationStatusResponseTerminatedBy = Initialize-RolePropagationStatusResponseTerminatedBy  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20648 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$RolePropagationStatusResponseTerminatedBy | ConvertTo-JSON
```


[[Back to top]](#) 

