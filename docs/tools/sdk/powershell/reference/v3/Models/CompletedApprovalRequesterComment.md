---
id: completed-approval-requester-comment
title: CompletedApprovalRequesterComment
pagination_label: CompletedApprovalRequesterComment
sidebar_label: CompletedApprovalRequesterComment
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CompletedApprovalRequesterComment'] 
slug: /tools/sdk/powershell/v3/models/completed-approval-requester-comment
tags: ['SDK', 'Software Development Kit', 'CompletedApprovalRequesterComment']
---


# CompletedApprovalRequesterComment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** |  Pointer to **String** | Comment content. | [optional] 
**Created** |  Pointer to **System.DateTime** | Date and time comment was created. | [optional] 
**Author** |  Pointer to [**CommentDtoAuthor**](comment-dto-author) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$CompletedApprovalRequesterComment = Initialize-PSSailpoint.V3CompletedApprovalRequesterComment  -Comment This is a comment. `
 -Created 2017-07-11T18:45:37.098Z `
 -Author null
```

- Convert the resource to JSON
```powershell
$CompletedApprovalRequesterComment | ConvertTo-JSON
```


[[Back to top]](#) 

