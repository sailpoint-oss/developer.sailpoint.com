---
id: requested-item-status-requester-comment
title: RequestedItemStatusRequesterComment
pagination_label: RequestedItemStatusRequesterComment
sidebar_label: RequestedItemStatusRequesterComment
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RequestedItemStatusRequesterComment', 'RequestedItemStatusRequesterComment'] 
slug: /tools/sdk/powershell/v3/models/requested-item-status-requester-comment
tags: ['SDK', 'Software Development Kit', 'RequestedItemStatusRequesterComment', 'RequestedItemStatusRequesterComment']
---


# RequestedItemStatusRequesterComment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | **String** | Comment content. | [optional] 
**Created** | **System.DateTime** | Date and time comment was created. | [optional] 
**Author** | [**CommentDtoAuthor**](comment-dto-author) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RequestedItemStatusRequesterComment = Initialize-PSSailpoint.V3RequestedItemStatusRequesterComment  -Comment This is a comment. `
 -Created 2017-07-11T18:45:37.098Z `
 -Author null
```

- Convert the resource to JSON
```powershell
$RequestedItemStatusRequesterComment | ConvertTo-JSON
```


[[Back to top]](#) 

