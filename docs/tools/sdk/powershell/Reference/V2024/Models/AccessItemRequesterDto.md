---
id: v2024-access-item-requester-dto
title: AccessItemRequesterDto
pagination_label: AccessItemRequesterDto
sidebar_label: AccessItemRequesterDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessItemRequesterDto', 'V2024AccessItemRequesterDto'] 
slug: /tools/sdk/powershell/v2024/models/access-item-requester-dto
tags: ['SDK', 'Software Development Kit', 'AccessItemRequesterDto', 'V2024AccessItemRequesterDto']
---


# AccessItemRequesterDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Access item requester's DTO type. | [optional] 
**Id** | **String** | Access item requester's identity ID. | [optional] 
**Name** | **String** | Access item owner's human-readable display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessItemRequesterDto = Initialize-V2024AccessItemRequesterDto  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20648 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$AccessItemRequesterDto | ConvertTo-JSON
```


[[Back to top]](#) 

