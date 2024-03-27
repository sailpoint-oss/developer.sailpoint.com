---
id: access-request-post-approval-requested-items-status-inner
title: AccessRequestPostApprovalRequestedItemsStatusInner
pagination_label: AccessRequestPostApprovalRequestedItemsStatusInner
sidebar_label: AccessRequestPostApprovalRequestedItemsStatusInner
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'AccessRequestPostApprovalRequestedItemsStatusInner'] 
slug: /tools/sdk/powershell/beta/models/access-request-post-approval-requested-items-status-inner
tags: ['SDK', 'Software Development Kit', 'AccessRequestPostApprovalRequestedItemsStatusInner']
---


# AccessRequestPostApprovalRequestedItemsStatusInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | The unique ID of the access item being requested. | 
**Name** |  **String** | The human friendly name of the access item. | 
**Description** |  Pointer to **String** | Detailed description of the access item. | [optional] 
**Type** |   **Enum** [  "ACCESS_PROFILE",    "ROLE",    "ENTITLEMENT" ] | The type of access item. | 
**Operation** |   **Enum** [  "Add",    "Remove" ] | The action to perform on the access item. | 
**Comment** |  Pointer to **String** | A comment from the identity requesting the access. | [optional] 
**ClientMetadata** |  Pointer to [map[string] **Any**] | Additional customer defined metadata about the access item. | [optional] 
**ApprovalInfo** |  [**[]AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner**](access-request-post-approval-requested-items-status-inner-approval-info-inner) | A list of one or more approvers for the access request. | 

## Examples

- Prepare the resource
```powershell
$AccessRequestPostApprovalRequestedItemsStatusInner = Initialize-PSSailpointBetaAccessRequestPostApprovalRequestedItemsStatusInner  -Id 2c91808b6ef1d43e016efba0ce470904 `
 -Name Engineering Access `
 -Description Access to engineering database `
 -Type ACCESS_PROFILE `
 -Operation Add `
 -Comment William needs this access to do his job. `
 -ClientMetadata {applicationName&#x3D;My application} `
 -ApprovalInfo null
```

- Convert the resource to JSON
```powershell
$AccessRequestPostApprovalRequestedItemsStatusInner | ConvertTo-JSON
```


[[Back to top]](#) 

