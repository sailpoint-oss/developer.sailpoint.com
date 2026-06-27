---
id: multihostintegrations-owner
title: MultihostintegrationsOwner
pagination_label: MultihostintegrationsOwner
sidebar_label: MultihostintegrationsOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MultihostintegrationsOwner', 'MultihostintegrationsOwner'] 
slug: /tools/sdk/powershell/multihostintegration/models/multihostintegrations-owner
tags: ['SDK', 'Software Development Kit', 'MultihostintegrationsOwner', 'MultihostintegrationsOwner']
---


# MultihostintegrationsOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Type of object being referenced. | [optional] 
**Id** | **String** | Owner identity's ID. | [optional] 
**Name** | **String** | Owner identity's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$MultihostintegrationsOwner = Initialize-MultihostintegrationsOwner  -Type IDENTITY `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name MyName
```

- Convert the resource to JSON
```powershell
$MultihostintegrationsOwner | ConvertTo-JSON
```


[[Back to top]](#) 

