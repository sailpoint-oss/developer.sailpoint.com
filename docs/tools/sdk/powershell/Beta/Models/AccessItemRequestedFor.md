---
id: access-item-requested-for
title: AccessItemRequestedFor
pagination_label: AccessItemRequestedFor
sidebar_label: AccessItemRequestedFor
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccessItemRequestedFor'] 
slug: /tools/sdk/powershell/beta/models/access-item-requested-for
tags: ['SDK', 'Software Development Kit', 'AccessItemRequestedFor']
---


# AccessItemRequestedFor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "IDENTITY" ] | DTO type of identity the access item is requested for. | [optional] 
**Id** |  Pointer to **String** | ID of identity the access item is requested for. | [optional] 
**Name** |  Pointer to **String** | Human-readable display name of identity the access item is requested for. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessItemRequestedFor = Initialize-BetaAccessItemRequestedFor  -Type IDENTITY `
 -Id 2c4180a46faadee4016fb4e018c20626 `
 -Name Robert Robinson
```

- Convert the resource to JSON
```powershell
$AccessItemRequestedFor | ConvertTo-JSON
```


[[Back to top]](#) 

