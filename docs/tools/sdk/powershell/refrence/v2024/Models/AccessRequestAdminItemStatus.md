---
id: access-request-admin-item-status
title: AccessRequestAdminItemStatus
pagination_label: AccessRequestAdminItemStatus
sidebar_label: AccessRequestAdminItemStatus
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestAdminItemStatus'] 
slug: /tools/sdk/powershell/v2024/models/access-request-admin-item-status
tags: ['SDK', 'Software Development Kit', 'AccessRequestAdminItemStatus']
---


# AccessRequestAdminItemStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  Pointer to **String** | Human-readable display name of the item being requested. | [optional] 
**Type** |  Pointer to  **Enum** [  "ACCESS_PROFILE",    "ROLE",    "ENTITLEMENT" ] | Type of requested object. | [optional] 
**CancelledRequestDetails** |  Pointer to [**AccessRequestAdminItemStatusCancelledRequestDetails**](access-request-admin-item-status-cancelled-request-details) |  | [optional] 
**ErrorMessages** |  Pointer to [**[]ErrorMessageDto1[]**](error-message-dto1) | List of localized error messages, if any, encountered during the approval/provisioning process. | [optional] 
**State** |  Pointer to [**RequestedItemStatusRequestState**](requested-item-status-request-state) |  | [optional] 
**ApprovalDetails** |  Pointer to [**[]ApprovalStatusDto1**](approval-status-dto1) | Approval details for each item. | [optional] 
**ManualWorkItemDetails** |  Pointer to [**[]ManualWorkItemDetails1**](manual-work-item-details1) | Manual work items created for provisioning the item. | [optional] 
**AccountActivityItemId** |  Pointer to **String** | Id of associated account activity item. | [optional] 
**RequestType** |  Pointer to [**AccessRequestType**](access-request-type) |  | [optional] 
**Modified** |  Pointer to **System.DateTime** | When the request was last modified. | [optional] 
**Created** |  Pointer to **System.DateTime** | When the request was created. | [optional] 
**Requester** |  Pointer to [**AccessItemRequester**](access-item-requester) |  | [optional] 
**RequestedFor** |  Pointer to [**RequestedItemStatusRequestedFor**](requested-item-status-requested-for) |  | [optional] 
**RequesterComment** |  Pointer to [**RequestedItemStatusRequesterComment**](requested-item-status-requester-comment) |  | [optional] 
**SodViolationContext** |  Pointer to [**AccessRequestAdminItemStatusSodViolationContext**](access-request-admin-item-status-sod-violation-context) |  | [optional] 
**ProvisioningDetails** |  Pointer to [**RequestedItemStatusProvisioningDetails**](requested-item-status-provisioning-details) |  | [optional] 
**PreApprovalTriggerDetails** |  Pointer to [**RequestedItemStatusPreApprovalTriggerDetails**](requested-item-status-pre-approval-trigger-details) |  | [optional] 
**AccessRequestPhases** |  Pointer to [**[]AccessRequestPhases**](access-request-phases) | A list of Phases that the Access Request has gone through in order, to help determine the status of the request. | [optional] 
**Description** |  Pointer to **String** | Description associated to the requested object. | [optional] 
**RemoveDate** |  Pointer to **System.DateTime** | When the role access is scheduled for removal. | [optional] 
**Cancelable** |  Pointer to **Boolean** | True if the request can be canceled. | [optional] [default to $false]
**ReauthorizationRequired** |  Pointer to **Boolean** | True if re-auth is required. | [optional] [default to $false]
**AccessRequestId** |  Pointer to **String** | This is the account activity id. | [optional] 
**ClientMetadata** |  Pointer to **map[string]String** | Arbitrary key-value pairs, if any were included in the corresponding access request | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequestAdminItemStatus = Initialize-PSSailpoint.V2024AccessRequestAdminItemStatus  -Name AccessProfile1 `
 -Type ACCESS_PROFILE `
 -CancelledRequestDetails null `
 -ErrorMessages null `
 -State null `
 -ApprovalDetails null `
 -ManualWorkItemDetails null `
 -AccountActivityItemId 2c9180926cbfbddd016cbfc7c3b10010 `
 -RequestType null `
 -Modified 2019-08-23T18:52:59.162Z `
 -Created 2019-08-23T18:40:35.772Z `
 -Requester null `
 -RequestedFor null `
 -RequesterComment null `
 -SodViolationContext null `
 -ProvisioningDetails null `
 -PreApprovalTriggerDetails null `
 -AccessRequestPhases null `
 -Description This is the Engineering role that engineers are granted. `
 -RemoveDate 2019-10-23T00:00Z `
 -Cancelable true `
 -ReauthorizationRequired true `
 -AccessRequestId 2b838de9-db9b-abcf-e646-d4f274ad4238 `
 -ClientMetadata {key1&#x3D;value1, key2&#x3D;value2}
```

- Convert the resource to JSON
```powershell
$AccessRequestAdminItemStatus | ConvertTo-JSON
```


[[Back to top]](#) 

