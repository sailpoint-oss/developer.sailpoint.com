---
id: accessrequestpostapproval-requested-items-status-inner-approval-info-inner-approver
title: AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInnerApprover
pagination_label: AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInnerApprover
sidebar_label: AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInnerApprover
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInnerApprover', 'AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInnerApprover'] 
slug: /tools/sdk/powershell/triggers/models/accessrequestpostapproval-requested-items-status-inner-approval-info-inner-approver
tags: ['SDK', 'Software Development Kit', 'AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInnerApprover', 'AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInnerApprover']
---


# AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInnerApprover

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | The type of object that is referenced | [required]
**Id** | **String** | ID of identity who approved the access item request. | [required]
**Name** | **String** | Human-readable display name of identity who approved the access item request. | [required]

## Examples

- Prepare the resource
```powershell
$AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInnerApprover = Initialize-AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInnerApprover  -Type IDENTITY `
 -Id 2c3780a46faadee4016fb4e018c20652 `
 -Name Allen Albertson
```

- Convert the resource to JSON
```powershell
$AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInnerApprover | ConvertTo-JSON
```


[[Back to top]](#) 

