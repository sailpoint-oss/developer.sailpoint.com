---
id: beta-access-request-pre-approval-requested-items-inner
title: AccessRequestPreApprovalRequestedItemsInner
pagination_label: AccessRequestPreApprovalRequestedItemsInner
sidebar_label: AccessRequestPreApprovalRequestedItemsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestPreApprovalRequestedItemsInner', 'BetaAccessRequestPreApprovalRequestedItemsInner'] 
slug: /tools/sdk/powershell/beta/models/access-request-pre-approval-requested-items-inner
tags: ['SDK', 'Software Development Kit', 'AccessRequestPreApprovalRequestedItemsInner', 'BetaAccessRequestPreApprovalRequestedItemsInner']
---


# AccessRequestPreApprovalRequestedItemsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Access item's unique ID. | [required]
**Name** | **String** | Access item's name. | [required]
**Description** | **String** | Access item's description. | [optional] 
**Type** |  **Enum** [  "ACCESS_PROFILE",    "ROLE",    "ENTITLEMENT" ] | Access item's type. | [required]
**Operation** |  **Enum** [  "Add",    "Remove" ] | Action to perform on the access item. | [required]
**Comment** | **String** | Comment from the identity requesting access. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequestPreApprovalRequestedItemsInner = Initialize-BetaAccessRequestPreApprovalRequestedItemsInner  -Id 2c91808b6ef1d43e016efba0ce470904 `
 -Name Engineering Access `
 -Description Access to engineering database `
 -Type ACCESS_PROFILE `
 -Operation Add `
 -Comment William needs this access to do his job.
```

- Convert the resource to JSON
```powershell
$AccessRequestPreApprovalRequestedItemsInner | ConvertTo-JSON
```


[[Back to top]](#) 

