---
id: v2024-access-item-reviewed-by
title: AccessItemReviewedBy
pagination_label: AccessItemReviewedBy
sidebar_label: AccessItemReviewedBy
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessItemReviewedBy', 'V2024AccessItemReviewedBy'] 
slug: /tools/sdk/powershell/v2024/models/access-item-reviewed-by
tags: ['SDK', 'Software Development Kit', 'AccessItemReviewedBy', 'V2024AccessItemReviewedBy']
---


# AccessItemReviewedBy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | DTO type of identity who reviewed the access item request. | [optional] 
**Id** | **String** | ID of identity who reviewed the access item request. | [optional] 
**Name** | **String** | Human-readable display name of identity who reviewed the access item request. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessItemReviewedBy = Initialize-PSSailpoint.V2024AccessItemReviewedBy  -Type IDENTITY `
 -Id 2c3780a46faadee4016fb4e018c20652 `
 -Name Allen Albertson
```

- Convert the resource to JSON
```powershell
$AccessItemReviewedBy | ConvertTo-JSON
```


[[Back to top]](#) 

