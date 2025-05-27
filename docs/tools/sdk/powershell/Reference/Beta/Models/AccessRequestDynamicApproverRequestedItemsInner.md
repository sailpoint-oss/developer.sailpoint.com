---
id: beta-access-request-dynamic-approver-requested-items-inner
title: AccessRequestDynamicApproverRequestedItemsInner
pagination_label: AccessRequestDynamicApproverRequestedItemsInner
sidebar_label: AccessRequestDynamicApproverRequestedItemsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestDynamicApproverRequestedItemsInner', 'BetaAccessRequestDynamicApproverRequestedItemsInner'] 
slug: /tools/sdk/powershell/beta/models/access-request-dynamic-approver-requested-items-inner
tags: ['SDK', 'Software Development Kit', 'AccessRequestDynamicApproverRequestedItemsInner', 'BetaAccessRequestDynamicApproverRequestedItemsInner']
---


# AccessRequestDynamicApproverRequestedItemsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Access item's unique identifier. | [required]
**Name** | **String** | Access item's name. | [required]
**Description** | **String** | Access item's extended description. | [optional] 
**Type** |  **Enum** [  "ACCESS_PROFILE",    "ROLE",    "ENTITLEMENT" ] | Type of access item being requested. | [required]
**Operation** |  **Enum** [  "Add",    "Remove" ] | Action to perform on the requested access item. | [required]
**Comment** | **String** | Comment from the requester about why the access is necessary. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequestDynamicApproverRequestedItemsInner = Initialize-BetaAccessRequestDynamicApproverRequestedItemsInner  -Id 2c91808b6ef1d43e016efba0ce470904 `
 -Name Engineering Access `
 -Description Engineering Access `
 -Type ACCESS_PROFILE `
 -Operation Add `
 -Comment William needs this access for his day to day job activities.
```

- Convert the resource to JSON
```powershell
$AccessRequestDynamicApproverRequestedItemsInner | ConvertTo-JSON
```


[[Back to top]](#) 

