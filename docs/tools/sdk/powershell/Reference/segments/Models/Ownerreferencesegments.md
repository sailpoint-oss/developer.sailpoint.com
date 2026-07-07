---
id: ownerreferencesegments
title: Ownerreferencesegments
pagination_label: Ownerreferencesegments
sidebar_label: Ownerreferencesegments
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Ownerreferencesegments', 'Ownerreferencesegments'] 
slug: /tools/sdk/powershell/segments/models/ownerreferencesegments
tags: ['SDK', 'Software Development Kit', 'Ownerreferencesegments', 'Ownerreferencesegments']
---


# Ownerreferencesegments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Owner type. This field must be either left null or set to 'IDENTITY' on input, otherwise a 400 Bad Request error will result. | [optional] 
**Id** | **String** | Identity id | [optional] 
**Name** | **String** | Human-readable display name of the owner. It may be left null or omitted in a POST or PATCH. If set, it must match the current value of the owner's display name, otherwise a 400 Bad Request error will result. | [optional] 

## Examples

- Prepare the resource
```powershell
$Ownerreferencesegments = Initialize-Ownerreferencesegments  -Type IDENTITY `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name support
```

- Convert the resource to JSON
```powershell
$Ownerreferencesegments | ConvertTo-JSON
```


[[Back to top]](#) 

