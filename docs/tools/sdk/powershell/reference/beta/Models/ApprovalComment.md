---
id: beta-approval-comment
title: ApprovalComment
pagination_label: ApprovalComment
sidebar_label: ApprovalComment
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalComment', 'BetaApprovalComment'] 
slug: /tools/sdk/powershell/beta/models/approval-comment
tags: ['SDK', 'Software Development Kit', 'ApprovalComment', 'BetaApprovalComment']
---


# ApprovalComment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Author** |  Pointer to [**ApprovalIdentity**](approval-identity) |  | [optional] 
**Comment** |  Pointer to **String** | Comment to be left on an approval | [optional] 
**CreatedDate** |  Pointer to **String** | Date the comment was created | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalComment = Initialize-PSSailpoint.BetaApprovalComment  -Author null `
 -Comment Looks good `
 -CreatedDate 2023-04-12T23:20:50.52Z
```

- Convert the resource to JSON
```powershell
$ApprovalComment | ConvertTo-JSON
```


[[Back to top]](#) 

