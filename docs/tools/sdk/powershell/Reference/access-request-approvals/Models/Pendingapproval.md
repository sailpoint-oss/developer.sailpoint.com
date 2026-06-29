---
id: pendingapproval
title: Pendingapproval
pagination_label: Pendingapproval
sidebar_label: Pendingapproval
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Pendingapproval', 'Pendingapproval'] 
slug: /tools/sdk/powershell/accessrequestapprovals/models/pendingapproval
tags: ['SDK', 'Software Development Kit', 'Pendingapproval', 'Pendingapproval']
---


# Pendingapproval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The approval id. | [optional] 
**AccessRequestId** | **String** | This is the access request id. | [optional] 
**Name** | **String** | The name of the approval. | [optional] 
**Created** | **System.DateTime** | When the approval was created. | [optional] 
**Modified** | **System.DateTime** | When the approval was modified last time. | [optional] 
**RequestCreated** | **System.DateTime** | When the access-request was created. | [optional] 
**RequestType** | [**Accessrequesttype**](accessrequesttype) |  | [optional] 
**Requester** | [**Accessitemrequester**](accessitemrequester) |  | [optional] 
**RequestedFor** | [**Accessitemrequestedfor**](accessitemrequestedfor) |  | [optional] 
**Owner** | [**PendingapprovalOwner**](pendingapproval-owner) |  | [optional] 
**RequestedObject** | [**Requestableobjectreference**](requestableobjectreference) |  | [optional] 
**RequesterComment** | [**Commentdto**](commentdto) |  | [optional] 
**PreviousReviewersComments** | [**[]Commentdto**](commentdto) | The history of the previous reviewers comments. | [optional] 
**ForwardHistory** | [**[]Approvalforwardhistory**](approvalforwardhistory) | The history of approval forward action. | [optional] 
**CommentRequiredWhenRejected** | **Boolean** | When true the rejector has to provide comments when rejecting | [optional] [default to $false]
**ActionInProcess** | [**Pendingapprovalaction**](pendingapprovalaction) |  | [optional] 
**RemoveDate** | **System.DateTime** | The date the role or access profile or entitlement is no longer assigned to the specified identity. | [optional] 
**RemoveDateUpdateRequested** | **Boolean** | If true, then the request is to change the remove date or sunset date. | [optional] [default to $false]
**CurrentRemoveDate** | **System.DateTime** | The remove date or sunset date that was assigned at the time of the request. | [optional] 
**StartDate** | **System.DateTime** | The date the role or access profile or entitlement is/will assigned to the specified identity. | [optional] 
**StartUpdateRequested** | **Boolean** | If true, then the request is to change the start date or sunrise date. | [optional] [default to $false]
**CurrentStartDate** | **System.DateTime** | The start date or sunrise date that was assigned at the time of the request. | [optional] 
**SodViolationContext** | [**Sodviolationcontextcheckcompleted**](sodviolationcontextcheckcompleted) |  | [optional] 
**ClientMetadata** | **map[string]String** | Arbitrary key-value pairs, if any were included in the corresponding access request item | [optional] 
**RequestedAccounts** | [**[]Requestedaccountref**](requestedaccountref) | The accounts selected by the user for the access to be provisioned on, in case they have multiple accounts on one or more sources. | [optional] 
**PrivilegeLevel** | **String** | The privilege level of the requested access item, if applicable. | [optional] 
**MaxPermittedAccessDuration** | [**PendingapprovalMaxPermittedAccessDuration**](pendingapproval-max-permitted-access-duration) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Pendingapproval = Initialize-Pendingapproval  -Id id12345 `
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
 -StartDate 2020-07-11T00:00Z `
 -StartUpdateRequested true `
 -CurrentStartDate 2020-07-11T00:00Z `
 -SodViolationContext null `
 -ClientMetadata {"customKey1":"custom value 1","customKey2":"custom value 2"} `
 -RequestedAccounts null `
 -PrivilegeLevel High `
 -MaxPermittedAccessDuration null
```

- Convert the resource to JSON
```powershell
$Pendingapproval | ConvertTo-JSON
```


[[Back to top]](#) 

