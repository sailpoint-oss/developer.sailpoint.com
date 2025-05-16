---
id: v2025-access-item-requested-for
title: AccessItemRequestedFor
pagination_label: AccessItemRequestedFor
sidebar_label: AccessItemRequestedFor
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessItemRequestedFor', 'V2025AccessItemRequestedFor'] 
slug: /tools/sdk/powershell/v2025/models/access-item-requested-for
tags: ['SDK', 'Software Development Kit', 'AccessItemRequestedFor', 'V2025AccessItemRequestedFor']
---


# AccessItemRequestedFor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | DTO type of identity the access item is requested for. | [optional] 
**Id** | **String** | ID of identity the access item is requested for. | [optional] 
**Name** | **String** | Human-readable display name of identity the access item is requested for. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessItemRequestedFor = Initialize-V2025AccessItemRequestedFor  -Type IDENTITY `
 -Id 2c4180a46faadee4016fb4e018c20626 `
 -Name Robert Robinson
```

- Convert the resource to JSON
```powershell
$AccessItemRequestedFor | ConvertTo-JSON
```


[[Back to top]](#) 

