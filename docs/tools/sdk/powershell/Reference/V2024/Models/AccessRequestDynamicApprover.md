---
id: v2024-access-request-dynamic-approver
title: AccessRequestDynamicApprover
pagination_label: AccessRequestDynamicApprover
sidebar_label: AccessRequestDynamicApprover
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestDynamicApprover', 'V2024AccessRequestDynamicApprover'] 
slug: /tools/sdk/powershell/v2024/models/access-request-dynamic-approver
tags: ['SDK', 'Software Development Kit', 'AccessRequestDynamicApprover', 'V2024AccessRequestDynamicApprover']
---


# AccessRequestDynamicApprover

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestId** | **String** | The unique ID of the access request object. Can be used with the [access request status endpoint](https://developer.sailpoint.com/idn/api/beta/list-access-request-status) to get the status of the request.  | [required]
**RequestedFor** | [**[]AccessItemRequestedForDto**](access-item-requested-for-dto) | Identities access was requested for. | [required]
**RequestedItems** | [**[]AccessRequestDynamicApproverRequestedItemsInner**](access-request-dynamic-approver-requested-items-inner) | The access items that are being requested. | [required]
**RequestedBy** | [**AccessItemRequesterDto**](access-item-requester-dto) |  | [required]

## Examples

- Prepare the resource
```powershell
$AccessRequestDynamicApprover = Initialize-V2024AccessRequestDynamicApprover  -AccessRequestId 4b4d982dddff4267ab12f0f1e72b5a6d `
 -RequestedFor null `
 -RequestedItems null `
 -RequestedBy null
```

- Convert the resource to JSON
```powershell
$AccessRequestDynamicApprover | ConvertTo-JSON
```


[[Back to top]](#) 

