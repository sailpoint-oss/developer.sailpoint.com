---
id: v2024-access-request-post-approval-requested-items-status-inner
title: AccessRequestPostApprovalRequestedItemsStatusInner
pagination_label: AccessRequestPostApprovalRequestedItemsStatusInner
sidebar_label: AccessRequestPostApprovalRequestedItemsStatusInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestPostApprovalRequestedItemsStatusInner', 'V2024AccessRequestPostApprovalRequestedItemsStatusInner'] 
slug: /tools/sdk/powershell/v2024/models/access-request-post-approval-requested-items-status-inner
tags: ['SDK', 'Software Development Kit', 'AccessRequestPostApprovalRequestedItemsStatusInner', 'V2024AccessRequestPostApprovalRequestedItemsStatusInner']
---


# AccessRequestPostApprovalRequestedItemsStatusInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the access item being requested. | [required]
**Name** | **String** | The human friendly name of the access item. | [required]
**Description** | **String** | Detailed description of the access item. | [optional] 
**Type** |  **Enum** [  "ACCESS_PROFILE",    "ROLE",    "ENTITLEMENT" ] | The type of access item. | [required]
**Operation** |  **Enum** [  "Add",    "Remove" ] | The action to perform on the access item. | [required]
**Comment** | **String** | A comment from the identity requesting the access. | [optional] 
**ClientMetadata** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Additional customer defined metadata about the access item. | [optional] 
**ApprovalInfo** | [**[]AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner**](access-request-post-approval-requested-items-status-inner-approval-info-inner) | A list of one or more approvers for the access request. | [required]

## Examples

- Prepare the resource
```powershell
$AccessRequestPostApprovalRequestedItemsStatusInner = Initialize-PSSailpoint.V2024AccessRequestPostApprovalRequestedItemsStatusInner  -Id 2c91808b6ef1d43e016efba0ce470904 `
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

