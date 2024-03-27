---
id: access-item-owner-dto
title: AccessItemOwnerDto
pagination_label: AccessItemOwnerDto
sidebar_label: AccessItemOwnerDto
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccessItemOwnerDto'] 
slug: /tools/sdk/powershell/beta/models/access-item-owner-dto
tags: ['SDK', 'Software Development Kit', 'AccessItemOwnerDto']
---


# AccessItemOwnerDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "IDENTITY" ] | Access item owner&#39;s DTO type. | [optional] 
**Id** |  Pointer to **String** | Access item owner&#39;s identity ID. | [optional] 
**Name** |  Pointer to **String** | Access item owner&#39;s human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessItemOwnerDto = Initialize-PSSailpointBetaAccessItemOwnerDto  -Type IDENTITY `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name Support
```

- Convert the resource to JSON
```powershell
$AccessItemOwnerDto | ConvertTo-JSON
```


[[Back to top]](#) 

