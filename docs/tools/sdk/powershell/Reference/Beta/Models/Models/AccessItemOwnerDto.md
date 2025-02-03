---
id: beta-access-item-owner-dto
title: AccessItemOwnerDto
pagination_label: AccessItemOwnerDto
sidebar_label: AccessItemOwnerDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessItemOwnerDto', 'BetaAccessItemOwnerDto'] 
slug: /tools/sdk/powershell/beta/models/access-item-owner-dto
tags: ['SDK', 'Software Development Kit', 'AccessItemOwnerDto', 'BetaAccessItemOwnerDto']
---


# AccessItemOwnerDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "IDENTITY" ] | Access item owner's DTO type. | [optional] 
**Id** |  Pointer to **String** | Access item owner's identity ID. | [optional] 
**Name** |  Pointer to **String** | Access item owner's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessItemOwnerDto = Initialize-PSSailpoint.BetaAccessItemOwnerDto  -Type IDENTITY `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name Support
```

- Convert the resource to JSON
```powershell
$AccessItemOwnerDto | ConvertTo-JSON
```


[[Back to top]](#) 

