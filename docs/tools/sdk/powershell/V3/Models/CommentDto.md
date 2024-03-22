---
id: comment-dto
title: CommentDto
pagination_label: CommentDto
sidebar_label: CommentDto
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'CommentDto'] 
slug: /tools/sdk/powershell/v3/models/comment-dto
tags: ['SDK', 'Software Development Kit', 'CommentDto']
---


# CommentDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** |  Pointer to **String** | Comment content. | [optional] 
**Created** |  Pointer to **System.DateTime** | Date and time comment was created. | [optional] 
**Author** |  Pointer to [**CommentDtoAuthor**](comment-dto-author) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$CommentDto = Initialize-PSSailpointCommentDto  -Comment This is a comment. `
 -Created 2017-07-11T18:45:37.098Z `
 -Author null
```

- Convert the resource to JSON
```powershell
$CommentDto | ConvertTo-JSON
```


[[Back to top]](#) 

