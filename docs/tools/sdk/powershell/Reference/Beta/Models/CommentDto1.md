---
id: beta-comment-dto1
title: CommentDto1
pagination_label: CommentDto1
sidebar_label: CommentDto1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CommentDto1', 'BetaCommentDto1'] 
slug: /tools/sdk/powershell/beta/models/comment-dto1
tags: ['SDK', 'Software Development Kit', 'CommentDto1', 'BetaCommentDto1']
---


# CommentDto1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | **String** | Comment content. | [optional] 
**Created** | **System.DateTime** | Date and time comment was created. | [optional] 
**Author** | [**CommentDto1Author**](comment-dto1-author) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$CommentDto1 = Initialize-BetaCommentDto1  -Comment This is a comment. `
 -Created 2017-07-11T18:45:37.098Z `
 -Author null
```

- Convert the resource to JSON
```powershell
$CommentDto1 | ConvertTo-JSON
```


[[Back to top]](#) 

