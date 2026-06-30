---
id: accessitemreviewedby
title: Accessitemreviewedby
pagination_label: Accessitemreviewedby
sidebar_label: Accessitemreviewedby
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessitemreviewedby', 'Accessitemreviewedby'] 
slug: /tools/sdk/powershell/accessrequests/models/accessitemreviewedby
tags: ['SDK', 'Software Development Kit', 'Accessitemreviewedby', 'Accessitemreviewedby']
---


# Accessitemreviewedby

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | DTO type of identity who reviewed the access item request. | [optional] 
**Id** | **String** | ID of identity who reviewed the access item request. | [optional] 
**Name** | **String** | Human-readable display name of identity who reviewed the access item request. | [optional] 

## Examples

- Prepare the resource
```powershell
$Accessitemreviewedby = Initialize-Accessitemreviewedby  -Type IDENTITY `
 -Id 2c3780a46faadee4016fb4e018c20652 `
 -Name Allen Albertson
```

- Convert the resource to JSON
```powershell
$Accessitemreviewedby | ConvertTo-JSON
```


[[Back to top]](#) 

