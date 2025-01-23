---
id: source-owner
title: SourceOwner
pagination_label: SourceOwner
sidebar_label: SourceOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceOwner'] 
slug: /tools/sdk/powershell/v2024/models/source-owner
tags: ['SDK', 'Software Development Kit', 'SourceOwner']
---


# SourceOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "IDENTITY" ] | Type of object being referenced. | [optional] 
**Id** |  Pointer to **String** | Owner identity's ID. | [optional] 
**Name** |  Pointer to **String** | Owner identity's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceOwner = Initialize-PSSailpoint.V2024SourceOwner  -Type IDENTITY `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name MyName
```

- Convert the resource to JSON
```powershell
$SourceOwner | ConvertTo-JSON
```


[[Back to top]](#) 

