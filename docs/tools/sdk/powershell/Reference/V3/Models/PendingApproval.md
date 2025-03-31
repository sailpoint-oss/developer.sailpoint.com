---
id: pending-approval
title: PendingApproval
pagination_label: PendingApproval
sidebar_label: PendingApproval
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PendingApproval', 'PendingApproval'] 
slug: /tools/sdk/powershell/v3/models/pending-approval
tags: ['SDK', 'Software Development Kit', 'PendingApproval', 'PendingApproval']
---


# PendingApproval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The approval id. | [optional] 
**AccessRequestId** | **String** | This is the access request id. | [optional] 
**Name** | **String** | The name of the approval. | [optional] 
**Created** | **System.DateTime** | When the approval was created. | [optional] 
**Modified** | **System.DateTime** | When the approval was modified last time. | [optional] 
**RequestCreated** | **System.DateTime** | When the access-request was created. | [optional] 
**RequestType** | [**AccessRequestType**](access-request-type) |  | [optional] 
**Requester** | [**AccessItemRequester**](access-item-requester) |  | [optional] 
**RequestedFor** | [**AccessItemRequestedFor**](access-item-requested-for) |  | [optional] 
**Owner** | [**PendingApprovalOwner**](pending-approval-owner) |  | [optional] 
**RequestedObject** | [**RequestableObjectReference**](requestable-object-reference) |  | [optional] 
**RequesterComment** | [**CommentDto**](comment-dto) |  | [optional] 
**PreviousReviewersComments** | [**[]CommentDto**](comment-dto) | The history of the previous reviewers comments. | [optional] 
**ForwardHistory** | [**[]ApprovalForwardHistory**](approval-forward-history) | The history of approval forward action. | [optional] 
**CommentRequiredWhenRejected** | **Boolean** | When true the rejector has to provide comments when rejecting | [optional] [default to $false]
**ActionInProcess** | [**PendingApprovalAction**](pending-approval-action) |  | [optional] 
**RemoveDate** | **System.DateTime** | The date the role or access profile or entitlement is no longer assigned to the specified identity. | [optional] 
**RemoveDateUpdateRequested** | **Boolean** | If true, then the request is to change the remove date or sunset date. | [optional] [default to $false]
**CurrentRemoveDate** | **System.DateTime** | The remove date or sunset date that was assigned at the time of the request. | [optional] 
**SodViolationContext** | [**SodViolationContextCheckCompleted**](sod-violation-context-check-completed) |  | [optional] 
**ClientMetadata** | **map[string]String** | Arbitrary key-value pairs, if any were included in the corresponding access request item | [optional] 
**RequestedAccounts** | [**[]RequestedAccountRef**](requested-account-ref) | The accounts selected by the user for the access to be provisioned on, in case they have multiple accounts on one or more sources. | [optional] 

## Examples

- Prepare the resource
```powershell
$PendingApproval = Initialize-PSSailpoint.V3PendingApproval  -Id id12345 `
 -AccessRequestId 2b838de9db9babcfe646d4f274ad4238 `
 -Name aName `
 -Created 2017-07-11T18:45:37.098Z `
 -Modified 2018-07-25T20:22:28.104Z `
 -RequestCreated 2017-07-11T18:45:35.098Z `
 -RequestType null `
 -Requester null `
 -RequestedFor null `
 -Owner null `
 -RequestedObject null `
 -RequesterComment null `
 -PreviousReviewersComments null `
 -ForwardHistory null `
 -CommentRequiredWhenRejected true `
 -ActionInProcess null `
 -RemoveDate 2020-07-11T00:00Z `
 -RemoveDateUpdateRequested true `
 -CurrentRemoveDate 2020-07-11T00:00Z `
 -SodViolationContext null `
 -ClientMetadata {customKey1=custom value 1, customKey2=custom value 2} `
 -RequestedAccounts null
```

- Convert the resource to JSON
```powershell
$PendingApproval | ConvertTo-JSON
```


[[Back to top]](#) 

