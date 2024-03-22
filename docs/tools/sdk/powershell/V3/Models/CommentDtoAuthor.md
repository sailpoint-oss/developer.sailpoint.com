---
id: comment-dto-author
title: CommentDtoAuthor
pagination_label: CommentDtoAuthor
sidebar_label: CommentDtoAuthor
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'CommentDtoAuthor'] 
slug: /tools/sdk/powershell/v3/models/comment-dto-author
tags: ['SDK', 'Software Development Kit', 'CommentDtoAuthor']
---


# CommentDtoAuthor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "IDENTITY" ] | The type of object | [optional] 
**Id** |  Pointer to **String** | The unique ID of the object | [optional] 
**Name** |  Pointer to **String** | The display name of the object | [optional] 

## Examples

- Prepare the resource
```powershell
$CommentDtoAuthor = Initialize-PSSailpointCommentDtoAuthor  -Type IDENTITY `
 -Id 2c9180847e25f377017e2ae8cae4650b `
 -Name john.doe
```

- Convert the resource to JSON
```powershell
$CommentDtoAuthor | ConvertTo-JSON
```


[[Back to top]](#) 

