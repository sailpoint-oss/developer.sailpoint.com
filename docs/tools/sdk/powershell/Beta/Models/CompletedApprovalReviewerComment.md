---
id: completed-approval-reviewer-comment
title: CompletedApprovalReviewerComment
pagination_label: CompletedApprovalReviewerComment
sidebar_label: CompletedApprovalReviewerComment
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'CompletedApprovalReviewerComment'] 
slug: /tools/sdk/powershell/beta/models/completed-approval-reviewer-comment
tags: ['SDK', 'Software Development Kit', 'CompletedApprovalReviewerComment']
---


# CompletedApprovalReviewerComment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** |  Pointer to **String** | Comment content. | [optional] 
**Author** |  Pointer to [**CommentDtoAuthor**](comment-dto-author) |  | [optional] 
**Created** |  Pointer to **System.DateTime** | Date and time comment was created. | [optional] 

## Examples

- Prepare the resource
```powershell
$CompletedApprovalReviewerComment = Initialize-BetaCompletedApprovalReviewerComment  -Comment This is a comment. `
 -Author null `
 -Created 2017-07-11T18:45:37.098Z
```

- Convert the resource to JSON
```powershell
$CompletedApprovalReviewerComment | ConvertTo-JSON
```


[[Back to top]](#) 

