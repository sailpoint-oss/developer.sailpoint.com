---
id: accessitemapproverdto
title: Accessitemapproverdto
pagination_label: Accessitemapproverdto
sidebar_label: Accessitemapproverdto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessitemapproverdto', 'Accessitemapproverdto'] 
slug: /tools/sdk/powershell/triggers/models/accessitemapproverdto
tags: ['SDK', 'Software Development Kit', 'Accessitemapproverdto', 'Accessitemapproverdto']
---


# Accessitemapproverdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | DTO type of identity who approved the access item request. | [optional] 
**Id** | **String** | ID of identity who approved the access item request. | [optional] 
**Name** | **String** | Human-readable display name of identity who approved the access item request. | [optional] 

## Examples

- Prepare the resource
```powershell
$Accessitemapproverdto = Initialize-Accessitemapproverdto  -Type IDENTITY `
 -Id 2c3780a46faadee4016fb4e018c20652 `
 -Name Allen Albertson
```

- Convert the resource to JSON
```powershell
$Accessitemapproverdto | ConvertTo-JSON
```


[[Back to top]](#) 

