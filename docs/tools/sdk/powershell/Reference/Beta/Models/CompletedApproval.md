---
id: beta-completed-approval
title: CompletedApproval
pagination_label: CompletedApproval
sidebar_label: CompletedApproval
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CompletedApproval', 'BetaCompletedApproval'] 
slug: /tools/sdk/powershell/beta/models/completed-approval
tags: ['SDK', 'Software Development Kit', 'CompletedApproval', 'BetaCompletedApproval']
---


# CompletedApproval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The approval id. | [optional] 
**Name** |  Pointer to **String** | The name of the approval. | [optional] 
**Created** |  Pointer to **System.DateTime** | When the approval was created. | [optional] 
**Modified** |  Pointer to **System.DateTime** | When the approval was modified last time. | [optional] 
**RequestCreated** |  Pointer to **System.DateTime** | When the access-request was created. | [optional] 
**RequestType** |  Pointer to [**AccessRequestType**](access-request-type) |  | [optional] 
**Requester** |  Pointer to [**AccessItemRequesterDto**](access-item-requester-dto) |  | [optional] 
**RequestedFor** |  Pointer to [**RequestedItemStatusRequestedFor**](requested-item-status-requested-for) |  | [optional] 
**ReviewedBy** |  Pointer to [**CompletedApprovalReviewedBy**](completed-approval-reviewed-by) |  | [optional] 
**Owner** |  Pointer to [**AccessItemOwnerDto**](access-item-owner-dto) |  | [optional] 
**RequestedObject** |  Pointer to [**RequestableObjectReference**](requestable-object-reference) |  | [optional] 
**RequesterComment** |  Pointer to [**CommentDto1**](comment-dto1) |  | [optional] 
**ReviewerComment** |  Pointer to [**CommentDto**](comment-dto) | The approval's reviewer's comment. | [optional] 
**PreviousReviewersComments** |  Pointer to [**[]CommentDto1**](comment-dto1) | The history of the previous reviewers comments. | [optional] 
**ForwardHistory** |  Pointer to [**[]ApprovalForwardHistory**](approval-forward-history) | The history of approval forward action. | [optional] 
**CommentRequiredWhenRejected** |  Pointer to **Boolean** | When true the rejector has to provide comments when rejecting | [optional] [default to $false]
**State** |  Pointer to [**CompletedApprovalState**](completed-approval-state) |  | [optional] 
**RemoveDate** |  Pointer to **System.DateTime** | The date the role or access profile or entitlement is no longer assigned to the specified identity. | [optional] 
**RemoveDateUpdateRequested** |  Pointer to **Boolean** | If true, then the request was to change the remove date or sunset date. | [optional] [default to $false]
**CurrentRemoveDate** |  Pointer to **System.DateTime** | The remove date or sunset date that was assigned at the time of the request. | [optional] 
**SodViolationContext** |  Pointer to [**SodViolationContextCheckCompleted1**](sod-violation-context-check-completed1) |  | [optional] 
**PreApprovalTriggerResult** |  Pointer to [**CompletedApprovalPreApprovalTriggerResult**](completed-approval-pre-approval-trigger-result) |  | [optional] 
**ClientMetadata** |  Pointer to **map[string]String** | Arbitrary key-value pairs provided during the request. | [optional] 

## Examples

- Prepare the resource
```powershell
$CompletedApproval = Initialize-PSSailpoint.BetaCompletedApproval  -Id 2c938083633d259901633d25c68c00fa `
 -Name Approval Name `
 -Created 2017-07-11T18:45:37.098Z `
 -Modified 2018-07-25T20:22:28.104Z `
 -RequestCreated 2017-07-11T18:45:35.098Z `
 -RequestType null `
 -Requester null `
 -RequestedFor null `
 -ReviewedBy null `
 -Owner null `
 -RequestedObject null `
 -RequesterComment null `
 -ReviewerComment null `
 -PreviousReviewersComments null `
 -ForwardHistory null `
 -CommentRequiredWhenRejected true `
 -State null `
 -RemoveDate 2020-07-11T00:00Z `
 -RemoveDateUpdateRequested true `
 -CurrentRemoveDate 2020-07-11T00:00Z `
 -SodViolationContext null `
 -PreApprovalTriggerResult null `
 -ClientMetadata {requestedAppName&#x3D;test-app, requestedAppId&#x3D;2c91808f7892918f0178b78da4a305a1}
```

- Convert the resource to JSON
```powershell
$CompletedApproval | ConvertTo-JSON
```


[[Back to top]](#) 

