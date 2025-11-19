---
id: beta-access-request-pre-approval
title: AccessRequestPreApproval
pagination_label: AccessRequestPreApproval
sidebar_label: AccessRequestPreApproval
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestPreApproval', 'BetaAccessRequestPreApproval'] 
slug: /tools/sdk/powershell/beta/models/access-request-pre-approval
tags: ['SDK', 'Software Development Kit', 'AccessRequestPreApproval', 'BetaAccessRequestPreApproval']
---


# AccessRequestPreApproval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestId** | **String** | Access request's unique ID. | [required]
**RequestedFor** | [**[]AccessItemRequestedForDto1**](access-item-requested-for-dto1) | Identities whom access was requested for. | [required]
**RequestedItems** | [**[]AccessRequestPreApprovalRequestedItemsInner**](access-request-pre-approval-requested-items-inner) | Details about each requested access item. | [required]
**RequestedBy** | [**AccessItemRequesterDto1**](access-item-requester-dto1) |  | [required]

## Examples

- Prepare the resource
```powershell
$AccessRequestPreApproval = Initialize-BetaAccessRequestPreApproval  -AccessRequestId 2c91808b6ef1d43e016efba0ce470904 `
 -RequestedFor null `
 -RequestedItems null `
 -RequestedBy null
```

- Convert the resource to JSON
```powershell
$AccessRequestPreApproval | ConvertTo-JSON
```


[[Back to top]](#) 

