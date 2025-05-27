---
id: v2024-access-request-dynamic-approver-requested-items-inner
title: AccessRequestDynamicApproverRequestedItemsInner
pagination_label: AccessRequestDynamicApproverRequestedItemsInner
sidebar_label: AccessRequestDynamicApproverRequestedItemsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestDynamicApproverRequestedItemsInner', 'V2024AccessRequestDynamicApproverRequestedItemsInner'] 
slug: /tools/sdk/powershell/v2024/models/access-request-dynamic-approver-requested-items-inner
tags: ['SDK', 'Software Development Kit', 'AccessRequestDynamicApproverRequestedItemsInner', 'V2024AccessRequestDynamicApproverRequestedItemsInner']
---


# AccessRequestDynamicApproverRequestedItemsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the access item. | [required]
**Name** | **String** | Human friendly name of the access item. | [required]
**Description** | **String** | Extended description of the access item. | [optional] 
**Type** |  **Enum** [  "ACCESS_PROFILE",    "ROLE",    "ENTITLEMENT" ] | The type of access item being requested. | [required]
**Operation** |  **Enum** [  "Add",    "Remove" ] | Grant or revoke the access item | [required]
**Comment** | **String** | A comment from the requestor on why the access is needed. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequestDynamicApproverRequestedItemsInner = Initialize-V2024AccessRequestDynamicApproverRequestedItemsInner  -Id 2c91808b6ef1d43e016efba0ce470904 `
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

