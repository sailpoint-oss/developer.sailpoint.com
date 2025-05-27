---
id: beta-sod-recipient
title: SodRecipient
pagination_label: SodRecipient
sidebar_label: SodRecipient
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SodRecipient', 'BetaSodRecipient'] 
slug: /tools/sdk/powershell/beta/models/sod-recipient
tags: ['SDK', 'Software Development Kit', 'SodRecipient', 'BetaSodRecipient']
---


# SodRecipient

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | SOD policy recipient DTO type. | [optional] 
**Id** | **String** | SOD policy recipient's identity ID. | [optional] 
**Name** | **String** | SOD policy recipient's display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$SodRecipient = Initialize-BetaSodRecipient  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$SodRecipient | ConvertTo-JSON
```


[[Back to top]](#) 

