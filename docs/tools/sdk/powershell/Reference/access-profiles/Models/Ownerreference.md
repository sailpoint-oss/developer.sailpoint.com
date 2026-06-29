---
id: ownerreference
title: Ownerreference
pagination_label: Ownerreference
sidebar_label: Ownerreference
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Ownerreference', 'Ownerreference'] 
slug: /tools/sdk/powershell/accessprofiles/models/ownerreference
tags: ['SDK', 'Software Development Kit', 'Ownerreference', 'Ownerreference']
---


# Ownerreference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Owner type. This field must be either left null or set to 'IDENTITY' on input, otherwise a 400 Bad Request error will result. | [optional] 
**Id** | **String** | Owner's identity ID. | [optional] 
**Name** | **String** | Owner's name. It may be left null or omitted in a POST or PATCH. If set, it must match the current value of the owner's display name, otherwise a 400 Bad Request error will result. | [optional] 

## Examples

- Prepare the resource
```powershell
$Ownerreference = Initialize-Ownerreference  -Type IDENTITY `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name support
```

- Convert the resource to JSON
```powershell
$Ownerreference | ConvertTo-JSON
```


[[Back to top]](#) 

