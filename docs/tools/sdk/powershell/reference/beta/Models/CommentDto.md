---
id: beta-comment-dto
title: CommentDto
pagination_label: CommentDto
sidebar_label: CommentDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CommentDto'] 
slug: /tools/sdk/powershell/beta/models/comment-dto
tags: ['SDK', 'Software Development Kit', 'CommentDto']
---


# CommentDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** |  Pointer to **String** | Comment content. | [optional] 
**Author** |  Pointer to [**CommentDtoAuthor**](comment-dto-author) |  | [optional] 
**Created** |  Pointer to **System.DateTime** | Date and time comment was created. | [optional] 

## Examples

- Prepare the resource
```powershell
$CommentDto = Initialize-PSSailpoint.BetaCommentDto  -Comment This is a comment. `
 -Author null `
 -Created 2017-07-11T18:45:37.098Z
```

- Convert the resource to JSON
```powershell
$CommentDto | ConvertTo-JSON
```


[[Back to top]](#) 

