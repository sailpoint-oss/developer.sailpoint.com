---
id: v2024-pending-approval
title: PendingApproval
pagination_label: PendingApproval
sidebar_label: PendingApproval
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PendingApproval', 'V2024PendingApproval'] 
slug: /tools/sdk/powershell/v2024/models/pending-approval
tags: ['SDK', 'Software Development Kit', 'PendingApproval', 'V2024PendingApproval']
---


# PendingApproval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The approval id. | [optional] 
**Name** |  Pointer to **String** | The name of the approval. | [optional] 
**Created** |  Pointer to **System.DateTime** | When the approval was created. | [optional] 
**Modified** |  Pointer to **System.DateTime** | When the approval was modified last time. | [optional] 
**RequestCreated** |  Pointer to **System.DateTime** | When the access-request was created. | [optional] 
**RequestType** |  Pointer to [**AccessRequestType**](access-request-type) |  | [optional] 
**Requester** |  Pointer to [**AccessItemRequester**](access-item-requester) |  | [optional] 
**RequestedFor** |  Pointer to [**[]AccessItemRequestedFor**](access-item-requested-for) | Identities access was requested for. | [optional] 
**Owner** |  Pointer to [**PendingApprovalOwner**](pending-approval-owner) |  | [optional] 
**RequestedObject** |  Pointer to [**RequestableObjectReference**](requestable-object-reference) |  | [optional] 
**RequesterComment** |  Pointer to [**CommentDto**](comment-dto) |  | [optional] 
**PreviousReviewersComments** |  Pointer to [**[]CommentDto**](comment-dto) | The history of the previous reviewers comments. | [optional] 
**ForwardHistory** |  Pointer to [**[]ApprovalForwardHistory**](approval-forward-history) | The history of approval forward action. | [optional] 
**CommentRequiredWhenRejected** |  Pointer to **Boolean** | When true the rejector has to provide comments when rejecting | [optional] [default to $false]
**ActionInProcess** |  Pointer to [**PendingApprovalAction**](pending-approval-action) |  | [optional] 
**RemoveDate** |  Pointer to **System.DateTime** | The date the role or access profile or entitlement is no longer assigned to the specified identity. | [optional] 
**RemoveDateUpdateRequested** |  Pointer to **Boolean** | If true, then the request is to change the remove date or sunset date. | [optional] [default to $false]
**CurrentRemoveDate** |  Pointer to **System.DateTime** | The remove date or sunset date that was assigned at the time of the request. | [optional] 
**SodViolationContext** |  Pointer to [**SodViolationContextCheckCompleted**](sod-violation-context-check-completed) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$PendingApproval = Initialize-PSSailpoint.V2024PendingApproval  -Id id12345 `
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
 -SodViolationContext null
```

- Convert the resource to JSON
```powershell
$PendingApproval | ConvertTo-JSON
```


[[Back to top]](#) 

