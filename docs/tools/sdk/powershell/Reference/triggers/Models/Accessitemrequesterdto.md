---
id: accessitemrequesterdto
title: Accessitemrequesterdto
pagination_label: Accessitemrequesterdto
sidebar_label: Accessitemrequesterdto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessitemrequesterdto', 'Accessitemrequesterdto'] 
slug: /tools/sdk/powershell/triggers/models/accessitemrequesterdto
tags: ['SDK', 'Software Development Kit', 'Accessitemrequesterdto', 'Accessitemrequesterdto']
---


# Accessitemrequesterdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Access item requester's DTO type. | [optional] 
**Id** | **String** | Access item requester's identity ID. | [optional] 
**Name** | **String** | Access item owner's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$Accessitemrequesterdto = Initialize-Accessitemrequesterdto  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20648 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$Accessitemrequesterdto | ConvertTo-JSON
```


[[Back to top]](#) 

