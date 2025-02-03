---
id: completed-approval-reviewer-comment
title: CompletedApprovalReviewerComment
pagination_label: CompletedApprovalReviewerComment
sidebar_label: CompletedApprovalReviewerComment
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CompletedApprovalReviewerComment', 'CompletedApprovalReviewerComment'] 
slug: /tools/sdk/powershell/v3/models/completed-approval-reviewer-comment
tags: ['SDK', 'Software Development Kit', 'CompletedApprovalReviewerComment', 'CompletedApprovalReviewerComment']
---


# CompletedApprovalReviewerComment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | **String** | Comment content. | [optional] 
**Created** | **System.DateTime** | Date and time comment was created. | [optional] 
**Author** | [**CommentDtoAuthor**](comment-dto-author) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$CompletedApprovalReviewerComment = Initialize-PSSailpoint.V3CompletedApprovalReviewerComment  -Comment This is a comment. `
 -Created 2017-07-11T18:45:37.098Z `
 -Author null
```

- Convert the resource to JSON
```powershell
$CompletedApprovalReviewerComment | ConvertTo-JSON
```


[[Back to top]](#) 

