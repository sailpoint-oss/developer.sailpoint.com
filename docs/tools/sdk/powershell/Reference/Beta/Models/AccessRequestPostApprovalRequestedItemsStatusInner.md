---
id: beta-access-request-post-approval-requested-items-status-inner
title: AccessRequestPostApprovalRequestedItemsStatusInner
pagination_label: AccessRequestPostApprovalRequestedItemsStatusInner
sidebar_label: AccessRequestPostApprovalRequestedItemsStatusInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestPostApprovalRequestedItemsStatusInner', 'BetaAccessRequestPostApprovalRequestedItemsStatusInner'] 
slug: /tools/sdk/powershell/beta/models/access-request-post-approval-requested-items-status-inner
tags: ['SDK', 'Software Development Kit', 'AccessRequestPostApprovalRequestedItemsStatusInner', 'BetaAccessRequestPostApprovalRequestedItemsStatusInner']
---


# AccessRequestPostApprovalRequestedItemsStatusInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Access item's unique ID. | [required]
**Name** | **String** | Access item's name. | [required]
**Description** | **String** | Access item's description. | [optional] 
**Type** |  **Enum** [  "ACCESS_PROFILE",    "ROLE",    "ENTITLEMENT" ] | Access item's type. | [required]
**Operation** |  **Enum** [  "Add",    "Remove" ] | Action to perform on the requested access item. | [required]
**Comment** | **String** | Comment from the identity requesting access. | [optional] 
**ClientMetadata** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Additional customer defined metadata about the access item. | [optional] 
**ApprovalInfo** | [**[]AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner**](access-request-post-approval-requested-items-status-inner-approval-info-inner) | List of approvers for the access request. | [required]

## Examples

- Prepare the resource
```powershell
$AccessRequestPostApprovalRequestedItemsStatusInner = Initialize-BetaAccessRequestPostApprovalRequestedItemsStatusInner  -Id 2c91808b6ef1d43e016efba0ce470904 `
 -Name Engineering Access `
 -Description Access to engineering database `
 -Type ACCESS_PROFILE `
 -Operation Add `
 -Comment William needs this access to do his job. `
 -ClientMetadata {applicationName=My application} `
 -ApprovalInfo null
```

- Convert the resource to JSON
```powershell
$AccessRequestPostApprovalRequestedItemsStatusInner | ConvertTo-JSON
```


[[Back to top]](#) 

