---
id: v2025-source-owner
title: SourceOwner
pagination_label: SourceOwner
sidebar_label: SourceOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceOwner', 'V2025SourceOwner'] 
slug: /tools/sdk/powershell/v2025/models/source-owner
tags: ['SDK', 'Software Development Kit', 'SourceOwner', 'V2025SourceOwner']
---


# SourceOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Type of object being referenced. | [optional] 
**Id** | **String** | Owner identity's ID. | [optional] 
**Name** | **String** | Owner identity's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceOwner = Initialize-V2025SourceOwner  -Type IDENTITY `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name MyName
```

- Convert the resource to JSON
```powershell
$SourceOwner | ConvertTo-JSON
```


[[Back to top]](#) 

