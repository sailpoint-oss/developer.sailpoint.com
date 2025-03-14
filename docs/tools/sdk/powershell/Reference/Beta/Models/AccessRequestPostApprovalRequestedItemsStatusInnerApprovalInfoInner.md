---
id: beta-access-request-post-approval-requested-items-status-inner-approval-info-inner
title: AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner
pagination_label: AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner
sidebar_label: AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner', 'BetaAccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner'] 
slug: /tools/sdk/powershell/beta/models/access-request-post-approval-requested-items-status-inner-approval-info-inner
tags: ['SDK', 'Software Development Kit', 'AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner', 'BetaAccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner']
---


# AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalComment** | **String** | Approver's comment. | [optional] 
**ApprovalDecision** |  **Enum** [  "APPROVED",    "DENIED" ] | Approver's final decision. | [required]
**ApproverName** | **String** | Approver's name. | [required]
**Approver** | [**AccessItemApproverDto**](access-item-approver-dto) | Approver's identity. | [required]

## Examples

- Prepare the resource
```powershell
$AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner = Initialize-PSSailpoint.BetaAccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner  -ApprovalComment This access looks good. Approved. `
 -ApprovalDecision APPROVED `
 -ApproverName Stephen.Austin `
 -Approver null
```

- Convert the resource to JSON
```powershell
$AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner | ConvertTo-JSON
```


[[Back to top]](#) 

