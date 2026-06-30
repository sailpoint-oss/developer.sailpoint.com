---
id: completedapproval-reviewer-comment
title: CompletedapprovalReviewerComment
pagination_label: CompletedapprovalReviewerComment
sidebar_label: CompletedapprovalReviewerComment
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CompletedapprovalReviewerComment', 'CompletedapprovalReviewerComment'] 
slug: /tools/sdk/powershell/accessrequestapprovals/models/completedapproval-reviewer-comment
tags: ['SDK', 'Software Development Kit', 'CompletedapprovalReviewerComment', 'CompletedapprovalReviewerComment']
---


# CompletedapprovalReviewerComment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | **String** | Comment content. | [optional] 
**Created** | **System.DateTime** | Date and time comment was created. | [optional] 
**Author** | [**CommentdtoAuthor**](commentdto-author) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$CompletedapprovalReviewerComment = Initialize-CompletedapprovalReviewerComment  -Comment This is a comment. `
 -Created 2017-07-11T18:45:37.098Z `
 -Author null
```

- Convert the resource to JSON
```powershell
$CompletedapprovalReviewerComment | ConvertTo-JSON
```


[[Back to top]](#) 

