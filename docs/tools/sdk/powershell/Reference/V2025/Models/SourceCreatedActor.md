---
id: v2025-source-created-actor
title: SourceCreatedActor
pagination_label: SourceCreatedActor
sidebar_label: SourceCreatedActor
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceCreatedActor', 'V2025SourceCreatedActor'] 
slug: /tools/sdk/powershell/v2025/models/source-created-actor
tags: ['SDK', 'Software Development Kit', 'SourceCreatedActor', 'V2025SourceCreatedActor']
---


# SourceCreatedActor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | DTO type of identity who created the source. | [required]
**Id** | **String** | ID of identity who created the source. | [required]
**Name** | **String** | Display name of identity who created the source. | [required]

## Examples

- Prepare the resource
```powershell
$SourceCreatedActor = Initialize-V2025SourceCreatedActor  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20648 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$SourceCreatedActor | ConvertTo-JSON
```


[[Back to top]](#) 

