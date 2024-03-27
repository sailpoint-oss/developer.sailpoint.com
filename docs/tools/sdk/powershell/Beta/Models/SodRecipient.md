---
id: sod-recipient
title: SodRecipient
pagination_label: SodRecipient
sidebar_label: SodRecipient
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'SodRecipient'] 
slug: /tools/sdk/powershell/beta/models/sod-recipient
tags: ['SDK', 'Software Development Kit', 'SodRecipient']
---


# SodRecipient

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "IDENTITY" ] | SOD policy recipient DTO type. | [optional] 
**Id** |  Pointer to **String** | SOD policy recipient&#39;s identity ID. | [optional] 
**Name** |  Pointer to **String** | SOD policy recipient&#39;s display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$SodRecipient = Initialize-PSSailpointBetaSodRecipient  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20642 `
 -Name Michael Michaels
```

- Convert the resource to JSON
```powershell
$SodRecipient | ConvertTo-JSON
```


[[Back to top]](#) 

