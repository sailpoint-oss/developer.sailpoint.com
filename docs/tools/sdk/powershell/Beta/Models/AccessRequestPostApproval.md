---
id: access-request-post-approval
title: AccessRequestPostApproval
pagination_label: AccessRequestPostApproval
sidebar_label: AccessRequestPostApproval
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccessRequestPostApproval'] 
slug: /tools/sdk/powershell/beta/models/access-request-post-approval
tags: ['SDK', 'Software Development Kit', 'AccessRequestPostApproval']
---


# AccessRequestPostApproval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestId** |  **String** | The unique ID of the access request. | 
**RequestedFor** |  [**[]AccessItemRequestedForDto**](access-item-requested-for-dto) | Identities access was requested for. | 
**RequestedItemsStatus** |  [**[]AccessRequestPostApprovalRequestedItemsStatusInner**](access-request-post-approval-requested-items-status-inner) | Details on the outcome of each access item. | 
**RequestedBy** |  [**AccessItemRequesterDto**](access-item-requester-dto) |  | 

## Examples

- Prepare the resource
```powershell
$AccessRequestPostApproval = Initialize-BetaAccessRequestPostApproval  -AccessRequestId 2c91808b6ef1d43e016efba0ce470904 `
 -RequestedFor null `
 -RequestedItemsStatus null `
 -RequestedBy null
```

- Convert the resource to JSON
```powershell
$AccessRequestPostApproval | ConvertTo-JSON
```


[[Back to top]](#) 

