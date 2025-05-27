---
id: v2025-source-deleted-actor
title: SourceDeletedActor
pagination_label: SourceDeletedActor
sidebar_label: SourceDeletedActor
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceDeletedActor', 'V2025SourceDeletedActor'] 
slug: /tools/sdk/powershell/v2025/models/source-deleted-actor
tags: ['SDK', 'Software Development Kit', 'SourceDeletedActor', 'V2025SourceDeletedActor']
---


# SourceDeletedActor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | DTO type of identity who deleted the source. | [required]
**Id** | **String** | ID of identity who deleted the source. | [required]
**Name** | **String** | Display name of identity who deleted the source. | [required]

## Examples

- Prepare the resource
```powershell
$SourceDeletedActor = Initialize-V2025SourceDeletedActor  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20648 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$SourceDeletedActor | ConvertTo-JSON
```


[[Back to top]](#) 

