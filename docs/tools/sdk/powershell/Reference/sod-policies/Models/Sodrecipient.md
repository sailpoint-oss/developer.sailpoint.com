---
id: sodrecipient
title: Sodrecipient
pagination_label: Sodrecipient
sidebar_label: Sodrecipient
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sodrecipient', 'Sodrecipient'] 
slug: /tools/sdk/powershell/sodpolicies/models/sodrecipient
tags: ['SDK', 'Software Development Kit', 'Sodrecipient', 'Sodrecipient']
---


# Sodrecipient

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | SOD policy recipient DTO type. | [optional] 
**Id** | **String** | SOD policy recipient's identity ID. | [optional] 
**Name** | **String** | SOD policy recipient's display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$Sodrecipient = Initialize-Sodrecipient  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$Sodrecipient | ConvertTo-JSON
```


[[Back to top]](#) 

