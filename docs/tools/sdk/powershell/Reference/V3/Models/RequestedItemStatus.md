---
id: requested-item-status
title: RequestedItemStatus
pagination_label: RequestedItemStatus
sidebar_label: RequestedItemStatus
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RequestedItemStatus', 'RequestedItemStatus'] 
slug: /tools/sdk/powershell/v3/models/requested-item-status
tags: ['SDK', 'Software Development Kit', 'RequestedItemStatus', 'RequestedItemStatus']
---


# RequestedItemStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The ID of the access request. | [optional] 
**Name** | **String** | Human-readable display name of the item being requested. | [optional] 
**Type** |  **Enum** [  "ACCESS_PROFILE",    "ROLE",    "ENTITLEMENT" ] | Type of requested object. | [optional] 
**CancelledRequestDetails** | [**RequestedItemStatusCancelledRequestDetails**](requested-item-status-cancelled-request-details) |  | [optional] 
**ErrorMessages** | [**[]ErrorMessageDto[]**](error-message-dto) | List of list of localized error messages, if any, encountered during the approval/provisioning process. | [optional] 
**State** | [**RequestedItemStatusRequestState**](requested-item-status-request-state) |  | [optional] 
**ApprovalDetails** | [**[]ApprovalStatusDto**](approval-status-dto) | Approval details for each item. | [optional] 
**ApprovalIds** | **[]String** | List of approval IDs associated with the request. | [optional] 
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
**AccessRequestId** | **String** | This is the account activity id. | [optional] 
**ClientMetadata** | **map[string]String** | Arbitrary key-value pairs, if any were included in the corresponding access request | [optional] 
**RequestedAccounts** | [**[]RequestedAccountRef**](requested-account-ref) | The accounts selected by the user for the access to be provisioned on, in case they have multiple accounts on one or more sources. | [optional] 

## Examples

- Prepare the resource
```powershell
$RequestedItemStatus = Initialize-RequestedItemStatus  -Id 2c9180926cbfbddd016cbfc7c3b10010 `
 -Name AccessProfile1 `
 -Type ACCESS_PROFILE `
 -CancelledRequestDetails null `
 -ErrorMessages null `
 -State null `
 -ApprovalDetails null `
 -ApprovalIds [85f0cf482dd44327b593624c07906c21, fa57e1bfa36f41ee85e33ee59fcbeac5] `
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
 -AccessRequestId 2b838de9-db9b-abcf-e646-d4f274ad4238 `
 -ClientMetadata {key1=value1, key2=value2} `
 -RequestedAccounts null
```

- Convert the resource to JSON
```powershell
$RequestedItemStatus | ConvertTo-JSON
```


[[Back to top]](#) 

