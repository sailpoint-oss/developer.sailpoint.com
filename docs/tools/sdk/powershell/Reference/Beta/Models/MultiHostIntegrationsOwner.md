---
id: beta-multi-host-integrations-owner
title: MultiHostIntegrationsOwner
pagination_label: MultiHostIntegrationsOwner
sidebar_label: MultiHostIntegrationsOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MultiHostIntegrationsOwner', 'BetaMultiHostIntegrationsOwner'] 
slug: /tools/sdk/powershell/beta/models/multi-host-integrations-owner
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrationsOwner', 'BetaMultiHostIntegrationsOwner']
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
$MultiHostIntegrationsOwner = Initialize-PSSailpoint.BetaMultiHostIntegrationsOwner  -Type IDENTITY `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name MyName
```

- Convert the resource to JSON
```powershell
$MultiHostIntegrationsOwner | ConvertTo-JSON
```


[[Back to top]](#) 

