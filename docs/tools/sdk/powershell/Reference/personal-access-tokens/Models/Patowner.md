---
id: patowner
title: Patowner
pagination_label: Patowner
sidebar_label: Patowner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Patowner', 'Patowner'] 
slug: /tools/sdk/powershell/personalaccesstokens/models/patowner
tags: ['SDK', 'Software Development Kit', 'Patowner', 'Patowner']
---


# Patowner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Personal access token owner's DTO type. | [optional] 
**Id** | **String** | Personal access token owner's identity ID. | [optional] 
**Name** | **String** | Personal access token owner's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$Patowner = Initialize-Patowner  -Type IDENTITY `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name Support
```

- Convert the resource to JSON
```powershell
$Patowner | ConvertTo-JSON
```


[[Back to top]](#) 

