---
id: accessrequestpostapproval-requested-items-status-inner-approval-info-inner
title: AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner
pagination_label: AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner
sidebar_label: AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner', 'AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner'] 
slug: /tools/sdk/powershell/triggers/models/accessrequestpostapproval-requested-items-status-inner-approval-info-inner
tags: ['SDK', 'Software Development Kit', 'AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner', 'AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner']
---


# AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalComment** | **String** | A comment left by the approver. | [optional] 
**ApprovalDecision** |  **Enum** [  "APPROVED",    "DENIED" ] | The final decision of the approver. | [required]
**ApproverName** | **String** | The name of the approver | [required]
**Approver** | [**AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInnerApprover**](accessrequestpostapproval-requested-items-status-inner-approval-info-inner-approver) |  | [required]

## Examples

- Prepare the resource
```powershell
$AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner = Initialize-AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner  -ApprovalComment This access looks good.  Approved. `
 -ApprovalDecision APPROVED `
 -ApproverName Stephen.Austin `
 -Approver null
```

- Convert the resource to JSON
```powershell
$AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner | ConvertTo-JSON
```


[[Back to top]](#) 

