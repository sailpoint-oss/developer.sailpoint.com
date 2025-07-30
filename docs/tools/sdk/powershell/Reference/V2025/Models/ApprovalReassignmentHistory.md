---
id: v2025-approval-reassignment-history
title: ApprovalReassignmentHistory
pagination_label: ApprovalReassignmentHistory
sidebar_label: ApprovalReassignmentHistory
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApprovalReassignmentHistory', 'V2025ApprovalReassignmentHistory'] 
slug: /tools/sdk/powershell/v2025/models/approval-reassignment-history
tags: ['SDK', 'Software Development Kit', 'ApprovalReassignmentHistory', 'V2025ApprovalReassignmentHistory']
---


# ApprovalReassignmentHistory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommentID** | **String** | Unique identifier for the comment associated with the reassignment. | [optional] 
**ReassignedFrom** | [**ApprovalIdentity**](approval-identity) |  | [optional] 
**ReassignedTo** | [**ApprovalIdentity**](approval-identity) |  | [optional] 
**Reassigner** | [**ApprovalIdentity**](approval-identity) |  | [optional] 
**ReassignmentDate** | **System.DateTime** | Date and time when the reassignment occurred. | [optional] 
**ReassignmentType** |  **Enum** [  "ESCALATION",    "MANUAL_REASSIGNMENT",    "AUTO_REASSIGNMENT" ] | Type of reassignment, such as escalation or manual reassignment. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalReassignmentHistory = Initialize-V2025ApprovalReassignmentHistory  -CommentID f47ac10b-58cc-4372-a567-0e02b2c3d479 `
 -ReassignedFrom null `
 -ReassignedTo null `
 -Reassigner null `
 -ReassignmentDate 2023-10-01T12:34:56.789Z `
 -ReassignmentType ESCALATION
```

- Convert the resource to JSON
```powershell
$ApprovalReassignmentHistory | ConvertTo-JSON
```


[[Back to top]](#) 

