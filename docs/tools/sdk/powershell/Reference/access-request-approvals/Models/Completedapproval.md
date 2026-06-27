---
id: completedapproval
title: Completedapproval
pagination_label: Completedapproval
sidebar_label: Completedapproval
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Completedapproval', 'Completedapproval'] 
slug: /tools/sdk/powershell/accessrequestapprovals/models/completedapproval
tags: ['SDK', 'Software Development Kit', 'Completedapproval', 'Completedapproval']
---


# Completedapproval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The approval id. | [optional] 
**Name** | **String** | The name of the approval. | [optional] 
**Created** | **System.DateTime** | When the approval was created. | [optional] 
**Modified** | **System.DateTime** | When the approval was modified last time. | [optional] 
**RequestCreated** | **System.DateTime** | When the access-request was created. | [optional] 
**RequestType** | [**Accessrequesttype**](accessrequesttype) |  | [optional] 
**Requester** | [**Accessitemrequester**](accessitemrequester) |  | [optional] 
**RequestedFor** | [**CompletedapprovalRequestedFor**](completedapproval-requested-for) |  | [optional] 
**ReviewedBy** | [**Accessitemreviewedby**](accessitemreviewedby) |  | [optional] 
**Owner** | [**Ownerdto**](ownerdto) |  | [optional] 
**RequestedObject** | [**Requestableobjectreference**](requestableobjectreference) |  | [optional] 
**RequesterComment** | [**CompletedapprovalRequesterComment**](completedapproval-requester-comment) |  | [optional] 
**ReviewerComment** | [**CompletedapprovalReviewerComment**](completedapproval-reviewer-comment) |  | [optional] 
**PreviousReviewersComments** | [**[]Commentdto**](commentdto) | The history of the previous reviewers comments. | [optional] 
**ForwardHistory** | [**[]Approvalforwardhistory**](approvalforwardhistory) | The history of approval forward action. | [optional] 
**CommentRequiredWhenRejected** | **Boolean** | When true the rejector has to provide comments when rejecting | [optional] [default to $false]
**State** | [**Completedapprovalstate**](completedapprovalstate) |  | [optional] 
**RemoveDate** | **System.DateTime** | The date the role or access profile or entitlement is no longer assigned to the specified identity. | [optional] 
**RemoveDateUpdateRequested** | **Boolean** | If true, then the request was to change the remove date or sunset date. | [optional] [default to $false]
**CurrentRemoveDate** | **System.DateTime** | The remove date or sunset date that was assigned at the time of the request. | [optional] 
**StartDate** | **System.DateTime** | The date the role or access profile or entitlement is/will assigned to the specified identity. | [optional] 
**StartUpdateRequested** | **Boolean** | If true, then the request is to change the start date or sunrise date. | [optional] [default to $false]
**CurrentStartDate** | **System.DateTime** | The start date or sunrise date that was assigned at the time of the request. | [optional] 
**SodViolationContext** | [**Sodviolationcontextcheckcompleted**](sodviolationcontextcheckcompleted) |  | [optional] 
**PreApprovalTriggerResult** | [**CompletedapprovalPreApprovalTriggerResult**](completedapproval-pre-approval-trigger-result) |  | [optional] 
**ClientMetadata** | **map[string]String** | Arbitrary key-value pairs provided during the request. | [optional] 
**RequestedAccounts** | [**[]Requestedaccountref**](requestedaccountref) | The accounts selected by the user for the access to be provisioned on, in case they have multiple accounts on one or more sources. | [optional] 
**PrivilegeLevel** | **String** | The privilege level of the requested access item, if applicable. | [optional] 
**MaxPermittedAccessDuration** | [**PendingapprovalMaxPermittedAccessDuration**](pendingapproval-max-permitted-access-duration) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Completedapproval = Initialize-Completedapproval  -Id id12345 `
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
 -StartDate 2020-07-11T00:00Z `
 -StartUpdateRequested true `
 -CurrentStartDate 2020-07-11T00:00Z `
 -SodViolationContext null `
 -PreApprovalTriggerResult null `
 -ClientMetadata {"requestedAppName":"test-app","requestedAppId":"2c91808f7892918f0178b78da4a305a1"} `
 -RequestedAccounts null `
 -PrivilegeLevel High `
 -MaxPermittedAccessDuration null
```

- Convert the resource to JSON
```powershell
$Completedapproval | ConvertTo-JSON
```


[[Back to top]](#) 

