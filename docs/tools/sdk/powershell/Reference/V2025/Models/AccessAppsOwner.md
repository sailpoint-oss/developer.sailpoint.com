---
id: v2025-access-apps-owner
title: AccessAppsOwner
pagination_label: AccessAppsOwner
sidebar_label: AccessAppsOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessAppsOwner', 'V2025AccessAppsOwner'] 
slug: /tools/sdk/powershell/v2025/models/access-apps-owner
tags: ['SDK', 'Software Development Kit', 'AccessAppsOwner', 'V2025AccessAppsOwner']
---


# AccessAppsOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Owner's DTO type. | [optional] 
**Id** | **String** | Owner's identity ID. | [optional] 
**Name** | **String** | Owner's display name. | [optional] 
**Email** | **String** | Owner's email. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessAppsOwner = Initialize-V2025AccessAppsOwner  -Type IDENTITY `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name John Doe `
 -Email john.doe@sailpoint.com
```

- Convert the resource to JSON
```powershell
$AccessAppsOwner | ConvertTo-JSON
```


[[Back to top]](#) 

