---
id: v2024-access-request-admin-item-status
title: AccessRequestAdminItemStatus
pagination_label: AccessRequestAdminItemStatus
sidebar_label: AccessRequestAdminItemStatus
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestAdminItemStatus', 'V2024AccessRequestAdminItemStatus'] 
slug: /tools/sdk/powershell/v2024/models/access-request-admin-item-status
tags: ['SDK', 'Software Development Kit', 'AccessRequestAdminItemStatus', 'V2024AccessRequestAdminItemStatus']
---


# AccessRequestAdminItemStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the access request. This is a new property as of 2025. Older access requests may not have an ID. | [optional] 
**Name** | **String** | Human-readable display name of the item being requested. | [optional] 
**Type** |  **Enum** [  "ACCESS_PROFILE",    "ROLE",    "ENTITLEMENT" ] | Type of requested object. | [optional] 
**CancelledRequestDetails** | [**RequestedItemStatusCancelledRequestDetails**](requested-item-status-cancelled-request-details) |  | [optional] 
**ErrorMessages** | [**[]ErrorMessageDto[]**](error-message-dto) | List of localized error messages, if any, encountered during the approval/provisioning process. | [optional] 
**State** | [**RequestedItemStatusRequestState**](requested-item-status-request-state) |  | [optional] 
**ApprovalDetails** | [**[]ApprovalStatusDto**](approval-status-dto) | Approval details for each item. | [optional] 
**ManualWorkItemDetails** | [**[]ManualWorkItemDetails**](manual-work-item-details) | Manual work items created for provisioning the item. | [optional] 
**AccountActivityItemId** | **String** | Id of associated account activity item. | [optional] 
**RequestType** | [**AccessRequestType**](access-request-type) |  | [optional] 
**Modified** | **System.DateTime** | When the request was last modified. | [optional] 
**Created** | **System.DateTime** | When the request was created. | [optional] 
**Requester** | [**AccessItemRequester**](access-item-requester) |  | [optional] 
**RequestedFor** | [**RequestedItemStatusRequestedFor**](requested-item-status-requested-for) |  | [optional] 
**RequesterComment** | [**RequestedItemStatusRequesterComment**](requested-item-status-requester-comment) |  | [optional] 
**SodViolationContext** | [**RequestedItemStatusSodViolationContext**](requested-item-status-sod-violation-context) |  | [optional] 
**ProvisioningDetails** | [**RequestedItemStatusProvisioningDetails**](requested-item-status-provisioning-details) |  | [optional] 
**PreApprovalTriggerDetails** | [**RequestedItemStatusPreApprovalTriggerDetails**](requested-item-status-pre-approval-trigger-details) |  | [optional] 
**AccessRequestPhases** | [**[]AccessRequestPhases**](access-request-phases) | A list of Phases that the Access Request has gone through in order, to help determine the status of the request. | [optional] 
**Description** | **String** | Description associated to the requested object. | [optional] 
**RemoveDate** | **System.DateTime** | When the role access is scheduled for removal. | [optional] 
**Cancelable** | **Boolean** | True if the request can be canceled. | [optional] [default to $false]
**ReauthorizationRequired** | **Boolean** | True if re-auth is required. | [optional] [default to $false]
**AccessRequestId** | **String** | This is the account activity id. | [optional] 
**ClientMetadata** | **map[string]String** | Arbitrary key-value pairs, if any were included in the corresponding access request | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequestAdminItemStatus = Initialize-V2024AccessRequestAdminItemStatus  -Id 2c9180926cbfbddd016cbfc7c3b10010 `
 -Name AccessProfile1 `
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
 -ClientMetadata {key1=value1, key2=value2}
```

- Convert the resource to JSON
```powershell
$AccessRequestAdminItemStatus | ConvertTo-JSON
```


[[Back to top]](#) 

