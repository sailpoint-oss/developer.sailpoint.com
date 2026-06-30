---
id: sourcedeleted-actor
title: SourcedeletedActor
pagination_label: SourcedeletedActor
sidebar_label: SourcedeletedActor
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourcedeletedActor', 'SourcedeletedActor'] 
slug: /tools/sdk/powershell/triggers/models/sourcedeleted-actor
tags: ['SDK', 'Software Development Kit', 'SourcedeletedActor', 'SourcedeletedActor']
---


# SourcedeletedActor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | DTO type of identity who deleted the source. | [required]
**Id** | **String** | ID of identity who deleted the source. | [required]
**Name** | **String** | Display name of identity who deleted the source. | [required]

## Examples

- Prepare the resource
```powershell
$SourcedeletedActor = Initialize-SourcedeletedActor  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20648 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$SourcedeletedActor | ConvertTo-JSON
```


[[Back to top]](#) 

