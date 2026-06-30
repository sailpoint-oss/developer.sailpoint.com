---
id: sourceclusterdto
title: Sourceclusterdto
pagination_label: Sourceclusterdto
sidebar_label: Sourceclusterdto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sourceclusterdto', 'Sourceclusterdto'] 
slug: /tools/sdk/powershell/servicedeskintegration/models/sourceclusterdto
tags: ['SDK', 'Software Development Kit', 'Sourceclusterdto', 'Sourceclusterdto']
---


# Sourceclusterdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "CLUSTER" ] | Source cluster DTO type. | [optional] 
**Id** | **String** | Source cluster ID. | [optional] 
**Name** | **String** | Source cluster display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$Sourceclusterdto = Initialize-Sourceclusterdto  -Type CLUSTER `
 -Id 2c9180847a7fccdd017aa5896f9f4f6f `
 -Name Training VA
```

- Convert the resource to JSON
```powershell
$Sourceclusterdto | ConvertTo-JSON
```


[[Back to top]](#) 

