---
id: access-apps-owner
title: AccessAppsOwner
pagination_label: AccessAppsOwner
sidebar_label: AccessAppsOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessAppsOwner', 'AccessAppsOwner'] 
slug: /tools/sdk/powershell/v3/models/access-apps-owner
tags: ['SDK', 'Software Development Kit', 'AccessAppsOwner', 'AccessAppsOwner']
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
$AccessAppsOwner = Initialize-AccessAppsOwner  -Type IDENTITY `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name John Doe `
 -Email john.doe@sailpoint.com
```

- Convert the resource to JSON
```powershell
$AccessAppsOwner | ConvertTo-JSON
```


[[Back to top]](#) 

