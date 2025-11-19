---
id: comment-dto-author
title: CommentDtoAuthor
pagination_label: CommentDtoAuthor
sidebar_label: CommentDtoAuthor
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CommentDtoAuthor', 'CommentDtoAuthor'] 
slug: /tools/sdk/powershell/v3/models/comment-dto-author
tags: ['SDK', 'Software Development Kit', 'CommentDtoAuthor', 'CommentDtoAuthor']
---


# CommentDtoAuthor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | The type of object | [optional] 
**Id** | **String** | The unique ID of the object | [optional] 
**Name** | **String** | The display name of the object | [optional] 

## Examples

- Prepare the resource
```powershell
$CommentDtoAuthor = Initialize-CommentDtoAuthor  -Type IDENTITY `
 -Id 2c9180847e25f377017e2ae8cae4650b `
 -Name john.doe
```

- Convert the resource to JSON
```powershell
$CommentDtoAuthor | ConvertTo-JSON
```


[[Back to top]](#) 

