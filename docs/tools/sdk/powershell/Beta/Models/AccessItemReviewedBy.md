---
id: access-item-reviewed-by
title: AccessItemReviewedBy
pagination_label: AccessItemReviewedBy
sidebar_label: AccessItemReviewedBy
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccessItemReviewedBy'] 
slug: /tools/sdk/powershell/beta/models/access-item-reviewed-by
tags: ['SDK', 'Software Development Kit', 'AccessItemReviewedBy']
---


# AccessItemReviewedBy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "IDENTITY" ] | DTO type of identity who reviewed the access item request. | [optional] 
**Id** |  Pointer to **String** | ID of identity who reviewed the access item request. | [optional] 
**Name** |  Pointer to **String** | Human-readable display name of identity who reviewed the access item request. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessItemReviewedBy = Initialize-PSSailpointBetaAccessItemReviewedBy  -Type IDENTITY `
 -Id 2c3780a46faadee4016fb4e018c20652 `
 -Name Allen Albertson
```

- Convert the resource to JSON
```powershell
$AccessItemReviewedBy | ConvertTo-JSON
```


[[Back to top]](#) 

