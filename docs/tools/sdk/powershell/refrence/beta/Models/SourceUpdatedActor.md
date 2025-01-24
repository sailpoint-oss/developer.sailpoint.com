---
id: source-updated-actor
title: SourceUpdatedActor
pagination_label: SourceUpdatedActor
sidebar_label: SourceUpdatedActor
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceUpdatedActor'] 
slug: /tools/sdk/powershell/beta/models/source-updated-actor
tags: ['SDK', 'Software Development Kit', 'SourceUpdatedActor']
---


# SourceUpdatedActor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |   **Enum** [  "IDENTITY" ] | DTO type of identity who updated the source. | [required]
**Id** |  Pointer to **String** | ID of identity who updated the source. | [optional] 
**Name** |  **String** | Display name of identity who updated the source. | [required]

## Examples

- Prepare the resource
```powershell
$SourceUpdatedActor = Initialize-PSSailpoint.BetaSourceUpdatedActor  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20648 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$SourceUpdatedActor | ConvertTo-JSON
```


[[Back to top]](#) 

