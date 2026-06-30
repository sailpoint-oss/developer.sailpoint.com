---
id: accessitemrequestedfordto
title: Accessitemrequestedfordto
pagination_label: Accessitemrequestedfordto
sidebar_label: Accessitemrequestedfordto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessitemrequestedfordto', 'Accessitemrequestedfordto'] 
slug: /tools/sdk/powershell/triggers/models/accessitemrequestedfordto
tags: ['SDK', 'Software Development Kit', 'Accessitemrequestedfordto', 'Accessitemrequestedfordto']
---


# Accessitemrequestedfordto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | DTO type of identity the access item is requested for. | [optional] 
**Id** | **String** | ID of identity the access item is requested for. | [optional] 
**Name** | **String** | Human-readable display name of identity the access item is requested for. | [optional] 

## Examples

- Prepare the resource
```powershell
$Accessitemrequestedfordto = Initialize-Accessitemrequestedfordto  -Type IDENTITY `
 -Id 2c4180a46faadee4016fb4e018c20626 `
 -Name Robert Robinson
```

- Convert the resource to JSON
```powershell
$Accessitemrequestedfordto | ConvertTo-JSON
```


[[Back to top]](#) 

