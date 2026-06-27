---
id: accessapps-owner
title: AccessappsOwner
pagination_label: AccessappsOwner
sidebar_label: AccessappsOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessappsOwner', 'AccessappsOwner'] 
slug: /tools/sdk/powershell/search/models/accessapps-owner
tags: ['SDK', 'Software Development Kit', 'AccessappsOwner', 'AccessappsOwner']
---


# AccessappsOwner

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
$AccessappsOwner = Initialize-AccessappsOwner  -Type IDENTITY `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name John Doe `
 -Email john.doe@sailpoint.com
```

- Convert the resource to JSON
```powershell
$AccessappsOwner | ConvertTo-JSON
```


[[Back to top]](#) 

