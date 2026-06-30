---
id: requesteditemstatus-requester-comment
title: RequesteditemstatusRequesterComment
pagination_label: RequesteditemstatusRequesterComment
sidebar_label: RequesteditemstatusRequesterComment
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RequesteditemstatusRequesterComment', 'RequesteditemstatusRequesterComment'] 
slug: /tools/sdk/powershell/accessrequests/models/requesteditemstatus-requester-comment
tags: ['SDK', 'Software Development Kit', 'RequesteditemstatusRequesterComment', 'RequesteditemstatusRequesterComment']
---


# RequesteditemstatusRequesterComment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | **String** | Comment content. | [optional] 
**Created** | **System.DateTime** | Date and time comment was created. | [optional] 
**Author** | [**CommentdtoAuthor**](commentdto-author) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RequesteditemstatusRequesterComment = Initialize-RequesteditemstatusRequesterComment  -Comment This is a comment. `
 -Created 2017-07-11T18:45:37.098Z `
 -Author null
```

- Convert the resource to JSON
```powershell
$RequesteditemstatusRequesterComment | ConvertTo-JSON
```


[[Back to top]](#) 

