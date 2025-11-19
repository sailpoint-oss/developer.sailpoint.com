---
id: beta-comment-dto1-author
title: CommentDto1Author
pagination_label: CommentDto1Author
sidebar_label: CommentDto1Author
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CommentDto1Author', 'BetaCommentDto1Author'] 
slug: /tools/sdk/powershell/beta/models/comment-dto1-author
tags: ['SDK', 'Software Development Kit', 'CommentDto1Author', 'BetaCommentDto1Author']
---


# CommentDto1Author

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | The type of object | [optional] 
**Id** | **String** | The unique ID of the object | [optional] 
**Name** | **String** | The display name of the object | [optional] 

## Examples

- Prepare the resource
```powershell
$CommentDto1Author = Initialize-BetaCommentDto1Author  -Type IDENTITY `
 -Id 2c9180847e25f377017e2ae8cae4650b `
 -Name john.doe
```

- Convert the resource to JSON
```powershell
$CommentDto1Author | ConvertTo-JSON
```


[[Back to top]](#) 

