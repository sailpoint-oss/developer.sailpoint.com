---
id: beta-access-item-requester-dto1
title: AccessItemRequesterDto1
pagination_label: AccessItemRequesterDto1
sidebar_label: AccessItemRequesterDto1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessItemRequesterDto1', 'BetaAccessItemRequesterDto1'] 
slug: /tools/sdk/powershell/beta/models/access-item-requester-dto1
tags: ['SDK', 'Software Development Kit', 'AccessItemRequesterDto1', 'BetaAccessItemRequesterDto1']
---


# AccessItemRequesterDto1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Access item requester's DTO type. | [optional] 
**Id** | **String** | Access item requester's identity ID. | [optional] 
**Name** | **String** | Access item requester's name. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessItemRequesterDto1 = Initialize-PSSailpoint.BetaAccessItemRequesterDto1  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20648 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$AccessItemRequesterDto1 | ConvertTo-JSON
```


[[Back to top]](#) 

