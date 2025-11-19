---
id: v2024-approval-comment
title: ApprovalComment
pagination_label: ApprovalComment
sidebar_label: ApprovalComment
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalComment', 'V2024ApprovalComment'] 
slug: /tools/sdk/powershell/v2024/models/approval-comment
tags: ['SDK', 'Software Development Kit', 'ApprovalComment', 'V2024ApprovalComment']
---


# ApprovalComment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | **String** | Comment provided either by the approval requester or the approver. | [required]
**Timestamp** | **System.DateTime** | The time when this comment was provided. | [required]
**User** | **String** | Name of the user that provided this comment. | [required]
**Id** | **String** | Id of the user that provided this comment. | [required]
**ChangedToStatus** |  **Enum** [  "PENDING_APPROVAL",    "APPROVED",    "REJECTED" ] | Status transition of the draft. | [required]

## Examples

- Prepare the resource
```powershell
$ApprovalComment = Initialize-V2024ApprovalComment  -Comment Approval comment `
 -Timestamp 2021-05-11T22:23:16Z `
 -User user.name `
 -Id 549bf881-1ac4-4a64-9acf-6014e8a3a887 `
 -ChangedToStatus PENDING_APPROVAL
```

- Convert the resource to JSON
```powershell
$ApprovalComment | ConvertTo-JSON
```


[[Back to top]](#) 

