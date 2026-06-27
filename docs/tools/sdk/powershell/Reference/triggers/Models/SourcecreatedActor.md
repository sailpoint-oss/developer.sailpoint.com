---
id: sourcecreated-actor
title: SourcecreatedActor
pagination_label: SourcecreatedActor
sidebar_label: SourcecreatedActor
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourcecreatedActor', 'SourcecreatedActor'] 
slug: /tools/sdk/powershell/triggers/models/sourcecreated-actor
tags: ['SDK', 'Software Development Kit', 'SourcecreatedActor', 'SourcecreatedActor']
---


# SourcecreatedActor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | DTO type of identity who created the source. | [required]
**Id** | **String** | ID of identity who created the source. | [required]
**Name** | **String** | Display name of identity who created the source. | [required]

## Examples

- Prepare the resource
```powershell
$SourcecreatedActor = Initialize-SourcecreatedActor  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20648 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$SourcecreatedActor | ConvertTo-JSON
```


[[Back to top]](#) 

