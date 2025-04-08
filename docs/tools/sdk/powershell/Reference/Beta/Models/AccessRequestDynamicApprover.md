---
id: beta-access-request-dynamic-approver
title: AccessRequestDynamicApprover
pagination_label: AccessRequestDynamicApprover
sidebar_label: AccessRequestDynamicApprover
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestDynamicApprover', 'BetaAccessRequestDynamicApprover'] 
slug: /tools/sdk/powershell/beta/models/access-request-dynamic-approver
tags: ['SDK', 'Software Development Kit', 'AccessRequestDynamicApprover', 'BetaAccessRequestDynamicApprover']
---


# AccessRequestDynamicApprover

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestId** | **String** | Unique ID of the access request object. You can use this ID with the [Access Request Status endpoint](https://developer.sailpoint.com/idn/api/beta/list-access-request-status) to get the request's status. | [required]
**RequestedFor** | [**[]AccessItemRequestedForDto1**](access-item-requested-for-dto1) | Identities access was requested for. | [required]
**RequestedItems** | [**[]AccessRequestDynamicApproverRequestedItemsInner**](access-request-dynamic-approver-requested-items-inner) | Requested access items. | [required]
**RequestedBy** | [**AccessItemRequesterDto1**](access-item-requester-dto1) |  | [required]

## Examples

- Prepare the resource
```powershell
$AccessRequestDynamicApprover = Initialize-PSSailpoint.BetaAccessRequestDynamicApprover  -AccessRequestId 4b4d982dddff4267ab12f0f1e72b5a6d `
 -RequestedFor null `
 -RequestedItems null `
 -RequestedBy null
```

- Convert the resource to JSON
```powershell
$AccessRequestDynamicApprover | ConvertTo-JSON
```


[[Back to top]](#) 

