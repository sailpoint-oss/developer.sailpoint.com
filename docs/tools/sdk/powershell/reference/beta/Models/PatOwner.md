---
id: beta-pat-owner
title: PatOwner
pagination_label: PatOwner
sidebar_label: PatOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PatOwner'] 
slug: /tools/sdk/powershell/beta/models/pat-owner
tags: ['SDK', 'Software Development Kit', 'PatOwner']
---


# PatOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "IDENTITY" ] | Personal access token owner's DTO type. | [optional] 
**Id** |  Pointer to **String** | Personal access token owner's identity ID. | [optional] 
**Name** |  Pointer to **String** | Personal access token owner's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$PatOwner = Initialize-PSSailpoint.BetaPatOwner  -Type IDENTITY `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name Support
```

- Convert the resource to JSON
```powershell
$PatOwner | ConvertTo-JSON
```


[[Back to top]](#) 

