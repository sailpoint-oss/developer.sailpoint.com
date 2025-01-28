---
id: beta-access-request-post-approval-requested-items-status-inner-approval-info-inner-approver
title: AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInnerApprover
pagination_label: AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInnerApprover
sidebar_label: AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInnerApprover
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInnerApprover', 'BetaAccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInnerApprover'] 
slug: /tools/sdk/powershell/beta/models/access-request-post-approval-requested-items-status-inner-approval-info-inner-approver
tags: ['SDK', 'Software Development Kit', 'AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInnerApprover', 'BetaAccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInnerApprover']
---


# AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInnerApprover

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |   **Enum** [  "IDENTITY" ] | The type of object that is referenced | [required]
**Id** |  **String** | ID of identity who approved the access item request. | [required]
**Name** |  **String** | Human-readable display name of identity who approved the access item request. | [required]

## Examples

- Prepare the resource
```powershell
$AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInnerApprover = Initialize-PSSailpoint.BetaAccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInnerApprover  -Type IDENTITY `
 -Id 2c3780a46faadee4016fb4e018c20652 `
 -Name Allen Albertson
```

- Convert the resource to JSON
```powershell
$AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInnerApprover | ConvertTo-JSON
```


[[Back to top]](#) 

