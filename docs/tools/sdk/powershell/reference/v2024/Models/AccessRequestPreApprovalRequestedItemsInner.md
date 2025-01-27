---
id: v2024-access-request-pre-approval-requested-items-inner
title: AccessRequestPreApprovalRequestedItemsInner
pagination_label: AccessRequestPreApprovalRequestedItemsInner
sidebar_label: AccessRequestPreApprovalRequestedItemsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestPreApprovalRequestedItemsInner'] 
slug: /tools/sdk/powershell/v2024/models/access-request-pre-approval-requested-items-inner
tags: ['SDK', 'Software Development Kit', 'AccessRequestPreApprovalRequestedItemsInner']
---


# AccessRequestPreApprovalRequestedItemsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | The unique ID of the access item being requested. | [required]
**Name** |  **String** | The human friendly name of the access item. | [required]
**Description** |  Pointer to **String** | Detailed description of the access item. | [optional] 
**Type** |   **Enum** [  "ACCESS_PROFILE",    "ROLE",    "ENTITLEMENT" ] | The type of access item. | [required]
**Operation** |   **Enum** [  "Add",    "Remove" ] | The action to perform on the access item. | [required]
**Comment** |  Pointer to **String** | A comment from the identity requesting the access. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequestPreApprovalRequestedItemsInner = Initialize-PSSailpoint.V2024AccessRequestPreApprovalRequestedItemsInner  -Id 2c91808b6ef1d43e016efba0ce470904 `
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

