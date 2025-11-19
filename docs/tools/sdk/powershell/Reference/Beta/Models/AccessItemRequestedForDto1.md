---
id: beta-access-item-requested-for-dto1
title: AccessItemRequestedForDto1
pagination_label: AccessItemRequestedForDto1
sidebar_label: AccessItemRequestedForDto1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessItemRequestedForDto1', 'BetaAccessItemRequestedForDto1'] 
slug: /tools/sdk/powershell/beta/models/access-item-requested-for-dto1
tags: ['SDK', 'Software Development Kit', 'AccessItemRequestedForDto1', 'BetaAccessItemRequestedForDto1']
---


# AccessItemRequestedForDto1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | DTO type of the identity whom the access item is requested for. | [optional] 
**Id** | **String** | ID of the identity whom the access item is requested for. | [optional] 
**Name** | **String** | Name of the identity whom the access item is requested for. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessItemRequestedForDto1 = Initialize-BetaAccessItemRequestedForDto1  -Type IDENTITY `
 -Id 2c4180a46faadee4016fb4e018c20626 `
 -Name Robert Robinson
```

- Convert the resource to JSON
```powershell
$AccessItemRequestedForDto1 | ConvertTo-JSON
```


[[Back to top]](#) 

