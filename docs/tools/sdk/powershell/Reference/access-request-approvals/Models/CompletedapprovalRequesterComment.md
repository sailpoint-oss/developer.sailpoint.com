---
id: completedapproval-requester-comment
title: CompletedapprovalRequesterComment
pagination_label: CompletedapprovalRequesterComment
sidebar_label: CompletedapprovalRequesterComment
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CompletedapprovalRequesterComment', 'CompletedapprovalRequesterComment'] 
slug: /tools/sdk/powershell/accessrequestapprovals/models/completedapproval-requester-comment
tags: ['SDK', 'Software Development Kit', 'CompletedapprovalRequesterComment', 'CompletedapprovalRequesterComment']
---


# CompletedapprovalRequesterComment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | **String** | Comment content. | [optional] 
**Created** | **System.DateTime** | Date and time comment was created. | [optional] 
**Author** | [**CommentdtoAuthor**](commentdto-author) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$CompletedapprovalRequesterComment = Initialize-CompletedapprovalRequesterComment  -Comment This is a comment. `
 -Created 2017-07-11T18:45:37.098Z `
 -Author null
```

- Convert the resource to JSON
```powershell
$CompletedapprovalRequesterComment | ConvertTo-JSON
```


[[Back to top]](#) 

