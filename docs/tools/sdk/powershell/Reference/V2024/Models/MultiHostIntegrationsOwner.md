---
id: v2024-multi-host-integrations-owner
title: MultiHostIntegrationsOwner
pagination_label: MultiHostIntegrationsOwner
sidebar_label: MultiHostIntegrationsOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MultiHostIntegrationsOwner', 'V2024MultiHostIntegrationsOwner'] 
slug: /tools/sdk/powershell/v2024/models/multi-host-integrations-owner
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrationsOwner', 'V2024MultiHostIntegrationsOwner']
---


# MultiHostIntegrationsOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Type of object being referenced. | [optional] 
**Id** | **String** | Owner identity's ID. | [optional] 
**Name** | **String** | Owner identity's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$MultiHostIntegrationsOwner = Initialize-V2024MultiHostIntegrationsOwner  -Type IDENTITY `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name MyName
```

- Convert the resource to JSON
```powershell
$MultiHostIntegrationsOwner | ConvertTo-JSON
```


[[Back to top]](#) 

