---
id: v2025-access-item-requester
title: AccessItemRequester
pagination_label: AccessItemRequester
sidebar_label: AccessItemRequester
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessItemRequester', 'V2025AccessItemRequester'] 
slug: /tools/sdk/powershell/v2025/models/access-item-requester
tags: ['SDK', 'Software Development Kit', 'AccessItemRequester', 'V2025AccessItemRequester']
---


# AccessItemRequester

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Access item requester's DTO type. | [optional] 
**Id** | **String** | Access item requester's identity ID. | [optional] 
**Name** | **String** | Access item owner's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessItemRequester = Initialize-V2025AccessItemRequester  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20648 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$AccessItemRequester | ConvertTo-JSON
```


[[Back to top]](#) 

