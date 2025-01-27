---
id: v2024-source-created-actor
title: SourceCreatedActor
pagination_label: SourceCreatedActor
sidebar_label: SourceCreatedActor
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceCreatedActor'] 
slug: /tools/sdk/powershell/v2024/models/source-created-actor
tags: ['SDK', 'Software Development Kit', 'SourceCreatedActor']
---


# SourceCreatedActor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |   **Enum** [  "IDENTITY" ] | DTO type of identity who created the source. | [required]
**Id** |  **String** | ID of identity who created the source. | [required]
**Name** |  **String** | Display name of identity who created the source. | [required]

## Examples

- Prepare the resource
```powershell
$SourceCreatedActor = Initialize-PSSailpoint.V2024SourceCreatedActor  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20648 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$SourceCreatedActor | ConvertTo-JSON
```


[[Back to top]](#) 

