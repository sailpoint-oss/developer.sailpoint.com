---
id: commentdto-author
title: CommentdtoAuthor
pagination_label: CommentdtoAuthor
sidebar_label: CommentdtoAuthor
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CommentdtoAuthor', 'CommentdtoAuthor'] 
slug: /tools/sdk/powershell/accessrequestapprovals/models/commentdto-author
tags: ['SDK', 'Software Development Kit', 'CommentdtoAuthor', 'CommentdtoAuthor']
---


# CommentdtoAuthor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | The type of object | [optional] 
**Id** | **String** | The unique ID of the object | [optional] 
**Name** | **String** | The display name of the object | [optional] 

## Examples

- Prepare the resource
```powershell
$CommentdtoAuthor = Initialize-CommentdtoAuthor  -Type IDENTITY `
 -Id 2c9180847e25f377017e2ae8cae4650b `
 -Name john.doe
```

- Convert the resource to JSON
```powershell
$CommentdtoAuthor | ConvertTo-JSON
```


[[Back to top]](#) 

