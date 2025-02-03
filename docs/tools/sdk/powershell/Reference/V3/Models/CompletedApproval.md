---
id: completed-approval
title: CompletedApproval
pagination_label: CompletedApproval
sidebar_label: CompletedApproval
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CompletedApproval', 'CompletedApproval'] 
slug: /tools/sdk/powershell/v3/models/completed-approval
tags: ['SDK', 'Software Development Kit', 'CompletedApproval', 'CompletedApproval']
---


# CompletedApproval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The approval id. | [optional] 
**Name** | **String** | The name of the approval. | [optional] 
**Created** | **System.DateTime** | When the approval was created. | [optional] 
**Modified** | **System.DateTime** | When the approval was modified last time. | [optional] 
**RequestCreated** | **System.DateTime** | When the access-request was created. | [optional] 
**RequestType** | [**AccessRequestType**](access-request-type) |  | [optional] 
**Requester** | [**AccessItemRequester**](access-item-requester) |  | [optional] 
**RequestedFor** | [**RequestedItemStatusRequestedFor**](requested-item-status-requested-for) |  | [optional] 
**ReviewedBy** | [**AccessItemReviewedBy**](access-item-reviewed-by) |  | [optional] 
**Owner** | [**OwnerDto**](owner-dto) |  | [optional] 
**RequestedObject** | [**RequestableObjectReference**](requestable-object-reference) |  | [optional] 
**RequesterComment** | [**CompletedApprovalRequesterComment**](completed-approval-requester-comment) |  | [optional] 
**ReviewerComment** | [**CompletedApprovalReviewerComment**](completed-approval-reviewer-comment) |  | [optional] 
**PreviousReviewersComments** | [**[]CommentDto**](comment-dto) | The history of the previous reviewers comments. | [optional] 
**ForwardHistory** | [**[]ApprovalForwardHistory**](approval-forward-history) | The history of approval forward action. | [optional] 
**CommentRequiredWhenRejected** | **Boolean** | When true the rejector has to provide comments when rejecting | [optional] [default to $false]
**State** | [**CompletedApprovalState**](completed-approval-state) |  | [optional] 
**RemoveDate** | **System.DateTime** | The date the role or access profile or entitlement is no longer assigned to the specified identity. | [optional] 
**RemoveDateUpdateRequested** | **Boolean** | If true, then the request was to change the remove date or sunset date. | [optional] [default to $false]
**CurrentRemoveDate** | **System.DateTime** | The remove date or sunset date that was assigned at the time of the request. | [optional] 
**SodViolationContext** | [**SodViolationContextCheckCompleted**](sod-violation-context-check-completed) |  | [optional] 
**PreApprovalTriggerResult** | [**CompletedApprovalPreApprovalTriggerResult**](completed-approval-pre-approval-trigger-result) |  | [optional] 
**ClientMetadata** | **map[string]String** | Arbitrary key-value pairs provided during the request. | [optional] 

## Examples

- Prepare the resource
```powershell
$CompletedApproval = Initialize-PSSailpoint.V3CompletedApproval  -Id id12345 `
 -Name aName `
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

