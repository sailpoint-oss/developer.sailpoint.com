---
id: v2024-owner-dto
title: OwnerDto
pagination_label: OwnerDto
sidebar_label: OwnerDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'OwnerDto', 'V2024OwnerDto'] 
slug: /tools/sdk/powershell/v2024/models/owner-dto
tags: ['SDK', 'Software Development Kit', 'OwnerDto', 'V2024OwnerDto']
---


# OwnerDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Owner's DTO type. | [optional] 
**Id** | **String** | Owner's identity ID. | [optional] 
**Name** | **String** | Owner's name. | [optional] 

## Examples

- Prepare the resource
```powershell
$OwnerDto = Initialize-PSSailpoint.V2024OwnerDto  -Type IDENTITY `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name Support
```

- Convert the resource to JSON
```powershell
$OwnerDto | ConvertTo-JSON
```


[[Back to top]](#) 

