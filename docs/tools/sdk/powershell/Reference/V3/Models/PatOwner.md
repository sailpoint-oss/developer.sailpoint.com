---
id: pat-owner
title: PatOwner
pagination_label: PatOwner
sidebar_label: PatOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PatOwner', 'PatOwner'] 
slug: /tools/sdk/powershell/v3/models/pat-owner
tags: ['SDK', 'Software Development Kit', 'PatOwner', 'PatOwner']
---


# PatOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Personal access token owner's DTO type. | [optional] 
**Id** | **String** | Personal access token owner's identity ID. | [optional] 
**Name** | **String** | Personal access token owner's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$PatOwner = Initialize-PatOwner  -Type IDENTITY `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name Support
```

- Convert the resource to JSON
```powershell
$PatOwner | ConvertTo-JSON
```


[[Back to top]](#) 

