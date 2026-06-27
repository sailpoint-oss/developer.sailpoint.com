---
id: accessitemrequestedfor
title: Accessitemrequestedfor
pagination_label: Accessitemrequestedfor
sidebar_label: Accessitemrequestedfor
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessitemrequestedfor', 'Accessitemrequestedfor'] 
slug: /tools/sdk/powershell/accessrequestapprovals/models/accessitemrequestedfor
tags: ['SDK', 'Software Development Kit', 'Accessitemrequestedfor', 'Accessitemrequestedfor']
---


# Accessitemrequestedfor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | DTO type of identity the access item is requested for. | [optional] 
**Id** | **String** | ID of identity the access item is requested for. | [optional] 
**Name** | **String** | Human-readable display name of identity the access item is requested for. | [optional] 

## Examples

- Prepare the resource
```powershell
$Accessitemrequestedfor = Initialize-Accessitemrequestedfor  -Type IDENTITY `
 -Id 2c4180a46faadee4016fb4e018c20626 `
 -Name Robert Robinson
```

- Convert the resource to JSON
```powershell
$Accessitemrequestedfor | ConvertTo-JSON
```


[[Back to top]](#) 

