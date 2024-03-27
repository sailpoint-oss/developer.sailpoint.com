---
id: access-request-pre-approval
title: AccessRequestPreApproval
pagination_label: AccessRequestPreApproval
sidebar_label: AccessRequestPreApproval
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccessRequestPreApproval'] 
slug: /tools/sdk/powershell/beta/models/access-request-pre-approval
tags: ['SDK', 'Software Development Kit', 'AccessRequestPreApproval']
---


# AccessRequestPreApproval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestId** |  **String** | The unique ID of the access request. | 
**RequestedFor** |  [**[]AccessItemRequestedForDto**](access-item-requested-for-dto) | Identities access was requested for. | 
**RequestedItems** |  [**[]AccessRequestPreApprovalRequestedItemsInner**](access-request-pre-approval-requested-items-inner) | Details of the access items being requested. | 
**RequestedBy** |  [**AccessItemRequesterDto**](access-item-requester-dto) |  | 

## Examples

- Prepare the resource
```powershell
$AccessRequestPreApproval = Initialize-PSSailpointBetaAccessRequestPreApproval  -AccessRequestId 2c91808b6ef1d43e016efba0ce470904 `
 -RequestedFor null `
 -RequestedItems null `
 -RequestedBy null
```

- Convert the resource to JSON
```powershell
$AccessRequestPreApproval | ConvertTo-JSON
```


[[Back to top]](#) 

