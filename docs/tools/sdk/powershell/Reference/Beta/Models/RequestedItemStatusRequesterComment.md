---
id: beta-requested-item-status-requester-comment
title: RequestedItemStatusRequesterComment
pagination_label: RequestedItemStatusRequesterComment
sidebar_label: RequestedItemStatusRequesterComment
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RequestedItemStatusRequesterComment', 'BetaRequestedItemStatusRequesterComment'] 
slug: /tools/sdk/powershell/beta/models/requested-item-status-requester-comment
tags: ['SDK', 'Software Development Kit', 'RequestedItemStatusRequesterComment', 'BetaRequestedItemStatusRequesterComment']
---


# RequestedItemStatusRequesterComment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | **String** | Comment content. | [optional] 
**Created** | **System.DateTime** | Date and time comment was created. | [optional] 
**Author** | [**CommentDto1Author**](comment-dto1-author) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RequestedItemStatusRequesterComment = Initialize-BetaRequestedItemStatusRequesterComment  -Comment This is a comment. `
 -Created 2017-07-11T18:45:37.098Z `
 -Author null
```

- Convert the resource to JSON
```powershell
$RequestedItemStatusRequesterComment | ConvertTo-JSON
```


[[Back to top]](#) 

