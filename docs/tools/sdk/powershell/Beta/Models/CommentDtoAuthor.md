---
id: comment-dto-author
title: CommentDtoAuthor
pagination_label: CommentDtoAuthor
sidebar_label: CommentDtoAuthor
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'CommentDtoAuthor'] 
slug: /tools/sdk/powershell/beta/models/comment-dto-author
tags: ['SDK', 'Software Development Kit', 'CommentDtoAuthor']
---


# CommentDtoAuthor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "IDENTITY" ] | DTO type of the commenting identity. | [optional] 
**Id** |  Pointer to **String** | ID of the commenting identity. | [optional] 
**Name** |  Pointer to **String** | Display name of the commenting identity. | [optional] 

## Examples

- Prepare the resource
```powershell
$CommentDtoAuthor = Initialize-BetaCommentDtoAuthor  -Type IDENTITY `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name Adam Kennedy
```

- Convert the resource to JSON
```powershell
$CommentDtoAuthor | ConvertTo-JSON
```


[[Back to top]](#) 

