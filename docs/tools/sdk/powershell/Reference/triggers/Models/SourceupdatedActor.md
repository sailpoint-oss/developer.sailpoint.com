---
id: sourceupdated-actor
title: SourceupdatedActor
pagination_label: SourceupdatedActor
sidebar_label: SourceupdatedActor
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceupdatedActor', 'SourceupdatedActor'] 
slug: /tools/sdk/powershell/triggers/models/sourceupdated-actor
tags: ['SDK', 'Software Development Kit', 'SourceupdatedActor', 'SourceupdatedActor']
---


# SourceupdatedActor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | DTO type of identity who updated the source. | [required]
**Id** | **String** | ID of identity who updated the source. | [optional] 
**Name** | **String** | Display name of identity who updated the source. | [required]

## Examples

- Prepare the resource
```powershell
$SourceupdatedActor = Initialize-SourceupdatedActor  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20648 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$SourceupdatedActor | ConvertTo-JSON
```


[[Back to top]](#) 

