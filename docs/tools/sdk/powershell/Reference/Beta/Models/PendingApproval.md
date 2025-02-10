---
id: beta-pending-approval
title: PendingApproval
pagination_label: PendingApproval
sidebar_label: PendingApproval
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PendingApproval', 'BetaPendingApproval'] 
slug: /tools/sdk/powershell/beta/models/pending-approval
tags: ['SDK', 'Software Development Kit', 'PendingApproval', 'BetaPendingApproval']
---


# PendingApproval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The approval id. | [optional] 
**Name** | **String** | The name of the approval. | [optional] 
**Created** | **System.DateTime** | When the approval was created. | [optional] 
**Modified** | **System.DateTime** | When the approval was modified last time. | [optional] 
**RequestCreated** | **System.DateTime** | When the access-request was created. | [optional] 
**RequestType** | [**AccessRequestType**](access-request-type) |  | [optional] 
**Requester** | [**AccessItemRequesterDto**](access-item-requester-dto) |  | [optional] 
**RequestedFor** | [**AccessItemRequestedForDto**](access-item-requested-for-dto) |  | [optional] 
**Owner** | [**AccessItemOwnerDto**](access-item-owner-dto) |  | [optional] 
**RequestedObject** | [**RequestableObjectReference**](requestable-object-reference) |  | [optional] 
**RequesterComment** | [**CommentDto1**](comment-dto1) |  | [optional] 
**PreviousReviewersComments** | [**[]CommentDto1**](comment-dto1) | The history of the previous reviewers comments. | [optional] 
**ForwardHistory** | [**[]ApprovalForwardHistory**](approval-forward-history) | The history of approval forward action. | [optional] 
**CommentRequiredWhenRejected** | **Boolean** | When true the rejector has to provide comments when rejecting | [optional] [default to $false]
**ActionInProcess** | [**PendingApprovalAction**](pending-approval-action) |  | [optional] 
**RemoveDate** | **System.DateTime** | The date the role or access profile or entitlement is no longer assigned to the specified identity. | [optional] 
**RemoveDateUpdateRequested** | **Boolean** | If true, then the request is to change the remove date or sunset date. | [optional] [default to $false]
**CurrentRemoveDate** | **System.DateTime** | The remove date or sunset date that was assigned at the time of the request. | [optional] 
**SodViolationContext** | [**SodViolationContextCheckCompleted1**](sod-violation-context-check-completed1) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$PendingApproval = Initialize-PSSailpoint.BetaPendingApproval  -Id 2c9180835d2e5168015d32f890ca1581 `
 -Name Pending approval name `
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

