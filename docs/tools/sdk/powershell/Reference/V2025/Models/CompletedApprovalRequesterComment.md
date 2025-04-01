---
id: v2025-completed-approval-requester-comment
title: CompletedApprovalRequesterComment
pagination_label: CompletedApprovalRequesterComment
sidebar_label: CompletedApprovalRequesterComment
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CompletedApprovalRequesterComment', 'V2025CompletedApprovalRequesterComment'] 
slug: /tools/sdk/powershell/v2025/models/completed-approval-requester-comment
tags: ['SDK', 'Software Development Kit', 'CompletedApprovalRequesterComment', 'V2025CompletedApprovalRequesterComment']
---


# CompletedApprovalRequesterComment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | **String** | Comment content. | [optional] 
**Created** | **System.DateTime** | Date and time comment was created. | [optional] 
**Author** | [**CommentDtoAuthor**](comment-dto-author) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$CompletedApprovalRequesterComment = Initialize-PSSailpoint.V2025CompletedApprovalRequesterComment  -Comment This is a comment. `
 -Created 2017-07-11T18:45:37.098Z `
 -Author null
```

- Convert the resource to JSON
```powershell
$CompletedApprovalRequesterComment | ConvertTo-JSON
```


[[Back to top]](#) 

