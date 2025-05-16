---
id: v2025-access-request-post-approval-requested-items-status-inner-approval-info-inner
title: AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner
pagination_label: AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner
sidebar_label: AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner', 'V2025AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner'] 
slug: /tools/sdk/powershell/v2025/models/access-request-post-approval-requested-items-status-inner-approval-info-inner
tags: ['SDK', 'Software Development Kit', 'AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner', 'V2025AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner']
---


# AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalComment** | **String** | A comment left by the approver. | [optional] 
**ApprovalDecision** |  **Enum** [  "APPROVED",    "DENIED" ] | The final decision of the approver. | [required]
**ApproverName** | **String** | The name of the approver | [required]
**Approver** | [**AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInnerApprover**](access-request-post-approval-requested-items-status-inner-approval-info-inner-approver) |  | [required]

## Examples

- Prepare the resource
```powershell
$AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner = Initialize-V2025AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner  -ApprovalComment This access looks good.  Approved. `
 -ApprovalDecision APPROVED `
 -ApproverName Stephen.Austin `
 -Approver null
```

- Convert the resource to JSON
```powershell
$AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner | ConvertTo-JSON
```


[[Back to top]](#) 

