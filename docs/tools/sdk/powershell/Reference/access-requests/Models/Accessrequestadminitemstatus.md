---
id: accessrequestadminitemstatus
title: Accessrequestadminitemstatus
pagination_label: Accessrequestadminitemstatus
sidebar_label: Accessrequestadminitemstatus
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessrequestadminitemstatus', 'Accessrequestadminitemstatus'] 
slug: /tools/sdk/powershell/accessrequests/models/accessrequestadminitemstatus
tags: ['SDK', 'Software Development Kit', 'Accessrequestadminitemstatus', 'Accessrequestadminitemstatus']
---


# Accessrequestadminitemstatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the access request. This is a new property as of 2025. Older access requests may not have an ID. | [optional] 
**Name** | **String** | Human-readable display name of the item being requested. | [optional] 
**Type** |  **Enum** [  "ACCESS_PROFILE",    "ROLE",    "ENTITLEMENT" ] | Type of requested object. | [optional] 
**CancelledRequestDetails** | [**RequesteditemstatusCancelledRequestDetails**](requesteditemstatus-cancelled-request-details) |  | [optional] 
**ErrorMessages** | [**[]Errormessagedto[]**](errormessagedto) | List of localized error messages, if any, encountered during the approval/provisioning process. | [optional] 
**State** | [**Requesteditemstatusrequeststate**](requesteditemstatusrequeststate) |  | [optional] 
**ApprovalDetails** | [**[]Approvalstatusdto**](approvalstatusdto) | Approval details for each item. | [optional] 
**ManualWorkItemDetails** | [**[]Manualworkitemdetails**](manualworkitemdetails) | Manual work items created for provisioning the item. | [optional] 
**AccountActivityItemId** | **String** | Id of associated account activity item. | [optional] 
**RequestType** | [**Accessrequesttype**](accessrequesttype) |  | [optional] 
**Modified** | **System.DateTime** | When the request was last modified. | [optional] 
**Created** | **System.DateTime** | When the request was created. | [optional] 
**Requester** | [**Accessitemrequester**](accessitemrequester) |  | [optional] 
**RequestedFor** | [**RequesteditemstatusRequestedFor**](requesteditemstatus-requested-for) |  | [optional] 
**RequesterComment** | [**RequesteditemstatusRequesterComment**](requesteditemstatus-requester-comment) |  | [optional] 
**SodViolationContext** | [**RequesteditemstatusSodViolationContext**](requesteditemstatus-sod-violation-context) |  | [optional] 
**ProvisioningDetails** | [**RequesteditemstatusProvisioningDetails**](requesteditemstatus-provisioning-details) |  | [optional] 
**PreApprovalTriggerDetails** | [**RequesteditemstatusPreApprovalTriggerDetails**](requesteditemstatus-pre-approval-trigger-details) |  | [optional] 
**AccessRequestPhases** | [**[]Accessrequestphases**](accessrequestphases) | A list of Phases that the Access Request has gone through in order, to help determine the status of the request. | [optional] 
**Description** | **String** | Description associated to the requested object. | [optional] 
**StartDate** | **System.DateTime** | When the role access is scheduled for provisioning. | [optional] 
**RemoveDate** | **System.DateTime** | When the role access is scheduled for removal. | [optional] 
**Cancelable** | **Boolean** | True if the request can be canceled. | [optional] [default to $false]
**ReauthorizationRequired** | **Boolean** | True if re-auth is required. | [optional] [default to $false]
**AccessRequestId** | **String** | This is the account activity id. | [optional] 
**ClientMetadata** | **map[string]String** | Arbitrary key-value pairs, if any were included in the corresponding access request | [optional] 

## Examples

- Prepare the resource
```powershell
$Accessrequestadminitemstatus = Initialize-Accessrequestadminitemstatus  -Id 2c9180926cbfbddd016cbfc7c3b10010 `
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
 -StartDate 2019-10-21T00:00Z `
 -RemoveDate 2019-10-23T00:00Z `
 -Cancelable true `
 -ReauthorizationRequired true `
 -AccessRequestId 2b838de9-db9b-abcf-e646-d4f274ad4238 `
 -ClientMetadata {"key1":"value1","key2":"value2"}
```

- Convert the resource to JSON
```powershell
$Accessrequestadminitemstatus | ConvertTo-JSON
```


[[Back to top]](#) 

