---
id: approval-comment
title: ApprovalComment
pagination_label: ApprovalComment
sidebar_label: ApprovalComment
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalComment', 'ApprovalComment'] 
slug: /tools/sdk/powershell/v3/models/approval-comment
tags: ['SDK', 'Software Development Kit', 'ApprovalComment', 'ApprovalComment']
---


# ApprovalComment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | **String** | The comment text | [optional] 
**Commenter** | **String** | The name of the commenter | [optional] 
**Date** | **System.DateTime** | A date-time in ISO-8601 format | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalComment = Initialize-ApprovalComment  -Comment This request was autoapproved by our automated ETS subscriber. `
 -Commenter Automated AR Approval `
 -Date 2018-06-25T20:22:28.104Z
```

- Convert the resource to JSON
```powershell
$ApprovalComment | ConvertTo-JSON
```


[[Back to top]](#) 

