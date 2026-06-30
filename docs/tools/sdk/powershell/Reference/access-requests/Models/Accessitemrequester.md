---
id: accessitemrequester
title: Accessitemrequester
pagination_label: Accessitemrequester
sidebar_label: Accessitemrequester
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessitemrequester', 'Accessitemrequester'] 
slug: /tools/sdk/powershell/accessrequests/models/accessitemrequester
tags: ['SDK', 'Software Development Kit', 'Accessitemrequester', 'Accessitemrequester']
---


# Accessitemrequester

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Access item requester's DTO type. | [optional] 
**Id** | **String** | Access item requester's identity ID. | [optional] 
**Name** | **String** | Access item owner's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$Accessitemrequester = Initialize-Accessitemrequester  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20648 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$Accessitemrequester | ConvertTo-JSON
```


[[Back to top]](#) 

