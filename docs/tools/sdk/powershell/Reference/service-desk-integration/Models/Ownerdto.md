---
id: ownerdto
title: Ownerdto
pagination_label: Ownerdto
sidebar_label: Ownerdto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Ownerdto', 'Ownerdto'] 
slug: /tools/sdk/powershell/servicedeskintegration/models/ownerdto
tags: ['SDK', 'Software Development Kit', 'Ownerdto', 'Ownerdto']
---


# Ownerdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Owner's DTO type. | [optional] 
**Id** | **String** | Owner's identity ID. | [optional] 
**Name** | **String** | Owner's name. | [optional] 

## Examples

- Prepare the resource
```powershell
$Ownerdto = Initialize-Ownerdto  -Type IDENTITY `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name Support
```

- Convert the resource to JSON
```powershell
$Ownerdto | ConvertTo-JSON
```


[[Back to top]](#) 

